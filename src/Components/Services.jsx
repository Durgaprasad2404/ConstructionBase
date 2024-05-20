import React from "react";
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
  return (
    <>
      <div className="service-bgcontainer">
        <h1>Service</h1>
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
          <h1>Roofing service</h1>
          <div className="painting-worksContainer">
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/painters.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Installation</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/PaintingSupervisors.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Replacement</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/wallprepare.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Repair</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/wallpapers.jpg"
                  alt="#painting"
                  className="painting-img"
                />
              </Link>
              <h4 className="paintingWork-heading">Roof Coating and Sealing</h4>
            </div>
            <div className="painting-works">
              <Link to={`/services/roofing`}>
                <img
                  src="./Assets/workers/dPainters.jpg"
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
