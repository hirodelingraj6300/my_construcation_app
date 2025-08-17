import React from 'react';



 function CustomHomes() {

    const cards = [
  {
    title: "Contemporary Dream",
    img: "/img/img_home_interor.jpg",
    text: "Open layouts, glass facades, and minimalist luxury."
  },
  {
    title: "Urban Loft",
    img: "/img/cust_img-1.jpg",
    text: "Industrial vibes with modern comforts in the heart of the city."
  },
  {
    title: "Coastal Retreat",
    img: "/img/img_interor_03.png",
    text: "Breezy, bright spaces designed for relaxed living by the sea."
  }
];
  return (
    <div className="row g-4">
      {cards.map((c) => (
        <div key={c.title} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 hover-lift">
            <img src={c.img} className="card-img-top object-cover-280" alt={c.title} />
            <div className="card-body">
              <h5 className="card-title">{c.title}</h5>
              <p className="card-text text-secondary">{c.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CustomHomes;
