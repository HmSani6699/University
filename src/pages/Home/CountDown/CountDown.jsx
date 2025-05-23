import { FaHospitalUser, FaUniversity, FaUserGraduate } from "react-icons/fa";
import image from "../../../../public/school3.jpg";

const CountDown = () => {
  return (
    <div className="w-full mt-[50px] h-[400px]">
      <div className="parallax_scrolling  ">
        <div className="max-w-[1000px] mx-auto flex justify-between items-center pt-[110px]">
          <div className=" text-white ">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border">
                <FaUniversity className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">1200+</h2>
              <h2 className="text-[25px] font-semibold">Founded</h2>
            </div>
          </div>
          <div className=" text-white">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border">
                <FaUserGraduate className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">3000+</h2>
              <h2 className="text-[25px] font-semibold">Faculty Members</h2>
            </div>
          </div>
          <div className=" text-white">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border">
                <FaHospitalUser className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">4800+</h2>
              <h2 className="text-[25px] font-semibold">Regular Students</h2>
            </div>
          </div>{" "}
          <div className=" text-white">
            <div className="text-center flex flex-col items-center">
              <div className="h-[90px] w-[90px] rounded-full bg-[#d1d5dc61] flex items-center justify-center border">
                <FaUniversity className="text-[#04f6b0] text-[30px]" />
              </div>
              <h2 className="text-[50px] font-bold">2009+</h2>
              <h2 className="text-[25px] font-semibold">Affiliated Colleges</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
