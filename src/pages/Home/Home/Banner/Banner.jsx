import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import school from "../../../../../public/school.jpg";
import schoo2 from "../../../../../public/school2.jpg";
import schoo3 from "../../../../../public/school3.jpg";

const Banner = () => {
  return (
    <div className="w-full h-[500px] ">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper custom-swiper-nav my-swiper"
      >
        <SwiperSlide>
          <div className="relative h-[500px] w-full overflow-hidden">
            {/* Blurred Background Image */}
            <img
              src={school}
              alt="school"
              className="h-full w-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-[#00000085] bg-opacity-30 flex items-center justify-center text-center text-white">
              <div>
                <h1 className="text-white text-[40px] font-bold">
                  সকলকে স্বাগতম,
                </h1>
                <p>সপ্তবর্ণ মডেল স্কুলকে সারা বাংলাদেশের রোল মডেল করতে চাই</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-full overflow-hidden">
            {/* Blurred Background Image */}
            <img
              src={schoo2}
              alt="school"
              className="h-full w-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-[#00000085] bg-opacity-30 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">
                Welcome to Our School
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[500px] w-full overflow-hidden">
            {/* Blurred Background Image */}
            <img
              src={schoo3}
              alt="school"
              className="h-full w-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-[#00000085] bg-opacity-30 flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">
                Welcome to Our School
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
