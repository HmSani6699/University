import React from "react";
import "./Footer.css";
import logo from "../../../public/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_container text-white w-full lg:mt-[50px] relative p-[15px] bg-[#4c9580]">
      <div className="footer_box h-full w-full  top-0 left-0 opacity-[0.30] absolute"></div>
      <div className="max-w-[1280px] mx-auto relative z-10 py-[50px] lg:px-0 px-[15px] lg:flex">
        <div className="lg:w-[60%] md:w-[100%] w-full lg:flex md:flex ">
          {/* ======> Address <====== */}
          <div className="lg:w-[60%] md:w-[100%] w-full">
            <div className="flex justify-center items-center lg:block  lg:pl-[90px]">
              <div className="relative z-20 bg-white w-[100px] rounded-full border-2 border-[#07A698]">
                <img className="w-[100px]" src={logo} alt="" />
              </div>
            </div>
            <h2 className=" font-bold text-[25px] leading-[25px] mt-[20px]">
              সপ্তবর্ণ মডেল স্কুল
            </h2>
            <h2 className=" font-bold text-[20px] ">
              ভেরুয়াদহ, শাহজাদপুর, সিরাজগঞ্জ
            </h2>
            {/* ====> Social link <===== */}
            <div className="flex justify-center lg:justify-start gap-[15px] mt-[30px]">
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaFacebookF className="text-black text-[20px] group-hover:text-white " />
              </div>
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <IoLogoTwitter className="text-black text-[20px] group-hover:text-white " />
              </div>
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <FaLinkedinIn className="text-black text-[20px] group-hover:text-white " />
              </div>
              <div className="group hover:bg-[#07A698] h-[35px] w-[35px] flex items-center justify-center rounded-full bg-slate-200 transition-colors duration-500 cursor-pointer">
                <AiFillInstagram className="text-black text-[20px] group-hover:text-white " />
              </div>
            </div>
          </div>
          {/* ======> Quick Info <====== */}
          <div className="lg:w-[40%] md:hidden lg:block w-full mt-[50px] lg:mt-0 md:mt-0">
            <h2 className="text-[25px] font-semibold mb-[30px] ">দ্রুত তথ্য</h2>

            <p className="text-[18px] mb-[10px] ">হোম</p>
            <p className="text-[18px] mb-[10px] ">আমাদের সম্পর্কে</p>
            <p className="text-[18px] mb-[10px] ">ভর্তি</p>
            <p className="text-[18px] mb-[10px] ">বৈশিষ্ট্য</p>
          </div>
        </div>
        <div className="lg:w-[40%] md:w-[100%] w-full lg:flex md:flex ">
          {/* =====> Md Device er jonno <===== */}
          {/* <div className="lg:w-[40%] md:hidden lg:block w-full mt-[50px] lg:mt-0 md:mt-0">
            <h2 className="text-[25px] font-semibold mb-[30px] ">দ্রুত তথ্য</h2>

            <p className="text-[18px] mb-[10px] ">হোম</p>
            <p className="text-[18px] mb-[10px] ">আমাদের সম্পর্কে</p>
            <p className="text-[18px] mb-[10px] ">ভর্তি</p>
            <p className="text-[18px] mb-[10px] ">বৈশিষ্ট্য</p>
          </div> */}

          {/* ======> Services <====== */}
          <div className="lg:w-[50%] w-full mt-[50px] lg:mt-0 ">
            <h2 className="text-[25px] font-semibold mb-[30px] ">প্রতিষ্ঠান</h2>
            <p className="text-[18px] mb-[10px] ">কেন্দ্র</p>
            <p className="text-[18px] mb-[10px] ">বিভাগ</p>
            <p className="text-[18px] mb-[10px] ">গবেষণা</p>
            <p className="text-[18px] mb-[10px] ">লাইব্রেরি</p>
          </div>
          {/* ======> Contact us <====== */}
          <div className="lg:w-[50%] w-full mt-[50px] lg:mt-0 ">
            <h2 className="text-[25px] font-semibold mb-[30px] ">
              যোগাযোগ করুন
            </h2>
            <p className="text-[18px] mb-[10px] ">
              <span>মোবাইল: </span> ০১৭০৭-০৯৬৭১১
            </p>
            <p className="text-[18px] mb-[10px] ">
              <span>ইমেইল: </span> info@gmail.com
            </p>
            <p className="text-[18px] mb-[10px] ">
              <span>ইএমএস প্রশ্ন : </span> ০১৭০৭-০৯৬৭১১
            </p>
            <p className="text-[18px] mb-[10px] ">
              <span>সাপোর্ট : </span> ০১৭০৭-০৯৬৭১১
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#ffffff26] py-[20px]">
        <p className="text-center text-[14px]">
          © SOPTOBORNO MODEL SCHOOL. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
