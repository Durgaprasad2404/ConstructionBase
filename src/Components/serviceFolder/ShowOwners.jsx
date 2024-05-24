import React from "react";
import { useParams } from "react-router-dom";
import { WorkersData } from "../../itemsData/workers";
import { MdAddIcCall } from "react-icons/md";
import { PiWhatsappLogoFill } from "react-icons/pi";

function Showworkers() {
  const { category } = useParams();
  return (
    <>
      <div className="show-all-servicers">
        <h4 className="ser-heading">
          Person Available For
          <br /> <q>{category} </q>Service
        </h4>
        <div className="show-servicers">
          {WorkersData.map((i) => {
            if (i.category === category) {
              return (
                <div className="servicers" key={i.id}>
                  <div className="servicers-name">
                    <h4>{i.ownerName}</h4>
                  </div>
                  <div className="service-detailed">
                    <div className="service-contact">
                      <button className="service-call">
                        <MdAddIcCall /> {i.contactNumber}
                      </button>
                      <a
                        href="https://wa.me/+910000000000?text=Hello,i'm Looking For Your Service"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="service-chat">
                          <PiWhatsappLogoFill /> Chat
                        </button>
                      </a>
                    </div>
                    <p className="cost">
                      &#8377; {i.amount}/-
                      <span className="cost-per-day">Per Day</span>
                    </p>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Showworkers;
