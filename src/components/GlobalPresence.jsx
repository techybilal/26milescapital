import React from 'react';

const GlobalPresence = () => {
  return (
    <section id="global-presence" className="position-relative">
      <div className="container text-center">
        <h2 className="text-primary display-6 fw-bolder mb-5 pb-3">Global Presence</h2>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <img src="images/world.svg" className="img-fluid" alt="World Map" />
          </div>
        </div>
      </div>
      <div id="contact-scroll" className="position-absolute" style={{ bottom: '100px' }}></div>
    </section>
  );
};

export default GlobalPresence;
