import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <div className="HomepageBg">
        <div className="homePageCon">
          <div>
            <Slide direction="down">
              <h1 className="homeHeading">
                Destination for
                <br /> Construction Equipment & Materials
              </h1>
            </Slide>
            <Slide direction="up">
              <p className="homePara">
                where quality meets construction. Explore our curated collection
                of top-tier equipment and materials to elevate your projects
                with confidence.
              </p>
            </Slide>
          </div>
        </div>
      </div>
      <div className="linebt"></div>
      <div className="rental-home-bgcontainer">
        <h2 className="rental-home-Heading">Get Vehicles for Rent & Sale</h2>
        <div className="rental-home-container">
          <div className="rental-home-container1">
            <h3 className="rent-heading">For Rent</h3>
            <div className="rent-home-image-container">
              <img
                src="./Assets/bgs/rent.png"
                alt="#rent"
                className="rent-home-image"
              />
            </div>
            <p>
              Access top-quality construction vehicles without ownership
              commitments through our rental service. With a diverse fleet,
              flexible rental plans, and expert support, we ensure your project
              gets the right equipment, precisely when needed. Trust our
              well-maintained vehicles and dedicated team to keep your
              operations running smoothly.
            </p>
            <Link to="/rentalSale">
              <button className="rent-home-btn">Click here</button>
            </Link>
          </div>
          <div className="rental-home-container2">
            <h3 className="rent-heading">For Sale</h3>
            <div className="rent-home-image-container">
              <img
                src="./Assets/bgs/rent.png"
                alt="#rent"
                className="rent-home-image"
              />
            </div>
            <p>
              Invest in long-term construction fleet solutions with our diverse
              inventory of new and used vehicles for sale. Benefit from
              quality-assured equipment, customizable options, and flexible
              financing plans tailored to your needs. Plus, our commitment to
              after-sales support guarantees your satisfaction throughout the
              lifespan of your equipment.
            </p>
            <Link to="/rentalSale">
              <button className="rent-home-btn">Click here</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="linebt"></div>
      <div className="shopCategory">
        <h2 className="categoryHeading">Shop By Category Wise</h2>
        <div className="shopItemCon">
          <h4>Construction Equipment</h4>
          <div className="shoplanding">
            <div>
              <img
                src="../Assets/EquipmentImages/equipLanding.jpg"
                alt="#"
                className="shopImg"
              />
            </div>
            <div>
              <p className="shopPara">
                Construction equipment, from excavators to cranes, is essential
                for project execution. Advancements enhance efficiency, safety,
                and environmental impact. Proper equipment selection boosts
                productivity and reduces costs. Utilizing the right tools
                ensures timely project completion and shapes infrastructure
                development.
              </p>
              <Link to="/Equipment">
                <button className="shopBtn">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shopItemCon">
          <h4>Electronics & Electrical</h4>
          <div className="shoplanding">
            <div>
              <img
                src="../Assets/electrical/EElanding.jpeg"
                alt="#"
                className="shopImg"
              />
            </div>
            <div>
              <p className="shopPara">
                Electronics and electrical items are essential in construction,
                powering lighting, HVAC, security, and automation systems. They
                encompass wiring, circuitry, and power distribution, ensuring
                buildings are functional and safe. Incorporating smart
                technologies optimizes resource usage, driving innovation for
                smarter, more connected spaces.
              </p>
              <Link to="/electronicsElectrical">
                <button className="shopBtn">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shopItemCon">
          <h4>Building & Construction Material</h4>
          <div className="shoplanding">
            <div>
              <img
                src="../Assets/building/Blanding.png"
                alt="#"
                className="shopImg"
              />
            </div>
            <div>
              <p className="shopPara">
                Building materials are the backbone of construction, ranging
                from wood and concrete to advanced composites. They determine
                structural integrity, aesthetics, and environmental impact.
                Innovations in material science offer enhanced durability and
                sustainability. Careful selection shapes functional excellence
                and sustainability goals in the built environment.
              </p>
              <Link to="/building">
                <button className="shopBtn">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="promot">
        <h1>
          Buy Building & Construction Materials Online in{" "}
          <span className="nalgonda">Nalgonda</span>
        </h1>
        <p>
          We supply complete building and construction materials like Cement,
          TMT Steel, Bricks & Blocks, Sand, Tiles, Electrical Materials,
          Plywood, Plumbing Materials, etc. at wholesale prices across nalgonda.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
