import React from 'react';

function SnowBackground() {
  const snowList = Array.from(Array(120).keys());
  return (
    <div className="snow z-50 lg:h-[11rem] h-[100px] bottom-0">
      {snowList.map((item, index) => (
        <div className="snowflake" key={index} />
      ))}
    </div>
  );
}
export default SnowBackground;
