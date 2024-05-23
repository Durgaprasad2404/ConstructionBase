import React from "react";
import { useParams } from "react-router-dom";
import { WorkersData } from "../../itemsData/workers";
import { MdAddIcCall } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Showworkers() {
  const { category } = useParams();
  return (
    <div>
      <h1>
        Person Available For <q>{category} Service</q>
      </h1>
      {WorkersData.map((i) => {
        if (i.category === category) {
          return (
            <div className="owners" key={i.id}>
              <h4 style={{ width: "150px" }}>
                <FaUser /> {i.ownerName}
              </h4>
              <div style={{ width: "150px" }}>
                <p>
                  <MdAddIcCall /> {i.contactNumber}
                </p>
              </div>
              <p style={{ width: "150px" }}>
                &#8377; {i.amount}/-{" "}
                <span style={{ fontSize: "xx-small" }}>Per Day</span>
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Showworkers;
