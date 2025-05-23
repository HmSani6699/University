import { BiSolidZap } from "react-icons/bi";
import teacher from "../../../../public/teacher1.png";

const Teacher = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
          <div className="bg-[#07a69826] p-[4px] rounded-full">
            <BiSolidZap className="text-[#07A698]" />
          </div>
          শিক্ষকবৃন্দ
        </button>
      </div>
      <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
        আমাদের বিশেষজ্ঞ শিক্ষক বৃন্দ
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[850px] mx-auto gap-[30px] mt-[40px]">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="flex flex-col items-center">
            <div className="h-[100px] w-[100px] rounded-full bg-[#4c9580] -mb-[30px] relative z-40 border-[#f5f5f5] border-2">
              <img
                className="h-[100px] w-[100px] rounded-full bg-[#4c9580] border-[#f5f5f5] border-2"
                src={teacher}
                alt="teacher"
              />
            </div>
            <div className="border  border-gray-300 bg-white shadow-lg rounded-[6px] p-[20px] text-center">
              <h2 className="text-[20px] font-semibold mt-[20px]">
                {" "}
                অধ্যাপক মোঃ মঈন উদ্দিন
              </h2>
              <p className="text-[16px]">প্রো-ভাইস চ্যান্সেলর (শিক্ষা)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
