import { FaBook, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../public/logo.png";
import { MdEmail, MdLogin } from "react-icons/md";
import { IoIosArrowDown, IoMdLogIn } from "react-icons/io";
import g1 from "../../public/g1.jpg";
import g2 from "../../public/g2.jpg";
import g3 from "../../public/g3.jpg";
import g4 from "../../public/g4.jpg";
import g5 from "../../public/cart4.jpg";
import g6 from "../../public/g6.jpg";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import { FiAlertCircle } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navber = () => {
  return (
    <div className="">
      {/* ====> Top menuver  <==== */}
      <div className="lg:flex items-center justify-between  max-w-[1200px] mx-auto mt-[15px] mb-[10px] p-[10px] lg:p-0">
        {/* left */}
        <div className="flex items-center gap-[10px]">
          <div className="h-[70px] w-[70px]">
            <img className="h-[70px] w-[70px]" src={logo} alt="logo" />
          </div>
          <div>
            <h2 className="text-[#4c9580] font-bold text-[30px] leading-[35px]">
              সপ্তবর্ণ মডেল স্কুল
            </h2>
            <h2 className="text-[#4c9580] font-bold text-[20px] ">
              ভেরুয়াদহ, শাহজাদপুর, সিরাজগঞ্জ
            </h2>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-[30px] lg:block hidden">
          <Link
            to={
              "https://www.facebook.com/soptobornomodelschool?mibextid=ZbWKwL"
            }
          >
            <h2 className="flex items-center gap-[6px] text-blue-600">
              <FaFacebook />
              Facebook
            </h2>
          </Link>

          <Link to="https://www.facebook.com/mdmoyeenuddin.02?mibextid=ZbWKwL">
            {" "}
            <h2 className="flex items-center gap-[6px] text-red-500">
              <FaYoutube />
              Youtube
            </h2>
          </Link>
          <h2 className="flex items-center gap-[6px] text-[#4c9580]">
            <MdEmail />
            Web Email
          </h2>
          <h2 className="flex items-center gap-[6px] text-[#4c9580]">
            <IoMdLogIn />
            Login
          </h2>
        </div>
      </div>
      {/* ====> Main menuber <====== */}
      <div className="bg-[#4c9580] text-white py-[15px]  items-center justify-center lg:flex hidden">
        <div className="max-w-[1200px] mx-auto flex gap-[30px]">
          {/* Home Dropdown */}
          <div className="relative">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              হোম
            </h2>
          </div>
          {/* About Dropdown */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              আমাদের সম্পর্কে
              <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[250px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <h2 className="text-[20px] font-semibold text-[#4c9580] mb-2">
                  আমাদের মেনু
                </h2>
                <p className="whitespace-nowrap pb-[10px]">আমাদের ইতিহাস</p>
                <p className="whitespace-nowrap pb-[10px]">মিশন ও ভিশন</p>
                <p className="whitespace-nowrap pb-[10px]">পরিচালনা পর্ষদ</p>
                <p className="whitespace-nowrap pb-[10px]">ম্যানেজমেন্ট টিম</p>
                <p className="whitespace-nowrap pb-[10px]">অংশীদারগণ</p>
                <p className="whitespace-nowrap pb-[10px]">পরামর্শক</p>
                <p className="whitespace-nowrap pb-[10px]">অর্জনসমূহ</p>
                <p className="whitespace-nowrap pb-[10px]">চাকরির সুযোগ</p>
                <p className="whitespace-nowrap pb-[10px]">যোগাযোগের তথ্য</p>
              </div>
            </div>
          </div>
          {/* admssion */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              ভর্তি <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[800px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* প্রতিষ্ঠান সম্পর্কে */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        প্রতিষ্ঠান সম্পর্কে
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ইতিহাস
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> লক্ষ্য ও
                        দৃষ্টিভঙ্গি
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> পরিচালনা পর্ষদ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ব্যবস্থাপনা টিম
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অংশীদার
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> উপদেষ্টা
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অর্জনসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> চাকরির সুযোগ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> যোগাযোগের তথ্য
                      </p>
                    </div>

                    {/* একাডেমিক প্রোগ্রাম */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        একাডেমিক প্রোগ্রাম
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> বিভাগসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অনুষদসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> কোর্সসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ভর্তি তথ্য
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> পরীক্ষার রুটিন
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ক্লাস সিডিউল
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> গ্রেডিং নীতি
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> একাডেমিক
                        ক্যালেন্ডার
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অনলাইন লাইব্রেরি
                      </p>
                    </div>

                    {/* সেবা ও সহায়তা */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        সেবা ও সহায়তা
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> শিক্ষার্থী পোর্টাল
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> শিক্ষক পোর্টাল
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> আইটি সহায়তা
                        কেন্দ্র
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> স্কলারশিপ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> পরিবহন
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> হোস্টেল সেবা
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> কাউন্সেলিং
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> সাধারণ প্রশ্নোত্তর
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> সহায়তা কেন্দ্র
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===> feature <=== */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              বৈশিষ্ট্য <IoIosArrowDown />
            </h2>

            <div className="absolute top-full left-0 mt-1 w-[850px] ml-[-200px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* প্রতিষ্ঠান সম্পর্কে */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        প্রতিষ্ঠান সম্পর্কে
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        আমাদের প্রতিষ্ঠান একটি সুপ্রতিষ্ঠিত শিক্ষা কেন্দ্র যা
                        দীর্ঘদিন ধরে মানসম্মত শিক্ষা প্রদান করে আসছে। আমরা
                        প্রতিটি শিক্ষার্থীর সম্ভাবনা বিকাশে অঙ্গীকারবদ্ধ। আধুনিক
                        প্রযুক্তি ও মানবিক মূল্যবোধের সমন্বয়ে গড়ে তোলা হয়েছে
                        আমাদের শিক্ষার পরিকাঠামো।
                      </p>
                    </div>

                    {/* একাডেমিক প্রোগ্রাম */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        একাডেমিক প্রোগ্রাম
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        আমাদের একাডেমিক প্রোগ্রাম সমূহ অত্যন্ত বৈচিত্র্যপূর্ণ ও
                        গুণগত মানসম্পন্ন। এখানে রয়েছে বিজ্ঞান, মানবিক, ও ব্যবসায়
                        শিক্ষা বিভাগের বিভিন্ন কোর্স। পাঠ্যক্রমের পাশাপাশি
                        শিক্ষার্থীদের সহশিক্ষা কার্যক্রমে অংশগ্রহণের সুযোগও
                        প্রদান করা হয়।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Instuitutes Dropdown */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              প্রতিষ্ঠান <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[250px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <h2 className="text-[20px] font-semibold text-[#4c9580] mb-2">
                  প্রতিষ্ঠান মেনু
                </h2>
                <p className="whitespace-nowrap pb-[10px]">
                  প্রতিষ্ঠান পরিচিতি
                </p>
                <p className="whitespace-nowrap pb-[10px]">
                  আমাদের লক্ষ্য ও উদ্দেশ্য
                </p>
                <p className="whitespace-nowrap pb-[10px]">অধ্যক্ষের বাণী</p>
                <p className="whitespace-nowrap pb-[10px]">শিক্ষকবৃন্দ</p>
                <p className="whitespace-nowrap pb-[10px]">পরিচালনা পর্ষদ</p>
                <p className="whitespace-nowrap pb-[10px]">
                  প্রতিষ্ঠানের ইতিহাস
                </p>
                <p className="whitespace-nowrap pb-[10px]">অবকাঠামো ও পরিবেশ</p>
                <p className="whitespace-nowrap pb-[10px]">সাফল্য ও অর্জন</p>
                <p className="whitespace-nowrap pb-[10px]">যোগাযোগ</p>
              </div>
            </div>
          </div>
          {/* Center */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              কেন্দ্র <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[500px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <h2 className="text-[20px] font-semibold text-[#4c9580] mb-2">
                  কেন্দ্র সম্পর্কিত তথ্য
                </h2>
                <p className="mb-2">
                  আমাদের প্রতিটি কেন্দ্র শিক্ষার্থীদের জন্য আধুনিক সুযোগ-সুবিধা
                  সমৃদ্ধ পরিবেশে পরিচালিত হয়, যেখানে মানসম্মত শিক্ষা প্রদান
                  নিশ্চিত করা হয়।
                </p>
                <p>
                  প্রতিটি কেন্দ্রেই প্রশিক্ষিত শিক্ষক, নিরবিচার ক্লাসরুম এবং
                  প্রযুক্তি নির্ভর পাঠদান ব্যবস্থা রয়েছে, যা শিক্ষার্থীদের
                  সার্বিক উন্নয়নে সহায়ক ভূমিকা রাখে।
                </p>
              </div>
            </div>
          </div>
          {/* admssion */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              বিভাগ <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[800px] ml-[-400px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* প্রতিষ্ঠান সম্পর্কে */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        প্রতিষ্ঠান সম্পর্কে
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ইতিহাস
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> লক্ষ্য ও
                        দৃষ্টিভঙ্গি
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> পরিচালনা পর্ষদ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ব্যবস্থাপনা টিম
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অংশীদার
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> উপদেষ্টা
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অর্জনসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> চাকরির সুযোগ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> যোগাযোগের তথ্য
                      </p>
                    </div>

                    {/* একাডেমিক প্রোগ্রাম */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        একাডেমিক প্রোগ্রাম
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> বিভাগসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অনুষদসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> কোর্সসমূহ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ভর্তি তথ্য
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> পরীক্ষার রুটিন
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> ক্লাস সিডিউল
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> গ্রেডিং নীতি
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> একাডেমিক
                        ক্যালেন্ডার
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> অনলাইন লাইব্রেরি
                      </p>
                    </div>

                    {/* সেবা ও সহায়তা */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        সেবা ও সহায়তা
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> শিক্ষার্থী পোর্টাল
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> শিক্ষক পোর্টাল
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> আইটি সহায়তা
                        কেন্দ্র
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> স্কলারশিপ
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> পরিবহন
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> হোস্টেল সেবা
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> কাউন্সেলিং
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> সাধারণ প্রশ্নোত্তর
                      </p>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        <FaBook className="text-[#4c9580]" /> সহায়তা কেন্দ্র
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===> feature <=== */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              গবেষণা <IoIosArrowDown />
            </h2>

            <div className="absolute top-full left-0 mt-1 w-[850px] ml-[-600px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                <div>
                  <div className="flex gap-[30px] items-start justify-between mt-[10px]">
                    {/* প্রতিষ্ঠান সম্পর্কে */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        প্রতিষ্ঠান সম্পর্কে
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        আমাদের প্রতিষ্ঠান একটি সুপ্রতিষ্ঠিত শিক্ষা কেন্দ্র যা
                        দীর্ঘদিন ধরে মানসম্মত শিক্ষা প্রদান করে আসছে। আমরা
                        প্রতিটি শিক্ষার্থীর সম্ভাবনা বিকাশে অঙ্গীকারবদ্ধ। আধুনিক
                        প্রযুক্তি ও মানবিক মূল্যবোধের সমন্বয়ে গড়ে তোলা হয়েছে
                        আমাদের শিক্ষার পরিকাঠামো।
                      </p>
                    </div>

                    {/* একাডেমিক প্রোগ্রাম */}
                    <div>
                      <h3 className="text-[#4c9580] font-semibold mb-[12px]">
                        একাডেমিক প্রোগ্রাম
                      </h3>
                      <p className="flex gap-[4px] items-center mb-[10px]">
                        আমাদের একাডেমিক প্রোগ্রাম সমূহ অত্যন্ত বৈচিত্র্যপূর্ণ ও
                        গুণগত মানসম্পন্ন। এখানে রয়েছে বিজ্ঞান, মানবিক, ও ব্যবসায়
                        শিক্ষা বিভাগের বিভিন্ন কোর্স। পাঠ্যক্রমের পাশাপাশি
                        শিক্ষার্থীদের সহশিক্ষা কার্যক্রমে অংশগ্রহণের সুযোগও
                        প্রদান করা হয়।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===> Library <=== */}
          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              গ্যালারি <IoIosArrowDown />
            </h2>

            <div className="absolute top-full left-0 mt-1 w-[850px] ml-[-700px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                  {[g1, g2, g3, g4, g5, g6]?.map((item) => (
                    <div className="h-[150px]">
                      <img className="h-full w-full" src={item} alt="l1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Notice Dropdown */}

          <div className="relative group inline-block">
            <h2 className="flex items-center gap-[4px] cursor-pointer font-semibold">
              নোটিশ <IoIosArrowDown />
            </h2>

            <div className="absolute top-full mt-1 w-[550px] ml-[-500px] origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-transform transition-opacity duration-300 ease-in-out bg-white text-black rounded shadow-md z-10">
              <div className="p-[20px] w-full">
                {[
                  "ভর্তি ফরম জমার শেষ তারিখ ৩০ জুন ২০২৫।",
                  "শিক্ষার্থীদের জন্য নতুন ক্লাস রুটিন প্রকাশিত হয়েছে।",
                  "পরীক্ষার সময়সূচি ওয়েবসাইটে আপলোড করা হয়েছে।",
                  "শিক্ষার্থীদের ইউনিফর্ম পরিধান বাধ্যতামূলক।",
                  "আগামী শুক্রবার সকল ক্লাস বন্ধ থাকবে।",
                  "অভিভাবক সভা আগামী সপ্তাহে অনুষ্ঠিত হবে।",
                  "লাইব্রেরি সকাল ৯টা থেকে বিকাল ৪টা পর্যন্ত খোলা থাকবে।",
                  "নতুন পাঠ্যবই বিতরণ শুরু হয়েছে।",
                  "অনলাইন অ্যাসাইনমেন্ট জমা দেওয়ার সময় বাড়ানো হয়েছে।",
                ].map((notice, i) => (
                  <p
                    key={i}
                    className="flex items-start gap-2 pb-[10px] text-sm hover:text-[#4c9580] transition-colors duration-200"
                  >
                    <FiAlertCircle className="text-[#4c9580] mt-[3px]" />
                    {notice}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#4c9580] text-white py-[15px]  items-end justify-end flex lg:hidden pr-[15px]">
        <GiHamburgerMenu className="text-[35px]" />
      </div>
      {/* ===> Marque <==== */}

      {/* <div className="flex ">
        <div className="bg-blue-600 font-bold p-[10px] text-white">Notice</div>
        <Marquee>
          শিক্ষা মানুষের জীবনের মৌলিক অধিকার এবং উন্নয়নের প্রধান হাতিয়ার। একজন
          শিক্ষিত ব্যক্তি কেবল নিজের উন্নতি নয়, সমাজ ও দেশের উন্নয়নেও ভূমিকা
          রাখতে পারে। শিক্ষার মাধ্যমে মানুষ তার জ্ঞান, দক্ষতা ও চিন্তাশক্তি
          বিকাশ করতে পারে। একটি উন্নত জাতি গঠনের জন্য প্রয়োজন সঠিক ও মানসম্মত
          শিক্ষা ব্যবস্থা। বর্তমানে তথ্যপ্রযুক্তি শিক্ষার ক্ষেত্রে এক নতুন
          দিগন্ত উন্মোচন করেছে। অনলাইন শিক্ষা, ডিজিটাল ক্লাসরুম ও ই-লার্নিং
          পদ্ধতির কারণে শিক্ষার্থীরা এখন আরও সহজে জ্ঞান অর্জন করতে পারছে। শিক্ষা
          শুধু পুঁথিগত বিদ্যার মধ্যে সীমাবদ্ধ নয়, নৈতিক শিক্ষা, মানবিকতা,
          দেশপ্রেম ও দায়িত্ববোধও একজন শিক্ষার্থীর মধ্যে গড়ে তুলতে হবে।
        </Marquee>
      </div> */}
    </div>
  );
};

export default Navber;
