import { BiSolidZap } from "react-icons/bi";
import teacher from "../../../../public/teacher.png";
import teacher1 from "../../../../public/teacher2.png";
import teacher2 from "../../../../public/p.png";
import Animation from "../../../Component/Animation/Animation";

const Teacher = () => {
  return (
    <div>
      <Animation>
        <div className="flex items-center justify-center">
          <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
            <div className="bg-[#07a69826] p-[4px] rounded-full">
              <BiSolidZap className="text-[#07A698]" />
            </div>
            শিক্ষকবৃন্দ
          </button>
        </div>
      </Animation>

      <Animation>
        <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
          আমাদের বিশেষজ্ঞ শিক্ষক বৃন্দ
        </p>
      </Animation>

      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-[850px] mx-auto gap-[30px] mt-[40px]">
        {[
          {
            id: 1,
            img: teacher2,
            name: "মোঃ মঈন উদ্দিন",
            degeneration: "প্রধান শিক্ষক",
          },
          {
            id: 2,
            img: teacher1,
            name: " নিরঞ্জন পাল",
            degeneration: "পরিচালক",
          },
          {
            id: 3,
            img: teacher,
            name: " মোঃ তসলিম উদ্দিন",
            degeneration: "পরিচালক",
          },
          {
            id: 2,
            img: teacher1,
            name: " নিরঞ্জন পাল",
            degeneration: "পরিচালক",
          },
          {
            id: 3,
            img: teacher,
            name: " মোঃ তসলিম উদ্দিন",
            degeneration: "পরিচালক",
          },

          {
            id: 1,
            img: teacher2,
            name: "মোঃ মঈন উদ্দিন",
            degeneration: "প্রধান শিক্ষক",
          },
        ].map((item) => (
          <Animation>
            {" "}
            <div className="flex flex-col items-center">
              <div className="h-[100px] w-[100px] rounded-full bg-[#4c9580] -mb-[30px] relative z-40 border-[#f5f5f5] border-2">
                <img
                  className="h-[100px] w-[100px] rounded-full bg-[#4c9580] border-[#f5f5f5] border-2"
                  src={item?.img}
                  alt="teacher"
                />
              </div>
              <div className="border  border-gray-300 bg-white shadow-lg rounded-[6px] p-[20px] text-center w-[400px]">
                <h2 className="text-[20px] font-semibold mt-[20px]">
                  {item?.name}
                </h2>
                <p className="text-[16px]">{item?.degeneration}</p>
              </div>
            </div>
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
