/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Mouse(props) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPoint({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
      {props.render(point)}
    </div>
  );

}

function MouseTracker() {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse render={(point) => (
        <p>The current mouse position is ({point.x}, {point.y})</p>
      )} />
    </div>
  );
}

export default MouseTracker;