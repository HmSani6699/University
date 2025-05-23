import Navber from "../Navber/Navber";
import Banner from "../pages/Home/Home/Banner/Banner";
import Professor from "../pages/Home/Professor/Professor";
import Marquee from "react-fast-marquee";
import Teacher from "../pages/Home/Teacher/Teacher";
import CountDown from "../pages/Home/CountDown/CountDown";
import Blog from "../pages/Home/Blog/Blog";
import Footer from "../pages/Footer/Footer";
import About from "../pages/Home/About/About";
import Category from "../pages/Home/Category/Category";
import Gallery from "../pages/Home/Gallery/Gallery";
import VideoGallery from "../pages/Home/VideoGallery/VideoGallery";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <Banner />
      <div className="flex ">
        <div className="bg-[#4c9580] font-bold py-[6px] text-white px-[30px]">
          নোটিশ
        </div>
        <Marquee className="text-[#4c9580]">
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
      </div>
      <Professor />
      <Teacher />
      <CountDown />
      <Blog />
      <About />
      <Category />
      <Gallery />
      <VideoGallery />
      <Footer />
    </div>
  );
};

export default MainLayout;
