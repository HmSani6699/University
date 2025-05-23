import image from "../../../../public/teacher1.png";

const Professor = () => {
  return (
    <div className="bg-[#f5f5f5] py-10 px-5 flex flex-col md:flex-row items-center  gap-8 max-w-6xl mx-auto my-[30px]">
      {/* Image Shield */}
      <div className="relative">
        {/* Shadow border effect */}
        <div className="absolute -left-[20px] top-[20px] h-[360px] w-[310px] rounded-b-full border-[6px] border-white bg-white z-0 shadow-lg"></div>
        <div className="relative h-[360px] w-[290px] rounded-b-full overflow-hidden bg-[#4c9580] z-10">
          <img
            src={image}
            alt="Vice Chancellor"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          উপাধ্যক্ষের
          <span className="text-[#4c9580]"> শুভ বার্তা</span>
        </h2>
        <p className="text-xl mt-4 font-medium text-gray-800">
          অধ্যাপক মোঃ মঈন উদ্দিন
        </p>
        <p className="text-[#4c9580] font-semibold mt-1">উপাচার্য</p>
        <p>
          সম্মানিত অভিভাবকবৃন্দ, প্রিয় শিক্ষক, শিক্ষার্থী ও শুভানুধ্যায়ীবৃন্দ,
          আসসালামু আলাইকুম ও رحمت الله। একটি শিক্ষাপ্রতিষ্ঠান কেবল জ্ঞান অর্জনের
          কেন্দ্র নয়, এটি নৈতিকতা, মূল্যবোধ ও মানবিক গুণাবলির বিকাশের ক্ষেত্রও
          বটে। আমাদের প্রতিষ্ঠানে আমরা প্রতিটি শিক্ষার্থীকে একজন আদর্শ নাগরিক
          হিসেবে গড়ে তোলার নিরন্তর প্রচেষ্টা চালিয়ে যাচ্ছি। আমি দৃঢ়ভাবে বিশ্বাস
          করি, সুশিক্ষার আলোয় আলোকিত হয়ে আমাদের শিক্ষার্থীরা আগামী দিনে সমাজ ও
          দেশের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখবে। ...
        </p>

        <div className=" flex items-end justify-end pr-[20px]">
          <button className="border border-[#4c9580] mt-[50px] px-[20px] py-[6px] bg-[#4c9580]  rounded-full hover:bg-[#4c9580] text-white ">
            আরও পড়ুন ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Professor;
