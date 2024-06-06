import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
const workers = [
  { id: 1, name: "Laborers", imgUrl: "../Assets/workers/icons/1.png" },
  { id: 2, name: "Carpenters", imgUrl: "../Assets/workers/icons/2.png" },
  {
    id: 3,
    name: "Electricians",
    imgUrl: "../Assets/workers/icons/3.png",
  },
  { id: 4, name: "Plumbers", imgUrl: "../Assets/workers/icons/4.png" },
  { id: 5, name: "Masons", imgUrl: "../Assets/workers/icons/5.png" },
  { id: 6, name: "HVAC", imgUrl: "../Assets/workers/icons/6.png" },
  { id: 7, name: "Painters", imgUrl: "../Assets/workers/icons/7.png" },
  {
    id: 8,
    name: "Roofing",
    imgUrl: "../Assets/workers/icons/8.png",
  },
  { id: 9, name: "STP opt", imgUrl: "../Assets/workers/icons/9.png" },
  { id: 10, name: "UPS&Solar", imgUrl: "../Assets/workers/icons/10.png" },
  { id: 11, name: "WTP opt", imgUrl: "../Assets/workers/icons/11.png" },
  {
    id: 12,
    name: "CCTV",
    imgUrl: "../Assets/workers/icons/12.png",
  },
  {
    id: 13,
    name: "Fire System Opt",
    imgUrl: "../Assets/workers/icons/13.png",
  },
  {
    id: 14,
    name: "Network system Opt",
    imgUrl: "../Assets/workers/icons/14.png",
  },
  {
    id: 15,
    name: "store keeper",
    imgUrl: "../Assets/workers/icons/15.png",
  },
];
function Listedservices() {
  return (
    <>
      <div className="listed-services">
        {workers.map((i) => {
          return (
            <div className="single-service" key={i.id}>
              <Link to={`/services/${i.name}`}>
                <img src={i.imgUrl} alt="#" className="servicers-logo" />
              </Link>
              <h5 className="service-heading mt-3 text-bold">{i.name}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listedservices;
