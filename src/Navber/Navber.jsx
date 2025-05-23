import { FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../public/logo.png";
import { MdEmail } from "react-icons/md";

const Navber = () => {
  return (
    <div className=" my-[20px]">
      {/* ====> Top menuver  <==== */}
      <div className="flex items-center justify-between  max-w-[1200px] mx-auto">
        {/* left */}
        <div className="flex items-center gap-[10px]">
          <div className="h-[70px] w-[70px]">
            <img className="h-[70px] w-[70px]" src={logo} alt="logo" />
          </div>
          <div>
            <h2 className="text-[#4c9580] font-bold text-[30px] leading-[25px]">
              SOPTOBORNO MODEL SCHOOL
            </h2>
            <h2 className="text-[#4c9580] font-bold text-[20px] ">
              Dwariapur, Shahzadpur
            </h2>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-[30px]">
          <h2 className="flex items-center gap-[6px] text-blue-600">
            <FaFacebook />
            Facebook
          </h2>

          <h2 className="flex items-center gap-[6px] text-red-500">
            <FaYoutube />
            Youtube
          </h2>
          <h2 className="flex items-center gap-[6px] text-[#4c9580]">
            <MdEmail />
            Web Email
          </h2>
        </div>
      </div>
      {/* ====> Main menuber <====== */}
      <div></div>
    </div>
  );
};

export default Navber;
