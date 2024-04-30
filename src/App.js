import React, { useEffect, useState } from "react";
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
import Workers from "./Components/Workers";
import Cart from "./Components/CartFolder/Cart";
import Showworkers from "./Components/workersFolder/ShowOwners";
import PageNotFound from "./Components/PageNotFound";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import swal from "sweetalert";

const LocalCart = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
  const [cart, setCart] = useState(LocalCart);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      alert("Item Already Exist");
      return;
    }
    setCart([...cart, item]);
    swal("Good job!", "Item Added to cart!", "success");
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
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <BrowserRouter>
        <Navbar size={cart.length} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/RentedVehicles" element={<RentedVehicles />} />
          <Route exact path="/rental/:category" element={<ShowOwners />} />

          <Route exact path="/workers" element={<Workers />} />
          <Route exact path="/workers/:category" element={<Showworkers />} />
          {/* EquipmentRoute */}

          <Route exact path="/Equipment" element={<Equipment />} />
          <Route
            exact
            path="/Equipment/:id"
            element={<ItemDisplay handleClick={handleClick} />}
          />
          {/* ElectricalRoute */}
          <Route exact path="/EEpath" element={<ElectronicsElectrical />} />
          <Route
            exact
            path="/EEpath/:id"
            element={
              <ElectronicsElectricalItemDisplay handleClick={handleClick} />
            }
          />

          {/* BuildingEquipmentRoute */}

          <Route exact path="/Bcpath" element={<Building />} />
          <Route
            exact
            path="/Bcpath/:id"
            element={<BuildingItemDisplay handleClick={handleClick} />}
          />
          {/* CartItemsRoute */}
          <Route
            exact
            path="/cart"
            element={
              <Cart handleChange={handleChange} cart={cart} setCart={setCart} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
