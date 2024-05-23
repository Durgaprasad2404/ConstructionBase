import React from "react";
import { useParams } from "react-router-dom";
import { RentalData } from "../../itemsData/Rentaldata";
import { MdAddIcCall, MdLocationPin } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

function ShowOwners() {
  const { category } = useParams();
  return (
    <div className="backGround">
      <h1>
        Here are some{" "}
        <q style={{ color: "red", fontSize: "35px" }}>{category}</q>{" "}
      </h1>
      {RentalData.map((i) => {
        if (i.category === category) {
          return (
            <div className="owners" key={i.id}>
              <div className="vhimgCon">
                <div>
                  <img src={i.imgUrl} alt="#" className="vhImgfull" />
                </div>
                <div className="vhCon">
                  <img src={i.imgUrl} alt="#" className="vhImg" />
                  <img src={i.imgUrl} alt="#" className="vhImg" />
                  <img src={i.imgUrl} alt="#" className="vhImg" />
                  <img src={i.imgUrl} alt="#" className="vhImg" />
                </div>
              </div>
              <div>
                <h5>{i.ownerName} pvt ltd</h5>
                <div>
                  <i>
                    <MdLocationPin />
                  </i>
                  <span>Location</span>
                </div>
                <div className="ownerContact">
                  <div>
                    <button className="OwnerContactBtn">
                      <MdAddIcCall /> Connect
                    </button>
                  </div>
                  <div>
                    <button className="OwnerChatBtn">
                      <i style={{ color: "green" }}>
                        <RiWhatsappFill />
                      </i>{" "}
                      Chat
                    </button>
                  </div>
                  <p>
                    &#8377; {i.amount}/-{" "}
                    <span className="hourspan">per hour</span>
                  </p>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ShowOwners;
