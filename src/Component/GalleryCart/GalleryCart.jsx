import React from "react";
import { FaLink } from "react-icons/fa";

const GalleryCart = ({ item }) => {
  return (
    <div className="h-[300px] rounded-[10px] relative overflow-hidden group cursor-pointer">
      {/* Image */}
      <img
        className="w-full h-full object-cover rounded-[10px]"
        src={item?.img}
        alt="gallery"
      />

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-[#4c9580d1] bg-opacity-90 rounded-[10px] z-20 
                 flex items-center justify-center 
                 transform translate-y-full group-hover:translate-y-0 
                 transition duration-500 ease-in-out"
      >
        <FaLink className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default GalleryCart;
