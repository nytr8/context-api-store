import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
