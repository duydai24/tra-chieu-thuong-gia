import React from 'react';

function Button({className, title, children, onClick, capture, disabled, hidden, ...props}) {
  const onButtonClick = (e) => {
    if (capture) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onClick && !disabled) {
      onClick();
    }
  };
  if (hidden) return null;
  return (<button
    aria-label={title}
    className={'btn ' + (className || '')}
    title={title} onClick={onButtonClick} {...props}>
    {children}
  </button>);
}

export default Button;
export function ButtonCircle({className, ...props}) {
  return <Button className={'  ' + (className || '')} {...props} />;
}
export function ButtonImage({className, ...props}) {
  return <Button className={'btn-img ' + (className || '')} {...props} />;
}
export function ButtonNoneBorder({className, ...props}) {
  return <Button className={'btn-none ' + (className || '')} {...props} />;
}
export function ButtonGroup({props}) {
  return <div className="btns" {...props} />;
}