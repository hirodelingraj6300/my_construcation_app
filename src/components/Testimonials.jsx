import React from 'react';

 function Testimonials() {
    const items = [
  {
    name: "Ava M.",
    role: "Entrepreneur",
    img: "/img/img_women_01.avif",
    text: "Professional team! They transformed our ideas into a stunning, practical home."
  },
  {
    name: "Liam S.",
    role: "Software Engineer",
    img: "/img/img_women_02.avif",
    text: "Transparent pricing, on-time delivery, and excellent finishes. Highly recommended."
  },
  {
    name: "Chloe R.",
    role: "Designer",
    img: "/img/img_men_03.jpg",
    text: "Loved the design process—clear, collaborative, and super creative."
  }
];
  return (
    <div className="row g-4">
      {items.map((t) => (
        <div key={t.name} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 quote-card hover-lift">
            <div className="d-flex align-items-center gap-3 p-3">
              <img src={t.img} alt={t.name} className="avatar rounded-circle" />
              <div>
                <h6 className="mb-0">{t.name}</h6>
                <small className="text-secondary">{t.role}</small>
              </div>
            </div>
            <div className="px-3 pb-3">
              <p className="mb-0 text-secondary">{t.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Testimonials;
