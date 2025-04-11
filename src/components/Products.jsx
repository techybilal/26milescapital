import React from 'react';

const Products = () => {
  return (
    <section id="products" className="position-relative">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <h2 className="text-primary display-6 fw-bolder mb-3">Our Products</h2>
            <p>
              26 Miles Capital delivers innovative investment solutions through the power of Mathematics, AI, and cutting-edge Technology.
            </p>
            <p className="mb-0">
              Specializing in Quantitative Trading, Asset Management, and Advisory Services, we help Institutional Clients and Family Offices achieve superior risk-adjusted returns.
            </p>
          </div>

          {/* Product 1 */}
          <div className="col-md-6">
            <div className="product-block bg-white rounded-3 p-3">
              <div className="row align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                  <div className="product-img-block product-img-01 rounded"></div>
                </div>
                <div className="col-md-7 ps-md-3 pe-md-5">
                  <h4 className="mb-3">Quantitative Asset Management</h4>
                  <p>
                    Multi-strategy, multi-asset fund leveraging advanced quantitative methods to trade across the globe, ensuring consistent and superior returns for our investors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-6">
            <div className="product-block bg-white rounded-3 p-3">
              <div className="row align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                  <div className="product-img-block product-img-02 rounded"></div>
                </div>
                <div className="col-md-7 ps-md-3 pe-md-5">
                  <h4 className="mb-3">Deep Technology Infrastructure</h4>
                  <p>
                    Highly scalable, low-latency system designed to process massive volumes of real-time data seamlessly across global markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-6">
            <div className="product-block bg-white rounded-3 p-3">
              <div className="row align-items-center">
                <div className="col-md-5 mb-3 mb-md-0">
                  <div className="product-img-block product-img-03 rounded"></div>
                </div>
                <div className="col-md-7 ps-md-3 pe-md-5">
                  <h4 className="mb-3">Custom Institutional Solutions</h4>
                  <p>
                    Tailored strategies designed to align with clients' unique goals and risk profiles, seamlessly integrating into their existing infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="scale-scroll" className="position-absolute" style={{ bottom: '100px' }}></div>
    </section>
  );
};

export default Products;
