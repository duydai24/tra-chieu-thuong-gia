import React from 'react';

export function LoadingCircle({text = 'Đang nạp dữ liệu'}) {
  return (
    <div className="preloader-container">
      <div className="preloader">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
        <h4>{text}</h4>
      </div>
    </div>
  );
}
