import React from 'react';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    alert(`Thanks ${data.name || "there"}! We'll contact you at ${data.email || "your email"} soon.`);
    e.currentTarget.reset();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <form className="card shadow-sm p-4" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input name="name" type="text" className="form-control" placeholder="Your name" required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input name="phone" type="tel" className="form-control" placeholder="Your phone" />
            </div>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input name="email" type="email" className="form-control" placeholder="you@example.com" required />
            </div>
            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea name="message" rows="4" className="form-control" placeholder="Tell us about your project..." />
            </div>
          </div>
          <div className="mt-4 d-flex gap-2">
            <button className="btn btn-success" type="submit">Submit Inquiry</button>
            <a href="tel:+910000000000" className="btn btn-outline-secondary">Call Us</a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
