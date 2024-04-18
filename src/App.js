import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import Home from "./Components/Home";
import RentedVehicles from "./Components/RentedVehicles";
import Equipment from "./Components/Equipment";
import ElectronicsElectrical from "./Components/Eelectrical";
import Building from "./Components/Building";
import ItemDisplay from "./Components/EquipmentFolder/ItemDisplay";
import BuildingItemDisplay from "./Components/BuildingNeedsFolder/BuildingItemDisplay";
import ElectronicsElectricalItemDisplay from "./Components/ElectronicsElectricalFolder/ElectronicsElectricalItemDisplay";
import ShowOwners from "./Components/rentalFolder/ShowOwners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import Shoppingfeatures from "./Components/shoppingfeatures";
import Workers from "./Components/Workers";
import Cart from "./Components/CartFolder/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      alert("Already in CartBox");
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].quantity += d;

    if (tempArr[ind].quantity === 0) tempArr[ind].quantity = 1;
    setCart([...tempArr]);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar size={cart.length} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/findworkers" element={<Workers />} />
          <Route exact path="/RentedVehicles" element={<RentedVehicles />} />
          <Route path="/rental/:category" element={<ShowOwners />} />

          {/* EquipmentRoute */}

          <Route exact path="/Equipment" element={<Equipment />} />
          <Route
            path="/Equipment/:id"
            element={<ItemDisplay handleClick={handleClick} />}
          />
          {/* ElectricalRoute */}
          <Route exact path="/EEpath" element={<ElectronicsElectrical />} />
          <Route
            path="/EEpath/:id"
            element={
              <ElectronicsElectricalItemDisplay handleClick={handleClick} />
            }
          />

          {/* BuildingEquipmentRoute */}

          <Route exact path="/Bcpath" element={<Building />} />
          <Route
            path="/Bcpath/:id"
            element={<BuildingItemDisplay handleClick={handleClick} />}
          />
          {/* CartItemsRoute */}
          <Route
            path="/cart"
            element={
              <Cart handleChange={handleChange} cart={cart} setCart={setCart} />
            }
          />
        </Routes>
        <Shoppingfeatures />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
