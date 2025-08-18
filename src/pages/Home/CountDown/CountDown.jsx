import { FaHospitalUser, FaUniversity, FaUserGraduate } from "react-icons/fa";
import image from "../../../../public/school3.jpg";

const CountDown = () => {
  return (
    <div className="w-full mt-[50px] h-[400px]">
      <div className="parallax_scrolling  ">
        <div className="max-w-[1000px] mx-auto flex justify-between items-center pt-[110px] overflow-auto">
          <div className=" text-white ">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border mb-[10px]">
                <FaUniversity className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">২০১৯</h2>
              <h2 className="text-[25px] font-semibold">প্রতিষ্ঠিত</h2>
            </div>
          </div>
          <div className=" text-white">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border mb-[10px]">
                <FaUserGraduate className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">৩০০০+</h2>
              <h2 className="text-[25px] font-semibold">অনুষদ সদস্যগণ</h2>
            </div>
          </div>
          <div className=" text-white">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border mb-[10px]">
                <FaHospitalUser className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">৪৮০০+</h2>
              <h2 className="text-[25px] font-semibold">
                নিয়মিত শিক্ষার্থীরা
              </h2>
            </div>
          </div>{" "}
          <div className=" text-white">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border mb-[10px]">
                <FaUniversity className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">২০০৯+</h2>
              <h2 className="text-[25px] font-semibold">অধিভুক্ত কলেজ</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
