import React from 'react';

const MagicElements = () => {
  return (
    <section id="magic-elements" className="position-relative">
      <div className="container text-center">
        <h2 className="text-primary display-6 fw-bolder mb-5 pb-md-3">Our Magic Elements</h2>
        <div className="row g-4 align-items-center justify-content-center">
          {/* Block 1 */}
          <div className="col-md-4">
            <div className="magic-block bg-white border rounded-4 px-4 py-5">
              <img src="images/magic-icon-01.png" width="72" className="mb-4" alt="Research Platform" />
              <h4>Research Platform</h4>
              <small>
                A proprietary platform for research models, adapting seamlessly across data, geographies, and asset classes.
              </small>
            </div>
          </div>

          {/* Block 2 */}
          <div className="col-md-4">
            <div className="magic-block bg-white border rounded-4 px-4 py-5">
              <img src="images/magic-icon-02.png" width="72" className="mb-4" alt="AI Models" />
              <h4>Proprietary AI Models</h4>
              <small>
                Proven algorithms optimized for pattern recognition, sentiment analysis, and generating alpha in financial markets.
              </small>
            </div>
          </div>

          {/* Block 3 */}
          <div className="col-md-4">
            <div className="magic-block bg-white border rounded-4 px-4 py-5">
              <img src="images/magic-icon-03.png" width="72" className="mb-4" alt="Team" />
              <h4>Exceptional Team</h4>
              <small>
                A world-class team of elite engineers, trained in quantitative research and low-latency systems, led by seasoned industry experts.
              </small>
            </div>
          </div>

          {/* Block 4 */}
          <div className="col-md-4">
            <div className="magic-block bg-white border rounded-4 px-4 py-5">
              <img src="images/magic-icon-04.png" width="72" className="mb-4" alt="Infrastructure" />
              <h4>Scalable Infrastructure</h4>
              <small>
                Co-located low-latency systems designed for exceptional speed, efficiency, and reliability in high-performance environments.
              </small>
            </div>
          </div>

          {/* Block 5 */}
          <div className="col-md-4">
            <div className="magic-block bg-white border rounded-4 px-4 py-5">
              <img src="images/magic-icon-05.png" width="72" className="mb-4" alt="Validation" />
              <h4>Real-World Validation</h4>
              <small>
                Proven track record of delivering exceptional performance and reliability for multiple large institutions over several years.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div id="global-scroll" className="position-absolute" style={{ bottom: '100px' }}></div>
    </section>
  );
};

export default MagicElements;
