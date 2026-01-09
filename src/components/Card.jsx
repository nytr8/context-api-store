import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  // console.log(props);
  return (
    <>
      <Link to={`/products/${props.elem.id}`}>
        <div
          key={props.id}
          className="bg-white rounded-2xl shadow-lg max-w-sm w-full h-125 overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col"
        >
          {/* Image */}
          <div className="bg-gray-100 h-60 flex items-center justify-center p-5 shrink-0">
            <img
              src={props.elem.image}
              alt={props.elem.title}
              className="h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3 flex-1 flex flex-col">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              {props.elem.category}
            </span>

            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {props.elem.title}
            </h2>

            <p className="text-sm text-gray-600 line-clamp-2">
              {props.elem.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500 font-semibold">
                ⭐ {props.elem.rating.rate}
              </span>
              <span className="text-gray-500">
                ({props.elem.rating.count} reviews)
              </span>
            </div>

            {/* Price + Button - pushes to bottom */}
            <div className="flex items-center justify-between pt-3 mt-auto">
              <span className="text-2xl font-bold text-gray-900">
                ${props.elem.price}
              </span>

              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
