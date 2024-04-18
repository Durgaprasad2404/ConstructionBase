import React from "react";
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
import CartItems from "./Components/CartFolder/CartItems";
import Footer from "./Components/Footer";
import Shoppingfeatures from "./Components/shoppingfeatures";
import Workers from "./Components/Workers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/findworkers" element={<Workers />} />
          <Route exact path="/RentedVehicles" element={<RentedVehicles />} />
          <Route path="/rental/:category" element={<ShowOwners />} />

          {/* EquipmentRoute */}

          <Route exact path="/Equipment" element={<Equipment />} />
          <Route path="/Equipment/:id" element={<ItemDisplay />} />
          {/* ElectricalRoute */}
          <Route exact path="/EEpath" element={<ElectronicsElectrical />} />
          <Route
            path="/EEpath/:id"
            element={<ElectronicsElectricalItemDisplay />}
          />

          {/* BuildingEquipmentRoute */}

          <Route exact path="/Bcpath" element={<Building />} />
          <Route path="/Bcpath/:id" element={<BuildingItemDisplay />} />

          {/* CartRoute */}
          <Route exact path="/Cart" element={<CartItems />} />
        </Routes>
        <Shoppingfeatures />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
