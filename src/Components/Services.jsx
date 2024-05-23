import React, { useEffect } from "react";
import { workers, mostDemanded } from "../itemsData/workers";
// import DisplayWorkers from './workersFolder/DisplayWorkers'
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { MdVerticalAlignTop } from "react-icons/md";

function Services() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToTop();
  });
  return (
    <>
      <div className="service-bgcontainer">
        <h1 className="service-main-heading">Service </h1>
        <div className="services-main-container">
          <div className="all-services-container">
            <h4 className="lookingFor-heading">What are you Looking for ?</h4>
            <div className="all-services">
              {workers.map((i) => {
                return (
                  <Link to={`/services/${i.name}`} key={i.id}>
                    <div className="service-solo">
                      <img src={i.imgUrl} alt="#" className="servicers-logo" />
                      <h6 className="service-heading">{i.name}</h6>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <img
              src="./Assets/workers/Group28.png"
              alt="#"
              className="imguuu"
            />
          </div>
        </div>
        <div className="Most-demand-servicesContainer">
          <h1 className="Most-demand-heading">Most demand services</h1>
          <div className="Most-demand-services">
            {mostDemanded.map((i) => {
              return (
                <div key={i.id}>
                  <div
                    style={{
                      backgroundImage: `url(${i.imgUrl})`,
                    }}
                    className="demand-services"
                  >
                    <Link to={`/services/${i.name}`}>
                      <button className="book-button">Book now</button>
                    </Link>
                  </div>
                  <h4 className="book-heading">{i.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div>
          <h1>Painting service</h1>
          <p>
            Enhance your home with our professional painting services, where
            quality meets affordability. Our experienced team uses top-grade
            materials to ensure a flawless finish that revitalizes any space.
            Trust us to bring your vision to life with precision and care.
          </p>
          <div className="painting-worksContainer">
            <div className="painting-works">
              <Link to={`/services/Painters`}>
                <img
                  src="./Assets/workers/painters.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Painters</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/Painters`}>
                <img
                  src="./Assets/workers/PaintingSupervisors.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">
                Painting Supervisors/Foremen
              </h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/Painters`}>
                <img
                  src="./Assets/workers/wallprepare.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Wall Preparation Workers</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/Painters`}>
                <img
                  src="./Assets/workers/wallpapers.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Wallpaper Hangers</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/Painters`}>
                <img
                  src="./Assets/workers/dPainters.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Decorative Painters</h4>
            </div>
          </div>
        </div>
        {/* <button className="book-button">Book now</button> */}
        <hr />
        <div>
          <h1>Roofing service </h1>
          <p>
            Secure your home with our expert roofing services, offering durable
            solutions tailored to your needs. Our skilled team provides reliable
            installations, repairs, and maintenance using the highest quality
            materials. Trust us to protect your property with precision and
            professionalism
          </p>
          <div className="painting-worksContainer">
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/Roof-Installation.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Installation</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/Roof-Replacement.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Replacement</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/Roof-Repair.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Repair</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/Roof-Coating-Sealing.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Coating and Sealing</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/Roof-Ventilation.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Ventilation</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="back-btn">
        <button onClick={scrollToTop}>
          Back to top
          <i>
            <MdVerticalAlignTop />
          </i>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Services;
