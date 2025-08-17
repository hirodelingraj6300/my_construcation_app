import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold brand-text" href="#">
          Architectural Design
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#custom-homes">Custom Homes</a></li>
            <li className="nav-item"><a className="nav-link" href="#listings">Properties</a></li>
            <li className="nav-item"><a className="nav-link" href="#process">Process</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
            <li className="nav-item"><a className="btn btn-success btn-sm px-3" href="#contact">Get Quote</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;