import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-neutral-300 h-15 flex items-center justify-center gap-20 text-2xl fixed w-full z-10">
      <Link className="font-bold" to={"/"}>
        Home
      </Link>
      <Link className="font-bold" to={"/allproducts"}>
        products
      </Link>
    </div>
  );
};

export default Navbar;
