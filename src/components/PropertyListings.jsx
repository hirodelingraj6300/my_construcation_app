import React from 'react';

 function PropertyListings() {

    const listings = [
  {
    title: "Luxury Apartment",
    img: "/img/img_interor-02.jpg",
    meta: "2/3/4 BHK | Prime city area",
  },
  {
    title: "Family Home",
    img: "/img/img_villa_88.avif",
    meta: "Cozy 3BHK | Private lawn & garage",
  },
  {
    title: "Smart Townhouse",
    img: "/img/img_villa_99.avif",
    meta: "3BHK | Modern interiors | Workspace",
  }
];

  return (
    <div className="row g-4">
      {listings.map((l) => (
        <div key={l.title} className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 hover-lift">
            <img src={l.img} className="card-img-top object-cover-220" alt={l.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{l.title}</h5>
              <p className="text-secondary mb-3">{l.meta}</p>
              <div className="mt-auto d-flex gap-2">
                <a href="#contact" className="btn btn-primary btn-sm">Enquire</a>
                <a href="#" className="btn btn-outline-secondary btn-sm">Details</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default PropertyListings;
