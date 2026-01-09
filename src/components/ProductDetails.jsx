import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../context/ProductContext";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  const { productId } = useParams();
  console.log(productId);
  const selectedProduct = productData.find((elem) => productId == elem.id);
  console.log(selectedProduct);
  return (
    <div >
      <div className="min-h-screen bg-neutral-900 text-white px-6 py-10 pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-stone-800 rounded-2xl p-6">
          {/* Image Section */}
          <div className="bg-white rounded-xl flex items-center justify-center p-6">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="max-h-105 object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-wide text-gray-400">
                {selectedProduct.category}
              </span>

              <h1 className="text-3xl font-bold leading-snug">
                {selectedProduct.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-lg">
                  ⭐ {selectedProduct.rating.rate}
                </span>
                <span className="text-gray-400">
                  ({selectedProduct.rating.count} reviews)
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Price + Actions */}
            <div className="pt-6 border-t border-neutral-700 flex items-center justify-between">
              <span className="text-3xl font-bold text-green-400">
                ${selectedProduct.price}
              </span>

              <div className="flex gap-3">
                <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition">
                  Buy Now
                </button>
                <button className="px-6 py-3 rounded-xl bg-green-500 text-black font-medium hover:bg-green-400 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
