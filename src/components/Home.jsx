import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-neutral-800 flex items-center justify-center flex-col gap-5">
      <h1 className="text-white text-[100px] font-bold">This is Home.</h1>
      <button
        className=" bg-green-300 px-5 py-2 rounded-sm hover:bg-green-500 active:scale-[0.95] active:bg-green-700 cursor-pointer font-semibold text-xl"
        onClick={() => {
          navigate("/allproducts");
        }}
      >
        See All Products
      </button>
    </div>
  );
};

export default Home;
