import React from 'react';
import {useSwipeable} from 'react-swipeable';

const SwipeWrapper = ({
  children,
  className = '',
  delta = 0,
  onSwiping = () => { },
  onSwiped = () => { },
}) => {
  const swipeHandlers = useSwipeable({
    delta,
    onSwiping,
    onSwiped,
  });
  return (
    <div {...swipeHandlers} className={className}>
      {children}
    </div>
  );
};

export default SwipeWrapper;