import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductContext>
      <Navbar />
      <App />
    </ProductContext>
  </BrowserRouter>
);
