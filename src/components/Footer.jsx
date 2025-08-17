import React from 'react';

 function Footer() {
  return (
    <footer className="footer mt-5 pt-5 pb-4 bg-dark text-white-50">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <h5 className="text-white">ConstructionDesign</h5>
            <p className="mb-2 small">
              © {new Date().getFullYear()} ConstructionDesign Pvt. Ltd. All rights reserved.
            </p>
            <p className="small mb-0">Privacy Policy · Terms of Service</p>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <p className="small mb-1">Email: hello@constructiondesign.com</p>
            <p className="small mb-0">Address: 123 Skyline Ave, Bengaluru, IN</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;