import { BiSolidZap } from "react-icons/bi";
import g1 from "../../../../public/g1.jpg";
import g2 from "../../../../public/g2.jpg";
import g3 from "../../../../public/g3.jpg";
import g4 from "../../../../public/g4.jpg";
import g5 from "../../../../public/cart4.jpg";
import g6 from "../../../../public/g6.jpg";
import GalleryCart from "../../../Component/GalleryCart/GalleryCart";
import Animation from "../../../Component/Animation/Animation";

const Gallery = () => {
  return (
    <div className="my-[50px]">
      <div className="flex items-center justify-center">
        <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
          <div className="bg-[#07a69826] p-[4px] rounded-full">
            <BiSolidZap className="text-[#07A698]" />
          </div>
          গ্যালারি
        </button>
      </div>
      <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
        ছবি গ্যালারি ঘুরে দেখুন
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] max-w-[1000px] mx-auto mt-[30px]">
        {[
          { id: 1, img: g1 },
          { id: 2, img: g2 },
          { id: 3, img: g3 },
          { id: 4, img: g4 },
          { id: 5, img: g5 },
          { id: 6, img: g6 },
        ]?.map((item) => (
          <Animation>
            {" "}
            <GalleryCart item={item} />
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
