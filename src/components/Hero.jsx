import React from 'react';

const Hero = () => {
  return (
    <section id="main-banner" className="position-relative">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 text-center">
            <h5 className="mb-3 mb-md-5">FINANCIAL SERVICES FIRM</h5>
            <h1 className="mb-4 mb-md-5">DATA-DRIVEN AI-POWERED DELIVERING ALPHA</h1>
            <a
              href="#about-scroll"
              className="btn bg-primary bg-opacity-50 text-white border border-white border-opacity-75 px-5 py-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <video
        className="video-background"
        poster="images/main-banner-poster.jpg"
        autoPlay
        muted
        loop
      >
        <source src="images/main-banner-video.mp4" type="video/mp4" />
      </video>

      <div id="about-scroll" className="position-absolute" style={{ bottom: '100px' }}></div>
    </section>
  );
};

export default Hero;
