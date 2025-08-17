import React from 'react';
 
 function Hero() {
  return (
    <header className="hero d-flex align-items-center">
      <div className="container">
        <div className="col-12 col-lg-7">
          <h1 className="display-5 fw-800 text-white lh-sm hero-title">
            Building Your Future, Finding Your Home
          </h1>
          <p className="lead text-white-50 mb-4">
            From custom architecture to turn-key properties — we make your dream address real.
          </p>
          <div className="d-flex gap-3">
            <a href="#contact" className="btn btn-success btn-lg">Get a Free Consultation</a>
            <a href="#listings" className="btn btn-outline-light btn-lg">Browse Listings</a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
