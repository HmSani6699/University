import { FaArrowLeft } from "react-icons/fa";
import { BiSolidZap } from "react-icons/bi";
import VideoGalleryCart from "../../../Component/VideoGalleryCart/VideoGalleryCart";
import Animation from "../../../Component/Animation/Animation";

const VideoGallery = () => {
  return (
    <Animation>
      <div className="relative py-[40px] p-[10px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="lg:flex items-center justify-between">
            <div>
              <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
                <div className="bg-[#07a69826] p-[4px] rounded-full">
                  <BiSolidZap className="text-[#07A698]" />
                </div>
                ভিডিও গ্যালারি
              </button>

              <h2 className="text-[30px] font-bold my-[20px] text-[#1D5276]">
                প্রতিষ্ঠাতা মহোদয়ের বিশেষ সাংস্কৃতিক গ্যালারী
              </h2>
            </div>
            <div className="lg:flex items-center gap-[20px] relative z-40 hidden ">
              <button className=" cursor-pointer  hover:bg-[#07A698] hover:text-white bg-gray-300 p-[10px] rounded-full text-[#07A698]">
                <FaArrowLeft />
              </button>
              <button className=" cursor-pointer hover:bg-[#07A698] hover:text-white  bg-gray-300 p-[10px] rounded-full text-[#07A698] rotate-[180deg]">
                <FaArrowLeft />
              </button>
            </div>
          </div>

          {/* =====> Video section <==== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] relative z-40">
            <VideoGalleryCart url={"vrPefH3rnD8"} />
            <VideoGalleryCart url={"NTTpr_thMec"} />
            <VideoGalleryCart url={"eBPS71LKvZg"} />
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default VideoGallery;
