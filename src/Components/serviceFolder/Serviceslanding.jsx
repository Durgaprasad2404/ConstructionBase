import React from "react";
import { Landingservices } from "../../itemsData/services";
import { Link } from "react-router-dom";
import "./services.css";

function Serviceslanding(props) {
  return (
    <>
      <div className="service-works-container">
        {Landingservices.map((i) => {
          if (i.category === props.service) {
            return (
              <div className="services-works" key={i.id}>
                <Link to={`/services/${i.category}`}>
                  <img
                    src={i.imgUrl}
                    alt="#services"
                    className="services-work-img"
                  />
                </Link>
                <h6 className="services-work-heading">{i.name}</h6>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default Serviceslanding;
