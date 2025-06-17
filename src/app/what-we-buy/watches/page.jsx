"use client";
import Hero from "@/components/hero";
import banner from "@/assets/images/hero-watches.webp";
import { VisitUs } from "@/components/dynamiComponents";
import watchSwiper1 from "@/assets/images/Watches/watch-swiper-1.webp";
import watchSwiper2 from "@/assets/images/Watches/watch-swiper-2.webp";
import watchSwiper3 from "@/assets/images/Watches/watch-swiper-3.webp";
import watchSwiper4 from "@/assets/images/Watches/watch-swiper-4.webp";
import watchSwiper5 from "@/assets/images/watches/watch-swiper-5.webp";
import watch1 from "@/assets/images/watches/watch1.webp";
import watchBackground from "@/assets/images/watches/watch-background.webp";
import watchbg from "@/assets/images/watches/watch-bg2.webp";
import footerImg1 from "@/assets/images/watches/footer1-img.webp";
import { WatchesSwiper } from "@/components/dynamiComponents";
import { Animation } from "@/components/dynamiComponents";
import CustomImage from "@/components/customImage";

export default function Watches() {
  const watchData = {
    SwiperIems: [
      {
        title: "Eternal Grace Watch",
        img: watchSwiper1,
        titleAttr: "",
        altAttr: "",
      },
      {
        title: "Celeste Noir Watch ",
        img: watchSwiper2,
        titleAttr: "",
        altAttr: "",
      },
      {
        title: "Luxe Meridian Watch",
        img: watchSwiper3,
        titleAttr: "",
        altAttr: "",
      },
      {
        title: "Timeless Muse Watch",
        img: watchSwiper4,
        titleAttr: "",
        altAttr: "",
      },
      {
        title: "Ivory Eclipse Watch",
        img: watchSwiper5,
        titleAttr: "",
        altAttr: "",
      },
    ],
  };
  const animatedContent = [
    {
      img: watch1,
      title: "Watches That Hold Their Worth",
      altAttr: "",
      description: [
        "Luxury or casual, watches are more than just accessories—they're assets. We buy timepieces that blend craftsmanship, brand value, and lasting appeal. From Rolex and Tag Heuer to Apple and Seiko, bring your watch in for a quick, honest evaluation and get paid what it’s really worth—on the spot. ",
      ],

      direction: "RTF",
    },
  ];

  return (
    <>
      <div>
        <Hero
          title="Elevate Your Everyday with Timeless Timepieces"
          description="Sell your watch with ease—trusted buyers, fair value, and a smooth experience that makes every second count."
          imageSrc={banner}
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        />
      </div>

      <section className="lg:text-6xl text-center pt-10 md:pt-14 xl:pt-16 2xl:pt-24 text-2xl">
       <h3 className="my-6 md:mb-9 lg:mt-0 text-center text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-black uppercase">Sell Luxury & Everyday
        <span className="bg-gradient-to-r from-[#eb2a1d] to-[#1d46eb] bg-clip-text text-transparent"> Watches in Utica</span></h3>
        <section>
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-10 2xl:pt-18">
            <Animation {...animatedContent[0]} />
          </div>
        </section>
      </section>

      <div className="relative sm:mb-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
        <CustomImage
          src={watchbg}
          alt="Center Watch Background"
          className="absolute inset-0 mx-auto my-auto w-full h-full object-cover filter blackscale brightness-50 z-0 pointer-events-none"
        />

        {/* Center Text Content */}
        <div className="relative z-20 text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light tracking-wide mb-2 sm:mb-3 md:mb-4">
            LUXURY TIMEKEEPERS
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold uppercase mt-1 sm:mt-2">
            More Than Just a
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold uppercase mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
            Timepiece Trade
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed px-2 sm:px-4 md:px-6 lg:px-8">
            We value what your watch represents—style, heritage, and craftsmanship.
            Whether you're selling or just exploring options, we’re here to guide you.
          </p>
        </div>
      </div>

      <section className="pt-14 md:pt-10 lg:pt-14 xl:pt-16 2xl:pt-20 md:px-4 sm:px-6 lg:px-8">
        <WatchesSwiper backgroundImg={watchBackground} watchItems={watchData} />
      </section>

      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Watch Image */}
            <div className="w-full lg:w-1/2">
              <CustomImage
                src={footerImg1}
                alt="Luxury Watch"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-5 lg:mt-20 xl:mt-18 ">
              <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-4 lg:leading-[50px] 2xl:leading-[60px]">
                Timeless. Trusted. Local.
              </h2>
              <p className="leading-relaxed text-sm sm:text-base max-w-xl">
                We’re more than buyers—we’re your neighborhood experts in watches. 
                From classic heirlooms to modern wearables, we offer honest insights, fair value, and a personal touch you won’t find online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VisitUs />
    </>
  );
}
