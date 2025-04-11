import React from 'react';

const About = () => {
  return (
    <section id="about" className="position-relative">
      <div className="container">
        <div className="row g-4 g-md-5 align-items-center">
          <div className="col-md-6">
            <div className="about-img rounded-5"></div>
          </div>
          <div className="col-md-6">
            <h2 className="text-primary display-6 fw-bolder mb-3">About Us</h2>
            <p>
              26 Miles Capital delivers innovative investment solutions through the power of Mathematics, AI, and cutting-edge Technology.
            </p>
            <p className="mb-5">
              Specializing in Quantitative Trading, Asset Management, and Advisory Services, we help Institutional Clients and Family Offices achieve superior risk-adjusted returns.
            </p>
            <h2 className="text-primary fw-bolder mb-3">Ambition</h2>
            <p className="mb-0">
              Become India’s Premier Global First Quantitative and AI-powered Financial Services Firm
            </p>
          </div>
        </div>
      </div>
      <div id="product-scroll" className="position-absolute" style={{ bottom: '100px' }}></div>
    </section>
  );
};

export default About;
