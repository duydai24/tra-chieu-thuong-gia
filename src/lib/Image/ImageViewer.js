/* eslint-disable @next/next/no-img-element */
import {getRealImageUrl} from 'core/getRealImageUrl';
import {trackerError} from 'core/trackerError';
import {useEffect, useState} from 'react';
import {isBase64Image} from 'utils/isBase64Image';

function ImageViewer({
  source,
  src,
  onClick,
  className,
  width = 120,
  height = 106,
  NullIcon,
  nullIconStyle
}) {
  const [imageLoaded, setImage] = useState(null);
  const _onClick = () => {
    onClick && onClick();
  };
  useEffect(() => {
    let _isCanceled = false;
    let onLoaded = () => {
      !_isCanceled && setImage(getRealImageUrl(src || source));
    };
    const loadData = () => {
      if (!src && !source) {
        !_isCanceled && setImage(null);
        return;
      }
      if (isBase64Image(src || source)) {
        !_isCanceled && setImage(src || source);
        return;
      }
      const srcString = (src || source) + '';
      if (
        !srcString.includes('.svg') &&
        !srcString.includes('.png') &&
        !srcString.includes('.jpg') &&
        !srcString.includes('.webp') &&
        !srcString.includes('.bmp') &&
        !srcString.includes('.jpeg') &&
        !srcString.includes('https://lh') &&
        !srcString.includes('https://graph')
      ) {
        !_isCanceled && setImage(null);
        return;
      }
      const fixURL = srcString.includes('http://lh')
        ? srcString + '=w200-h200-c'
        : getRealImageUrl(src || source);
      let imgLoaded = new Image();
      imgLoaded.src = fixURL;
      imgLoaded.onload = onLoaded;
      imgLoaded.onerror = (e) => {
        trackerError('Load image error', src, e);
      };
    };
    loadData();
    return () => {
      _isCanceled = true;
      onLoaded = () => { };
    };
  }, [src, source]);
  const _className = className ? className : 'img';
  if (!imageLoaded) {
    if (!NullIcon)
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={_className}
          onClick={_onClick}
          viewBox={`0 0 ${width} ${height}`}
        >
          <rect width={width} height={height} fill='#959595' />
        </svg>
      );
    else
      return <div className={_className}>
        <NullIcon width={width} height={height} className={nullIconStyle} />
      </div>;
  }
  return (
    <img
      onClick={_onClick}
      width={width}
      height={height}
      src={imageLoaded}
      alt='post_image'
      className={_className}
    />
  );
}

export default ImageViewer;
