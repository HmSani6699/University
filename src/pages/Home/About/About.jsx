import { FaPlay } from "react-icons/fa";
import school from "../../../../public/school.jpg";
import { BiSolidZap } from "react-icons/bi";
import Animation from "../../../Component/Animation/Animation";

const About = () => {
  return (
    <div className="my-[50px] p-[10px]">
      <Animation>
        {" "}
        <div className="flex items-center justify-center">
          <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
            <div className="bg-[#07a69826] p-[4px] rounded-full">
              <BiSolidZap className="text-[#07A698]" />
            </div>
            সম্পর্কে
          </button>
        </div>
      </Animation>
      <Animation>
        {" "}
        <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
          আমাদের সম্পর্কে
        </p>
      </Animation>
      <div className="max-w-[1200px] mx-auto lg:flex items-center gap-[40px] h-[400px] mt-[30px]">
        {/* ======> Left <===== */}
        <div className="lg:w-1/2">
          <Animation>
            <h2 className="text-[30px] font-bold ">
              সপ্তবর্ণ মডেল স্কুলে আপনাকে স্বাগতম।
            </h2>
          </Animation>
          <Animation>
            {" "}
            <p>
              সপ্তবর্ণ মডেল স্কুল একটি আধুনিক, নীতিনিষ্ঠ ও শিক্ষাবান্ধব
              প্রতিষ্ঠান, যেখানে শিক্ষা শুধু পুঁথিগত জ্ঞান নয়—বরং একে জীবন গড়ার
              উপযুক্ত হাতিয়ার হিসেবে গড়ে তোলা হয়। প্রতিষ্ঠার শুরু থেকেই আমরা
              শিক্ষার্থীদের জন্য একটি নিরাপদ, সুশৃঙ্খল ও সৃজনশীল পরিবেশ নিশ্চিত
              করার প্রতি সর্বোচ্চ গুরুত্ব দিয়ে আসছি। আমাদের লক্ষ্য হল প্রতিটি
              শিশুর মধ্যে লুকিয়ে থাকা সম্ভাবনাকে আবিষ্কার করে তাকে একটি
              সুশিক্ষিত, আত্মবিশ্বাসী ও নৈতিকতাসম্পন্ন মানুষ হিসেবে গড়ে তোলা। এ
              লক্ষ্যে আমরা আধুনিক পাঠ্যক্রম, যুগোপযোগী প্রযুক্তি ও অভিজ্ঞ
              শিক্ষক-শিক্ষিকাবৃন্দের মাধ্যমে একটি মানসম্মত শিক্ষার পরিবেশ
              নিশ্চিত করে চলেছি। শিক্ষা, শৃঙ্খলা ও মূল্যবোধ—এই তিনটি স্তম্ভকে
              ভিত্তি করেই এগিয়ে চলছে সপ্তবর্ণ মডেল স্কুলের দীপ্ত যাত্রা। আমরা
              বিশ্বাস করি—আজকের শিক্ষার্থীই আগামী দিনের ভবিষ্যৎ, আর সেই
              ভবিষ্যতের জন্যই আমরা গড়ে তুলছি একটি শিক্ষার আদর্শ স্থান—সপ্তবর্ণ
              মডেল স্কুল।
            </p>
          </Animation>
        </div>
        {/* =====> Right <==== */}
        <div className="lg:w-1/2 p-4">
          <Animation>
            {" "}
            <div className="relative h-[350px] rounded-[10px] overflow-hidden group">
              {/* Background Image */}
              <img
                src={school}
                alt="logo"
                className="h-full w-full object-cover "
              />

              {/* Overlay with play button */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#005639a6]">
                <div className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg hover:bg-opacity-100 transition">
                  <FaPlay className="text-[#4c9580] text-[30px]" />
                </div>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default About;
