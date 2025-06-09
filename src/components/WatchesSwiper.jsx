"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CustomImage } from "./dynamiComponents";

const WatchesSwiper = ({ backgroundImg, watchItems }) => {
  const itemsArray = watchItems.SwiperIems || [];
  return (
    <div className="relative w-full h-[70vh] lg:h-[100vh] flex items-center justify-center sm:px-12">
      <div className="absolute inset-0">
        <CustomImage
          srcAttr={backgroundImg}
          altAttr=""
          titleAttr=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </div>

      <div className="absolute top-0 w-full  flex justify-center px-4">
        <h3 className="text-2xl md:text-5xl mt-4 lg:text-7xl 2xl:text-8xl 4xl:text-9xl font-belleza tracking-wide lg:tracking-wider whitespace-nowrap uppercase text-center flex flex-wrap font-bold">
          New Arrivals
        </h3>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeMode={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.3 },
        }}
        className="relative z-10 w-full px-6"
      >
        {itemsArray.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[200px] sm:w-[300px] md:w-[240px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px] p-3 sm:p-4 lg:mt-28 bg-black rounded-2xl flex flex-col justify-center items-center mx-2 sm:mx-4 lg:mx-6 h-full min-h-[180px] sm:min-h-[220px] md:min-h-[280px] xl:min-h-[300px] 2xl:min-h-[200px]"
            >
              <CustomImage
                srcAttr={item.img}
                altAttr={item.altAttr}
                titleAttr={item.titleAttr}
                className="rounded-md max-h-[150px] sm:max-h-[200px] md:max-h-[250px] lg:max-h-[350px]"
              />

              <h3 className="text-center py-6 text-lg lg:text-2xl 2xl:text-3xl">
                {item.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WatchesSwiper;
