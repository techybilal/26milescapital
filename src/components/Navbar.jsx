import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-md bg-white rounded-4 px-4 border border-primary border-opacity-25 mt-2 mt-md-4">
          <a className="navbar-brand" href="#">
            <img src="images/logo.svg" alt="Logo" />
          </a>
          <a href="#" className="navbar-toggler">
            <img src="images/icon-top.svg" alt="Toggle" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedConten">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex align-items-center gap-3 pt-2 pt-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about-scroll">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#product-scroll">OUR PRODUCTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#scale-scroll">SCALING</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#magic-scroll">MAGIC ELEMENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#global-scroll">GLOBAL PRESENCE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-scroll">CONTACT US</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;