import { useContext } from "react";
import Card from "./Card";
import { ProductDataContext } from "../context/ProductContext";

const AllProducts = () => {
  const productData = useContext(ProductDataContext);
  // console.log(productData);

  return (
    <div className="bg-neutral-800 min-h-screen w-full flex justify-center flex-wrap gap-5 p-5">
      {productData.map((elem, idx) => {
        return <Card key={idx} elem={elem} />;
      })}
    </div>
  );
};

export default AllProducts;
