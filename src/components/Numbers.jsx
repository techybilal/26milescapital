import React from 'react';

const Numbers = () => {
  return (
    <section id="numbers">
      <div className="container">
        <div className="row g-4 align-items-center text-center text-white">
          {/* Left Block */}
          <div className="col-md-4">
            <div className="number-block border border-white border-opacity-50 px-3 py-4 rounded-3">
              <h2 className="mb-0 display-5 fw-bolder">400</h2>
              <h5 className="mb-1">PETABYTES</h5>
              <p className="mb-0 fw-light">OF USABLE STORAGE</p>
            </div>
          </div>

          {/* Center Message */}
          <div className="col-md-4">
            <h5>INNOVATION-DRIVEN</h5>
            <h2 className="mb-0 display-6 fw-bolder">Algorithmic Trading Firm</h2>
          </div>

          {/* Right Block */}
          <div className="col-md-4">
            <div className="number-block border border-white border-opacity-50 px-3 py-4 rounded-3">
              <h2 className="mb-0 display-5 fw-bolder">8.5</h2>
              <h5 className="mb-1">PETABYTES</h5>
              <p className="mb-0 fw-light">OF USABLE RAM</p>
            </div>
          </div>

          {/* Row 2 Blocks */}
          <div className="col-md-4">
            <div className="number-block border border-white border-opacity-50 px-3 py-4 rounded-3">
              <h2 className="mb-0 display-5 fw-bolder">15</h2>
              <h5 className="mb-1">MEGAWATTS</h5>
              <p className="mb-0 fw-light">OF RENEWABLE SOURCED POWER</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="number-block border border-white border-opacity-50 px-3 py-4 rounded-3">
              <h2 className="mb-0 display-5 fw-bolder">25000</h2>
              <h5 className="mb-1">TOP-END GPUs</h5>
              <p className="mb-0 fw-light">IN OUR RESEARCH CLUSTER</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="number-block border border-white border-opacity-50 px-3 py-4 rounded-3">
              <h2 className="mb-0 display-5 fw-bolder">250</h2>
              <h5 className="mb-1">BILLION USD</h5>
              <p className="mb-0 fw-light">DAILY TRADING VOLUME</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
