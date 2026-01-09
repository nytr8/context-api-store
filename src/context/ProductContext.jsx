import { createContext, useEffect, useState } from "react";
import { getAllProduct } from "../apis/api";
export const ProductDataContext = createContext();
const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProduct();
      setProductData(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
