/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import {getRealImageUrl} from 'core/getRealImageUrl';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import throttle from 'lodash/throttle';
import React from 'react';
import {
  DOWN,
  LEFT,
  RIGHT,
  UP,
} from 'react-swipeable';
import ResizeObserver from 'resize-observer-polyfill';

import SVG from './SVG';
import SwipeWrapper from './SwipeWrapper';

const screenChangeEvents = [
  'fullscreenchange',
  'MSFullscreenChange',
  'mozfullscreenchange',
  'webkitfullscreenchange',
];

function isEnterOrSpaceKey(event) {
  const key = parseInt(event.keyCode || event.which || 0, 10);
  const ENTER_KEY_CODE = 66;
  const SPACEBAR_KEY_CODE = 62;
  return key === ENTER_KEY_CODE || key === SPACEBAR_KEY_CODE;
}

export default class ImgSlider extends React.Component {

  static defaultProps = {
    onErrorImageURL: '',
    additionalClass: '',
    showNav: true,
    autoPlay: false,
    lazyLoad: false,
    infinite: true,
    showIndex: false,
    showBullets: false,
    showPlayButton: true,
    showFullscreenButton: true,
    disableKeyDown: false,
    disableSwipe: false,
    useTranslate3D: true,
    useBrowserFullscreen: true,
    flickThreshold: 0.4,
    stopPropagation: false,
    indexSeparator: ' / ',
    startIndex: 0,
    slideDuration: 450,
    swipingTransitionDuration: 0,
    onSlide: null,
    onBeforeSlide: null,
    onScreenChange: null,
    onPause: null,
    onPlay: null,
    onClick: null,
    onImageLoad: null,
    onImageError: null,
    onTouchMove: null,
    onTouchEnd: null,
    onTouchStart: null,
    onMouseOver: null,
    onMouseLeave: null,
    renderCustomControls: null,
    renderItem: null,
    slideInterval: 3000,
    swipeThreshold: 30,
    renderLeftNav: (onClick, disabled) => (
      <button
        type="button"
        className="image-gallery-icon image-gallery-left-nav"
        disabled={disabled}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <SVG icon="left" viewBox="6 0 12 24" />
      </button>
    ),
    renderRightNav: (onClick, disabled) => (
      <button
        type="button"
        className="image-gallery-icon image-gallery-right-nav"
        disabled={disabled}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <SVG icon="right" viewBox="6 0 12 24" />
      </button>
    ),
    renderPlayPauseButton: (onClick, isPlaying) => (
      <button
        type="button"
        className="image-gallery-icon image-gallery-play-button"
        onClick={onClick}
        aria-label="Play or Pause Slideshow"
      >
        <SVG strokeWidth={1} icon={isPlaying ? 'pause' : 'play'} />
      </button>
    ),
    renderFullscreenButton: (onClick, isFullscreen) => (
      <button
        type="button"
        className="image-gallery-icon image-gallery-fullscreen-button"
        onClick={onClick}
        aria-label="Open Fullscreen"
      >
        <SVG strokeWidth={1} icon={isFullscreen ? 'minimize' : 'maximize'} />
      </button>
    ),
    useWindowKeyDown: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: props.startIndex,
      currentSlideOffset: 0,
      galleryWidth: 0,

      isFullscreen: false,
      isPlaying: false,
    };
    this.loadedImages = {};
    this.imageGallery = React.createRef();
    this.imageGallerySlideWrapper = React.createRef();

    // bindings
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleOnSwiped = this.handleOnSwiped.bind(this);
    this.handleScreenChange = this.handleScreenChange.bind(this);
    this.handleSwiping = this.handleSwiping.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
    this.pauseOrPlay = this.pauseOrPlay.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

    // Used to update the throttle if slideDuration changes
    this.unthrottledSlideToIndex = this.slideToIndex;
    this.slideToIndex = throttle(
      this.unthrottledSlideToIndex, props.slideDuration, {trailing: false},
    );

    if (props.lazyLoad) {
      this.lazyLoaded = [];
    }
  }

  componentDidMount() {
    const {autoPlay, useWindowKeyDown} = this.props;
    if (autoPlay) {
      this.play();
    }
    if (useWindowKeyDown) {
      window.addEventListener('keydown', this.handleKeyDown);
    } else {
      this.imageGallery.current.addEventListener('keydown', this.handleKeyDown);
    }
    window.addEventListener('mousedown', this.handleMouseDown);
    this.initResizeObserver(this.imageGallerySlideWrapper);
    this.addScreenChangeEvent();
  }

  componentDidUpdate(prevProps) {
    const {
      items,
      lazyLoad,
      slideDuration,
      slideInterval,
      startIndex,
      useWindowKeyDown,
    } = this.props;
    const itemsSizeChanged = prevProps.items.length !== items.length;
    const itemsChanged = !isEqual(prevProps.items, items);
    const startIndexUpdated = prevProps.startIndex !== startIndex;

    if (slideInterval !== prevProps.slideInterval || slideDuration !== prevProps.slideDuration) {
      // refresh setInterval
      this.pause();
      this.play();
    }

    if (itemsSizeChanged) {
      this.handleResize();
    }

    // if slideDuration changes, update slideToIndex throttle
    if (prevProps.slideDuration !== slideDuration) {
      this.slideToIndex = throttle(
        this.unthrottledSlideToIndex, slideDuration, {trailing: false},
      );
    }
    if (lazyLoad && (!prevProps.lazyLoad || itemsChanged)) {
      this.lazyLoaded = [];
    }

    if (useWindowKeyDown !== prevProps.useWindowKeyDown) {
      if (useWindowKeyDown) {
        this.imageGallery.current.removeEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keydown', this.handleKeyDown);
      } else {
        window.removeEventListener('keydown', this.handleKeyDown);
        this.imageGallery.current.addEventListener('keydown', this.handleKeyDown);
      }
    }

    if (startIndexUpdated || itemsChanged) {
      // TODO: this should be fix/removed
      this.setState({currentIndex: startIndex});
    }
  }

  componentWillUnmount() {
    const {useWindowKeyDown} = this.props;
    window.removeEventListener('mousedown', this.handleMouseDown);
    this.removeScreenChangeEvent();
    this.removeResizeObserver();
    if (this.playPauseIntervalId) {
      window.clearInterval(this.playPauseIntervalId);
      this.playPauseIntervalId = null;
    }
    if (this.transitionTimer) {
      window.clearTimeout(this.transitionTimer);
    }
    if (useWindowKeyDown) {
      window.removeEventListener('keydown', this.handleKeyDown);
    } else {
      this.imageGallery.current.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  onSliding() {
    const {currentIndex, isTransitioning} = this.state;
    const {onSlide, slideDuration} = this.props;
    this.transitionTimer = window.setTimeout(() => {
      if (isTransitioning) {
        this.setState({isTransitioning: !isTransitioning});
        if (onSlide) {
          onSlide(currentIndex);
        }
      }
    }, slideDuration + 50);
  }

  setScrollDirection(dir) {
    const {scrollingUpDown, scrollingLeftRight} = this.state;

    if (!scrollingUpDown && !scrollingLeftRight) {
      if (dir === LEFT || dir === RIGHT) {
        this.setState({scrollingLeftRight: true});
      } else {
        this.setState({scrollingUpDown: true});
      }
    }
  }

  setModalFullscreen(state) {
    const {onScreenChange} = this.props;
    this.setState({modalFullscreen: state});
    // manually call because browser does not support screenchange events
    if (onScreenChange) {
      onScreenChange(state);
    }
  }

  getAlignmentClassName(index) {
    // Necessary for lazing loading
    const {currentIndex} = this.state;
    const {infinite, items} = this.props;
    let alignment = '';
    const leftClassName = 'left';
    const centerClassName = 'center';
    const rightClassName = 'right';

    switch (index) {
      case (currentIndex - 1):
        alignment = ` ${leftClassName}`;
        break;
      case (currentIndex):
        alignment = ` ${centerClassName}`;
        break;
      case (currentIndex + 1):
        alignment = ` ${rightClassName}`;
        break;
      default:
        break;
    }

    if (items.length >= 3 && infinite) {
      if (index === 0 && currentIndex === items.length - 1) {
        // set first slide as right slide if were sliding right from last slide
        alignment = ` ${rightClassName}`;
      } else if (index === items.length - 1 && currentIndex === 0) {
        // set last slide as left slide if were sliding left from first slide
        alignment = ` ${leftClassName}`;
      }
    }

    return alignment;
  }

  getTranslateXForTwoSlide(index) {
    // For taking care of infinite swipe when there are only two slides
    const {currentIndex, currentSlideOffset, previousIndex} = this.state;
    const indexChanged = currentIndex !== previousIndex;
    const firstSlideWasPrevSlide = index === 0 && previousIndex === 0;
    const secondSlideWasPrevSlide = index === 1 && previousIndex === 1;
    const firstSlideIsNextSlide = index === 0 && currentIndex === 1;
    const secondSlideIsNextSlide = index === 1 && currentIndex === 0;
    const swipingEnded = currentSlideOffset === 0;
    const baseTranslateX = -100 * currentIndex;
    let translateX = baseTranslateX + (index * 100) + currentSlideOffset;

    // keep track of user swiping direction
    // important to understand how to translateX based on last direction
    if (currentSlideOffset > 0) {
      this.direction = 'left';
    } else if (currentSlideOffset < 0) {
      this.direction = 'right';
    }

    // when swiping between two slides make sure the next and prev slides
    // are on both left and right
    if (secondSlideIsNextSlide && currentSlideOffset > 0) { // swiping right
      translateX = -100 + currentSlideOffset;
    }
    if (firstSlideIsNextSlide && currentSlideOffset < 0) { // swiping left
      translateX = 100 + currentSlideOffset;
    }

    if (indexChanged) {
      // when indexChanged move the slide to the correct side
      if (firstSlideWasPrevSlide && swipingEnded && this.direction === 'left') {
        translateX = 100;
      } else if (secondSlideWasPrevSlide && swipingEnded && this.direction === 'right') {
        translateX = -100;
      }
    } else {
      // keep the slide on the correct side if the swipe was not successful
      if (secondSlideIsNextSlide && swipingEnded && this.direction === 'left') {
        translateX = -100;
      }
      if (firstSlideIsNextSlide && swipingEnded && this.direction === 'right') {
        translateX = 100;
      }
    }

    return translateX;
  }

  getSlideStyle(index) {
    const {currentIndex, currentSlideOffset, slideStyle} = this.state;
    const {
      infinite,
      items,
      useTranslate3D,
    } = this.props;
    const baseTranslateX = -100 * currentIndex;
    const totalSlides = items.length - 1;

    // calculates where the other slides belong based on currentIndex
    // if it is RTL the base line should be reversed
    let translateX = (baseTranslateX + (index * 100)) + currentSlideOffset;

    if (infinite && items.length > 2) {
      if (currentIndex === 0 && index === totalSlides) {
        // make the last slide the slide before the first
        // if it is RTL the base line should be reversed
        translateX = -100 + currentSlideOffset;
      } else if (currentIndex === totalSlides && index === 0) {
        // make the first slide the slide after the last
        // if it is RTL the base line should be reversed
        translateX = 100 + currentSlideOffset;
      }
    }

    // Special case when there are only 2 items with infinite on
    if (infinite && items.length === 2) {
      translateX = this.getTranslateXForTwoSlide(index);
    }

    let translate = `translate(${translateX}%, 0)`;

    if (useTranslate3D) {
      translate = `translate3d(${translateX}%, 0, 0)`;
    }

    return Object.assign({}, {
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      transform: translate,
    }, slideStyle);
  }

  getCurrentIndex() {
    const {currentIndex} = this.state;
    return currentIndex;
  }

  getSlideItems() {
    const {currentIndex} = this.state;
    const {
      infinite,
      items,
      onClick,
      lazyLoad,
      onTouchMove,
      onTouchEnd,
      onTouchStart,
      onMouseOver,
      onMouseLeave,
      renderItem,
      showBullets,
    } = this.props;

    const slides = [];
    const bullets = [];

    items.forEach((item, index) => {
      const alignment = this.getAlignmentClassName(index);
      const originalClass = item.originalClass ? ` ${item.originalClass}` : '';
      const handleRenderItem = item.renderItem || renderItem || this.renderItem;

      const showItem = !lazyLoad || alignment || this.lazyLoaded[index];
      if (showItem && lazyLoad && !this.lazyLoaded[index]) {
        this.lazyLoaded[index] = true;
      }

      const slideStyle = this.getSlideStyle(index);

      const slide = (
        <div
          aria-label={`_${index + 1}`}
          key={`slide-${index}`}
          tabIndex="-1"
          className={`image-gallery-slide ${alignment} ${originalClass}`}
          style={slideStyle}
          onClick={onClick}
          onKeyUp={this.handleSlideKeyUp}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onTouchStart={onTouchStart}
          onMouseOver={onMouseOver}
          onFocus={onMouseOver}
          onMouseLeave={onMouseLeave}
          role="button"
        >
          {showItem ? handleRenderItem(item) : <div style={{height: '100%'}} />}
        </div>
      );

      if (infinite) {
        // don't add some slides while transitioning to avoid background transitions
        if (this.shouldPushSlideOnInfiniteMode(index)) {
          slides.push(slide);
        }
      } else {
        slides.push(slide);
      }

      if (showBullets) {
        // generate bullet elements and store them in array
        const bulletOnClick = (event) => {
          if (item.bulletOnClick) {
            item.bulletOnClick({item, itemIndex: index, currentIndex});
          }
          // blur element to remove outline cause by focus
          event.target.blur();
          return this.slideToIndex.call(this, index, event);
        };
        const igBulletClass = clsx(
          'image-gallery-bullet',
          item.bulletClass,
          {active: currentIndex === index},
        );
        bullets.push(
          <button
            type="button"
            key={`bullet-${index}`}
            className={igBulletClass}
            onClick={bulletOnClick}
            aria-pressed={currentIndex === index ? 'true' : 'false'}
            aria-label={`Go to Slide ${index + 1}`}
          />,
        );
      }
    });

    return {
      slides,
      bullets,
    };
  }

  ignoreIsTransitioning() {
    /*
      Ignore isTransitioning because were not going to sibling slides
      e.g. center to left or center to right
    */
    const {items} = this.props;
    const {previousIndex, currentIndex} = this.state;
    const totalSlides = items.length - 1;
    // we want to show the in between slides transition
    const slidingMoreThanOneSlideLeftOrRight = Math.abs(previousIndex - currentIndex) > 1;
    const notGoingFromFirstToLast = !(previousIndex === 0 && currentIndex === totalSlides);
    const notGoingFromLastToFirst = !(previousIndex === totalSlides && currentIndex === 0);

    return slidingMoreThanOneSlideLeftOrRight
      && notGoingFromFirstToLast
      && notGoingFromLastToFirst;
  }

  isFirstOrLastSlide(index) {
    const {items} = this.props;
    const totalSlides = items.length - 1;
    const isLastSlide = index === totalSlides;
    const isFirstSlide = index === 0;
    return isLastSlide || isFirstSlide;
  }

  slideIsTransitioning(index) {
    /*
    returns true if the gallery is transitioning and the index is not the
    previous or currentIndex
    */
    const {isTransitioning, previousIndex, currentIndex} = this.state;
    const indexIsNotPreviousOrNextSlide = !(index === previousIndex || index === currentIndex);
    return isTransitioning && indexIsNotPreviousOrNextSlide;
  }

  shouldPushSlideOnInfiniteMode(index) {
    /*
      Push (show) slide if slide is the current slide and the next slide
      OR
      The slide is going more than one slide left or right, but not going from
      first to last and not going from last to first

      Edge case:
      If you go to the first or last slide, when they're
      not left, or right of each other they will try to catch up in the background
      so unless were going from first to last or vice versa we don't want the first
      or last slide to show up during the transition
    */
    return !this.slideIsTransitioning(index)
      || (this.ignoreIsTransitioning() && !this.isFirstOrLastSlide(index));
  }

  canSlide() {
    const {items} = this.props;
    return items.length >= 2;
  }

  canSlideLeft() {
    const {infinite} = this.props;
    return infinite || this.canSlidePrevious();
  }

  canSlideRight() {
    const {infinite} = this.props;
    return infinite || this.canSlideNext();
  }

  canSlidePrevious() {
    const {currentIndex} = this.state;
    return currentIndex > 0;
  }

  canSlideNext() {
    const {currentIndex} = this.state;
    const {items} = this.props;
    return currentIndex < items.length - 1;
  }

  handleSwiping({event, absX, dir}) {
    const {disableSwipe, stopPropagation} = this.props;
    const {
      galleryWidth,
      isTransitioning,
    } = this.state;

    if (disableSwipe) return;

    const {swipingTransitionDuration} = this.props;

    this.setScrollDirection(dir);
    if (stopPropagation) event.stopPropagation();

    if (!isTransitioning) {
      const side = dir === RIGHT ? 1 : -1;

      let currentSlideOffset = (absX / galleryWidth * 100);
      if (Math.abs(currentSlideOffset) >= 100) {
        currentSlideOffset = 100;
      }

      const swipingTransition = {
        transition: `transform ${swipingTransitionDuration}ms ease-out`,
      };

      this.setState({
        currentSlideOffset: side * currentSlideOffset,
        slideStyle: swipingTransition,
      });
    } else {
      // don't move the slide
      this.setState({currentSlideOffset: 0});
    }
  }

  sufficientSwipe() {
    const {currentSlideOffset} = this.state;
    const {swipeThreshold} = this.props;
    return Math.abs(currentSlideOffset) > swipeThreshold;
  }

  handleOnSwiped({event, dir, velocity}) {
    const {disableSwipe, stopPropagation, flickThreshold} = this.props;
    const {scrollingUpDown, scrollingLeftRight} = this.state;

    if (disableSwipe) return;

    if (stopPropagation) event.stopPropagation();
    if (scrollingUpDown) {
      // user stopped scrollingUpDown
      this.setState({scrollingUpDown: false});
    }

    if (scrollingLeftRight) {
      // user stopped scrollingLeftRight
      this.setState({scrollingLeftRight: false});
    }

    // if it is RTL the direction is reversed
    const swipeDirection = (dir === LEFT ? 1 : -1);
    const isSwipeUpOrDown = dir === UP || dir === DOWN;
    const isLeftRightFlick = (velocity > flickThreshold) && !isSwipeUpOrDown;
    this.handleOnSwipedTo(swipeDirection, isLeftRightFlick);
  }

  handleOnSwipedTo(swipeDirection, isLeftRightFlick) {
    const {currentIndex, isTransitioning} = this.state;
    let slideTo = currentIndex;

    if ((this.sufficientSwipe() || isLeftRightFlick) && !isTransitioning) {
      // slideto the next/prev slide
      slideTo += swipeDirection;
    }

    // If we can't swipe left or right, stay in the current index (noop)
    if ((swipeDirection === -1 && !this.canSlideLeft())
      || (swipeDirection === 1 && !this.canSlideRight())) {
      slideTo = currentIndex;
    }

    this.unthrottledSlideToIndex(slideTo);
  }

  handleMouseDown() {
    // keep track of mouse vs keyboard usage for a11y
    this.imageGallery.current?.classList.add('image-gallery-using-mouse');
  }

  handleKeyDown(event) {
    const {disableKeyDown, useBrowserFullscreen} = this.props;
    const {isFullscreen} = this.state;
    // keep track of mouse vs keyboard usage for a11y
    this.imageGallery.current?.classList.remove('image-gallery-using-mouse');

    if (disableKeyDown) return;
    const LEFT_ARROW = 37;
    const RIGHT_ARROW = 39;
    const ESC_KEY = 27;
    const key = parseInt(event.keyCode || event.which || 0, 10);

    switch (key) {
      case LEFT_ARROW:
        if (this.canSlideLeft() && !this.playPauseIntervalId) {
          this.slideLeft(event);
        }
        break;
      case RIGHT_ARROW:
        if (this.canSlideRight() && !this.playPauseIntervalId) {
          this.slideRight(event);
        }
        break;
      case ESC_KEY:
        if (isFullscreen && !useBrowserFullscreen) {
          this.exitFullScreen();
        }
        break;
      default:
        break;
    }
  }

  handleImageError(event) {
    const {onErrorImageURL} = this.props;
    if (onErrorImageURL && event.target.src.indexOf(onErrorImageURL) === -1) {
      /* eslint-disable no-param-reassign */
      event.target.src = onErrorImageURL;
      /* eslint-enable no-param-reassign */
    }
  }

  removeResizeObserver() {
    if (this.resizeObserver
      && this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current) {
      this.resizeObserver.unobserve(this.imageGallerySlideWrapper.current);
      this.resizeObserver = null;
    }
  }

  handleResize() {

    // if there is no resizeObserver, component has been unmounted
    if (!this.resizeObserver) {
      return;
    }

    if (this.imageGallery && this.imageGallery.current) {
      this.setState({galleryWidth: this.imageGallery.current.offsetWidth});
    }

    if (this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current) {
      this.setState({
        gallerySlideWrapperHeight: this.imageGallerySlideWrapper.current.offsetHeight,
      });
    }

  }

  initResizeObserver(element) {
    this.resizeObserver = new ResizeObserver(debounce((entries) => {
      if (!entries) return;
      entries.forEach(() => {
        this.handleResize();
      });
    }, 300));
    this.resizeObserver.observe(element.current);
  }

  toggleFullScreen() {
    const {isFullscreen} = this.state;
    if (isFullscreen) {
      this.exitFullScreen();
    } else {
      this.fullScreen();
    }
  }

  togglePlay() {
    if (this.playPauseIntervalId) {
      this.pause();
    } else {
      this.play();
    }
  }

  handleScreenChange() {
    /*
      handles screen change events that the browser triggers e.g. esc key
    */
    const {onScreenChange, useBrowserFullscreen} = this.props;
    const fullScreenElement = document.fullscreenElement
      || document.msFullscreenElement
      || document.mozFullScreenElement
      || document.webkitFullscreenElement;

    // check if screenchange element is the gallery
    const isFullscreen = this.imageGallery.current === fullScreenElement;
    if (onScreenChange) onScreenChange(isFullscreen);
    if (useBrowserFullscreen) this.setState({isFullscreen});
  }

  slideToIndex(index, event) {
    const {currentIndex, isTransitioning} = this.state;
    const {items, slideDuration, onBeforeSlide} = this.props;

    if (!isTransitioning) {
      if (event) {
        if (this.playPauseIntervalId) {
          // user triggered event while ImageGallery is playing, reset interval
          this.pause(false);
          this.play(false);
        }
      }

      const slideCount = items.length - 1;
      let nextIndex = index;
      if (index < 0) {
        nextIndex = slideCount;
      } else if (index > slideCount) {
        nextIndex = 0;
      }

      if (onBeforeSlide && nextIndex !== currentIndex) {
        onBeforeSlide(nextIndex);
      }

      this.setState({
        previousIndex: currentIndex,
        currentIndex: nextIndex,
        isTransitioning: nextIndex !== currentIndex,
        currentSlideOffset: 0,
        slideStyle: {transition: `all ${slideDuration}ms ease-out`},
      }, this.onSliding);
    }
  }

  slideLeft(event) {

    this.slidePrevious(event);

  }

  slideRight(event) {

    this.slideNext(event);

  }

  slidePrevious(event) {
    const {currentIndex, currentSlideOffset, isTransitioning} = this.state;
    const {items} = this.props;
    const nextIndex = currentIndex - 1;

    if (isTransitioning) return;

    if (items.length === 2) {
      /*
        When there are only 2 slides fake a tiny swipe to get the slides
        on the correct side for transitioning
      */
      this.setState({
        currentSlideOffset: currentSlideOffset + 0.001, // this will reset once index changes
        slideStyle: {transition: 'none'}, // move the slide over instantly
      }, () => {
        // add 25ms timeout to avoid delay in moving slides over
        window.setTimeout(() => this.slideToIndex(nextIndex, event), 25);
      });
    } else {
      this.slideToIndex(nextIndex, event);
    }
  }

  slideNext(event) {
    const {currentIndex, currentSlideOffset, isTransitioning} = this.state;
    const {items} = this.props;
    const nextIndex = currentIndex + 1;

    if (isTransitioning) return;

    if (items.length === 2) {
      // same as above for 2 slides
      this.setState({
        currentSlideOffset: currentSlideOffset - 0.001,
        slideStyle: {transition: 'none'},
      }, () => {
        window.setTimeout(() => this.slideToIndex(nextIndex, event), 25);
      });
    } else {
      this.slideToIndex(nextIndex, event);
    }
  }

  handleSlideKeyUp(event) {
    // a11y support ^_^
    if (isEnterOrSpaceKey(event)) {
      const {onClick} = this.props;
      onClick(event);
    }
  }

  addScreenChangeEvent() {
    screenChangeEvents.forEach((eventName) => {
      document.addEventListener(eventName, this.handleScreenChange);
    });
  }

  removeScreenChangeEvent() {
    screenChangeEvents.forEach((eventName) => {
      document.removeEventListener(eventName, this.handleScreenChange);
    });
  }

  fullScreen() {
    const {useBrowserFullscreen} = this.props;
    const gallery = this.imageGallery.current;
    if (useBrowserFullscreen) {
      if (gallery.requestFullscreen) {
        gallery.requestFullscreen();
      } else if (gallery.msRequestFullscreen) {
        gallery.msRequestFullscreen();
      } else if (gallery.mozRequestFullScreen) {
        gallery.mozRequestFullScreen();
      } else if (gallery.webkitRequestFullscreen) {
        gallery.webkitRequestFullscreen();
      } else {
        // fallback to fullscreen modal for unsupported browsers
        this.setModalFullscreen(true);
      }
    } else {
      this.setModalFullscreen(true);
    }
    this.setState({isFullscreen: true});
  }

  exitFullScreen() {
    const {isFullscreen} = this.state;
    const {useBrowserFullscreen} = this.props;
    if (isFullscreen) {
      if (useBrowserFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else {
          // fallback to fullscreen modal for unsupported browsers
          this.setModalFullscreen(false);
        }
      } else {
        this.setModalFullscreen(false);
      }
      this.setState({isFullscreen: false});
    }
  }

  pauseOrPlay() {
    const {infinite} = this.props;
    const {currentIndex} = this.state;
    if (!infinite && !this.canSlideRight()) {
      this.pause();
    } else {
      this.slideToIndex(currentIndex + 1);
    }
  }

  play(shouldCallOnPlay = true) {
    const {
      onPlay,
      slideInterval,
      slideDuration,
    } = this.props;
    const {currentIndex} = this.state;
    if (!this.playPauseIntervalId) {
      this.setState({isPlaying: true});
      this.playPauseIntervalId = window.setInterval(
        this.pauseOrPlay,
        Math.max(slideInterval, slideDuration),
      );
      if (onPlay && shouldCallOnPlay) {
        onPlay(currentIndex);
      }
    }
  }

  pause(shouldCallOnPause = true) {
    const {onPause} = this.props;
    const {currentIndex} = this.state;
    if (this.playPauseIntervalId) {
      window.clearInterval(this.playPauseIntervalId);
      this.playPauseIntervalId = null;
      this.setState({isPlaying: false});
      if (onPause && shouldCallOnPause) {
        onPause(currentIndex);
      }
    }
  }

  isImageLoaded(item) {
    /*
      Keep track of images loaded so that onImageLoad prop is not
      called multiple times when re-render the images
    */
    const imageExists = this.loadedImages[item.original];
    if (imageExists) {
      return true;
    }
    // add image as loaded
    this.loadedImages[item.original] = true;
    return false;
  }

  handleImageLoaded(event, item) {
    const {onImageLoad} = this.props;
    const imageExists = this.loadedImages[item.original];
    if (!imageExists && onImageLoad) {
      this.loadedImages[item.original] = true; // prevent from call again
      // image just loaded, call onImageLoad
      onImageLoad(event);
    }
  }

  renderItem(item) {
    const {isFullscreen} = this.state;
    const {onImageError} = this.props;
    const handleImageError = onImageError || this.handleImageError;
    const itemSrc = isFullscreen ? (item.fullscreen || item.original) : item.original;

    return (
      <>
        <div className=' md:hidden overflow-hidden'
          style={{
            background: `url(${item.mobile ? getRealImageUrl(item.mobile) : itemSrc})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            width: 'auto', height: '420px'
          }}>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 leading-5 w-64 -translate-y-1/2'>
            <p className='text-white text-xl max-w-full  font-bold mb-3 leading-6 whitespace-normal'>{item.label}</p>
            <p className='text-white max-w-full  leading-5 whitespace-normal line-clamp-3 break-words overflow-ellipsis'>{item.extra}</p>
          </div>
        </div>
        <div className=' hidden md:block'
          style={{
            background: `url(${itemSrc})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            width: '100%', height: '700px'
          }}>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 leading-5  -translate-y-1/2'>
            <p className='text-white text-3xl max-w-xs md:max-w-4xl font-bold mb-3 leading-10 whitespace-normal'>{item.label}</p>
            <p className='text-white max-w-xs md:max-w-4xl  break-words leading-5 whitespace-normal'>{item.extra}</p>
          </div>
        </div>
      </>
    );
  }

  render() {
    const {
      isFullscreen,
      modalFullscreen,
      isPlaying,
    } = this.state;

    const {
      additionalClass,
      renderFullscreenButton,
      renderCustomControls,
      renderLeftNav,
      renderRightNav,
      showBullets,
      showFullscreenButton,
      showNav,
      showPlayButton,
      renderPlayPauseButton,
    } = this.props;

    const {slides, bullets} = this.getSlideItems();
    const slideWrapperClass = 'image-gallery-slide-wrapper';

    const slideWrapper = (
      <div ref={this.imageGallerySlideWrapper} className={slideWrapperClass}>
        {renderCustomControls && renderCustomControls()}
        {
          this.canSlide() ? (
            <React.Fragment>

              <SwipeWrapper
                className="image-gallery-swipe"
                delta={0}
                onSwiping={this.handleSwiping}
                onSwiped={this.handleOnSwiped}
              >
                <div className="image-gallery-slides">
                  {slides}
                </div>
              </SwipeWrapper>
            </React.Fragment>
          ) : (
            <div className="image-gallery-slides">
              {slides}
            </div>
          )
        }
        {showPlayButton && renderPlayPauseButton(this.togglePlay, isPlaying)}
        {
          showBullets && (
            <div className="image-gallery-bullets">
              <div
                className="image-gallery-bullets-container"
                role="navigation"
                aria-label="Bullet Navigation"
              >
                {bullets}
              </div>
            </div>
          )
        }
        {showFullscreenButton && renderFullscreenButton(this.toggleFullScreen, isFullscreen)}

      </div>
    );

    const igClass = clsx('image-gallery', additionalClass, {'fullscreen-modal': modalFullscreen});
    const igContentClass = clsx('image-gallery-content', {fullscreen: isFullscreen});

    return (
      <div
        ref={this.imageGallery}
        className={igClass}
        aria-live="polite"
      >
        <div className={igContentClass}>
          {slideWrapper}
        </div>

      </div>
    );
  }
}