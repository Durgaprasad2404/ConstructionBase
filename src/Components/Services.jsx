import React from "react";
import { workers, mostDemanded } from "../itemsData/workers";
// import DisplayWorkers from './workersFolder/DisplayWorkers'
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { MdVerticalAlignTop } from "react-icons/md";
import Serviceslanding from "./serviceFolder/Serviceslanding";

function Services() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // useEffect(() => {
  //   scrollToTop();
  // });
  return (
    <>
      <div className="service-bgcontainer">
        <h1 className="service-main-heading">Service </h1>
        <div className="services-main-container">
          <div className="all-services-container">
            <h6 className="lookingFor-heading">What are you Looking for ?</h6>
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
          <h2 className="Most-demand-heading">Most demand services</h2>
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
                  <h6 className="book-heading">{i.name}</h6>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="Most-demand-heading">Painting service</h2>
          <p>
            Enhance your home with our professional painting services, where
            quality meets affordability. Our experienced team uses top-grade
            materials to ensure a flawless finish that revitalizes any space.
            Trust us to bring your vision to life with precision and care.
          </p>
          <Serviceslanding service="Painters" />
        </div>
        {/* <button className="book-button">Book now</button> */}
        <hr />
        <div>
          <h2 className="Most-demand-heading">Roofing service </h2>
          <p>
            Roofing services encompass a wide range of sub-services to address
            different aspects of roof installation, maintenance, repair, and
            inspection.
          </p>
          <Serviceslanding service="Roofing" />
        </div>
        <div>
          <h2 className="Most-demand-heading">HVAC service </h2>
          <p>
            HVAC (Heating, Ventilation, and Air Conditioning) systems involve
            various components and tasks to ensure proper functioning,
            efficiency, and comfort in residential, commercial, and industrial
            environments.
          </p>
          <Serviceslanding service="HVAC" />
        </div>
        <div>
          <h2 className="Most-demand-heading">CCTV service </h2>
          <p>
            HVAC (Heating, Ventilation, and Air Conditioning) systems involve
            various components and tasks to ensure proper functioning,
            efficiency, and comfort in residential, commercial, and industrial
            environments.
          </p>
          <Serviceslanding service="CCTV" />
        </div>
      </div>
      <div className="text-center">
        <button onClick={scrollToTop} className="back-btn">
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
