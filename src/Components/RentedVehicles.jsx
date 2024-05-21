import React from "react";
import { vehicles } from "../itemsData/rented";
import DisplayVehicles from "./rentalFolder/DisplayVehicles";
import Footer from "./Footer";

function RentedVehicles() {
  return (
    <>
      <div className="backGround">
        <h1 className="rent-page-heading">Rental Vehicles</h1>
        <p>
          Trust our well-maintained vehicles and dedicated team to keep your
          operations running smoothly.
        </p>
        <div className="rentalVehicles">
          {vehicles.map((i, index) => {
            return (
              <DisplayVehicles key={i.id} category={i.name} imgUrl={i.imgUrl} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RentedVehicles;
