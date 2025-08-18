import BlogCart from "../../../Component/BlogCart/BlogCart";
import image from "../../../../public/cart1.jpg";
import image1 from "../../../../public/cart2.jpg";
import image2 from "../../../../public/cart3.jpg";
import image3 from "../../../../public/cart4.jpg";
import image4 from "../../../../public/cart5.jpg";
import image5 from "../../../../public/cart6.jpg";
import { BiSolidZap } from "react-icons/bi";
import Animation from "../../../Component/Animation/Animation";

const Blog = () => {
  const allBlog = [
    {
      image: image,
      title: "",
      description:
        "একটি শ্রদ্ধা এবং শুভেচ্ছা অনুষ্ঠানের মুহূর্ত ধারণ করা হয়েছে এই ছবিতে। শিক্ষক, অভিভাবক ও ছাত্রছাত্রীরা একত্রিত হয়ে একটি শিক্ষার্থীকে ফুলের তোড়া দিয়ে শুভেচ্ছা জানাচ্ছেন। ছবির পেছনে একটি অফিস ঘরের পরিবেশ দেখা যাচ্ছে, যেখানে সম্মানিত শিক্ষক ও...",
    },
    {
      image: image1,
      title: "",
      description:
        "একটি উৎসবমুখর পরিবেশে একটি মঞ্চের সামনে তোলা এই ছবিতে স্থানীয় নেতা এবং জনসাধারণকে বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মদিন ও জাতীয় দিবস উদযাপন করতে দেখা যাচ্ছে। সন্ধর্বণ মডেল স্কুল এর ব্যানারসহ, বর্ণাঢ্য সাজসজ্জা এবং রঙিন বেলুনের ..",
    },
    {
      image: image2,
      title: "",
      description:
        "এই ছবিতে সন্ধর্বণ মডেল স্কুল এর সামনে দাঁড়িয়ে শিক্ষার্থী, শিক্ষক ও অভিভাবকদের একটি দলকে দেখা যাচ্ছে। সবাই বিজয় চিহ্ন (ভি সাইন) প্রদর্শন করছেন, যা তাদের আনন্দ, গর্ব এবং ঐক্যকে প্রতিফলিত করে। ছবির পেছনে স্কুল ভবনের অংশ ও ব্যানার দৃশ্যমান, ...",
    },
    {
      image: image3,
      title: "",
      description:
        "এই ছবিতে সন্ধর্বণ মডেল স্কুল এর সামনে দাঁড়িয়ে শিক্ষার্থী, শিক্ষক ও অভিভাবকদের একটি দলকে দেখা যাচ্ছে। সবাই বিজয় চিহ্ন (ভি সাইন) প্রদর্শন করছেন, যা তাদের আনন্দ, গর্ব এবং ঐক্যকে প্রতিফলিত করে। ছবির পেছনে স্কুল ভবনের অংশ ও ব্যানার দৃশ্যমান, ...",
    },
    {
      image: image4,
      title: "",
      description:
        "একটি উৎসবমুখর পরিবেশে একটি মঞ্চের সামনে তোলা এই ছবিতে স্থানীয় নেতা এবং জনসাধারণকে বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মদিন ও জাতীয় দিবস উদযাপন করতে দেখা যাচ্ছে। সন্ধর্বণ মডেল স্কুল এর ব্যানারসহ, বর্ণাঢ্য সাজসজ্জা এবং রঙিন বেলুনের...",
    },
    {
      image: image5,
      title: "",
      description:
        "একটি শ্রদ্ধা এবং শুভেচ্ছা অনুষ্ঠানের মুহূর্ত ধারণ করা হয়েছে এই ছবিতে। শিক্ষক, অভিভাবক ও ছাত্রছাত্রীরা একত্রিত হয়ে একটি শিক্ষার্থীকে ফুলের তোড়া দিয়ে শুভেচ্ছা জানাচ্ছেন। ছবির পেছনে একটি অফিস ঘরের পরিবেশ দেখা যাচ্ছে, যেখানে সম্মানিত শিক্ষক ও ....",
    },
  ];

  return (
    <div className=" bg-white pt-[60px] pb-[50px] p-[10px]">
      <Animation>
        <div className="flex items-center justify-center">
          <button className="bg-white flex p-[5px]  rounded-full gap-[8px] pr-[10px] text-[14px] ">
            <div className="bg-[#07a69826] p-[4px] rounded-full">
              <BiSolidZap className="text-[#07A698]" />
            </div>
            ইভেন্ট
          </button>
        </div>
      </Animation>
      <Animation>
        <p className="font-Baloo text-[#1D5276] mt-[20px] text-[30px] text-center  leading-[28px] font-[600]">
          প্রতিদিনের ইভেন্টসমূহ
        </p>
      </Animation>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[35px] mt-[50px] max-w-[1100px] mx-auto">
        {allBlog?.map((item) => (
          <Animation>
            <BlogCart item={item} />
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default Blog;
