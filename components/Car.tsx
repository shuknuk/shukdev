import React from 'react';

const Car: React.FC = () => {
  return (
    <div className="car-container">
      <div className="car">
        <div className="car-body">
          <div className="car-top">
            <div className="window window-front"></div>
            <div className="window window-back"></div>
          </div>
          <div className="headlight headlight-front"></div>
          <div className="taillight"></div>
        </div>
        <div className="wheel wheel-front">
          <div className="hubcap"></div>
        </div>
        <div className="wheel wheel-back">
          <div className="hubcap"></div>
        </div>
      </div>
    </div>
  );
};

export default Car;
