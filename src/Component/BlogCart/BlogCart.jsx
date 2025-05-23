import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogCart = ({ item }) => {
  let { image, title, description } = item;
  return (
    <div className="bg-white">
      <div className="w-full h-[200px] rounded-t-[10px]">
        <img
          className="w-full h-full rounded-t-[10px]"
          src={image}
          alt="image"
        />
      </div>
      <div className="p-[10px]">
        <p className="mt-[10px] ">{description}</p>

        <div className="flex items-center justify-between mt-[10px]">
          <div className="flex items-center gap-[4px]">
            <FaRegCalendarAlt />
            <p>২৩ মে ২০২৫</p>
          </div>
          <button className="border bg-[#4c9580] text-white rounded-full py-[6px] px-[20px]">
            আরও পড়ুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
