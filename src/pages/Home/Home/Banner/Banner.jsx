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
import schoo4 from "../../../../../public/school4.jpg";

const Banner = () => {
  return (
    <div className="w-full h-[200px] ">
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px] w-full">
            <img
              src={school}
              alt="school"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] w-full">
            <img
              src={schoo2}
              alt="school"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] w-full">
            <img
              src={schoo3}
              alt="school"
              className="h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
