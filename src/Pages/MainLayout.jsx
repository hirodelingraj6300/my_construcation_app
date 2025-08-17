import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import CustomHomes from "../components/CustomHomes.jsx";
import PropertyListings from "../components/PropertyListings.jsx";
import Process from "../components/Process.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

 function MainLayout() {
  // Simple "reveal on scroll" animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("reveal-show", e.isIntersecting)),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="custom-homes" className="section-spacing reveal">
          <div className="container">
            <h2 className="section-title">Dream Home Creations</h2>
            <p className="section-subtitle">
              Choose your style — contemporary, urban loft, or coastal retreat. We’ll design & build it.
            </p>
            <CustomHomes />
          </div>
        </section>

        <section id="listings" className="section-spacing bg-light reveal">
          <div className="container">
            <h2 className="section-title">Exclusive Listings</h2>
            <p className="section-subtitle">
              Explore ready-to-move luxury apartments, family homes, and smart townhouses.
            </p>
            <PropertyListings />
          </div>
        </section>

        <section id="process" className="section-spacing reveal">
          <div className="container">
            <h2 className="section-title">Construction Process</h2>
            <Process />
          </div>
        </section>

        <section id="testimonials" className="section-spacing bg-light reveal">
          <div className="container">
            <h2 className="section-title">What Clients Say</h2>
            <Testimonials />
          </div>
        </section>

        <section id="contact" className="section-spacing reveal">
          <div className="container">
            <h2 className="section-title">Schedule a Visit</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default MainLayout;
