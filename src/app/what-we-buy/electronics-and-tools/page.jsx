"use client";
import Hero from "@/components/hero";
import Image from "next/image";
import banner from "@/assets/images/hero-laptops.webp";
import { VisitUs, CustomImage } from "@/components/dynamiComponents";
import tool1 from "@/assets/images/electronics-and-tools/tool-1.webp";
import tool2 from "@/assets/images/electronics-and-tools/tool-2.webp";
import tool3 from "@/assets/images/electronics-and-tools/tool-3.webp";
import tool4 from "@/assets/images/electronics-and-tools/tool-4.webp";
import tool5 from "@/assets/images/electronics-and-tools/tool-5.webp";
import tool6 from "@/assets/images/electronics-and-tools/tool-6.webp";
import Image2 from "@/assets/images/electronics-and-tools/Img-2.webp";
import Image3 from "@/assets/images/electronics-and-tools/Img-3.webp";
import Image4 from "@/assets/images/electronics-and-tools/Img-4.webp";
import Image5 from "@/assets/images/electronics-and-tools/Img-5.webp";
import Image6 from "@/assets/images/electronics-and-tools/Img-6.webp";
import Image7 from "@/assets/images/electronics-and-tools/Img-7.webp";
import toolsbg from "@/assets/images/electronics-and-tools/ele-tool-bg.webp";
import AlternatingFeatureBlock from "@/components/alternatingFeatureBlock";
import featureImg from "@/assets/images/electronics-and-tools/featureImg.webp";
import featureImg1 from "@/assets/images/electronics-and-tools/featureImg1.webp";
import Image1 from "@/assets/images/electronics-and-tools/Image-1.webp";

export default function LaptopSection() {
  const tools = [tool1, tool2, tool3, tool4, tool5, tool6];
  const duplicatedTools = [...tools, ...tools];

  const categoryData = {
    alternatingFeature: {
      title: " Designed to Deliver, Built to Inspire",
      feature: [
        {
          title: "Power Up Your Workspace",
          description:
            "Upgrade your setup with sleek monitors, powerful laptops, immersive headphones, and smart accessories. Designed for creators and professionals, this tech collection brings speed, style, and seamless performance to your daily workflow.",
          direction: "LTF",
          imgSrc: featureImg1,
          titleAttr: "Experienced Appraisal",
          altAttr: "Appraisal Expert Image",
        },
        {
          title: "Where Craft Meets Code",
          description:
            "Experience the perfect fusion of hands-on craftsmanship and cutting-edge technology. Whether you're building with tools or creating with code, innovation starts at your workbench.",
          direction: "RTF",
          imgSrc: featureImg,
          titleAttr: "Honest Deals Image",
          altAttr: "Customer Transaction",
        },
      ],
    },
  };

  return (
    <>
      <Hero
        title="Precision in Tools, Performance in Electronics"
        description="Precision in Tools, Performance in Electronics reflects our focus on delivering accurate tools and high-efficiency electronic solutions for superior results."
        imageSrc={banner}
        imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
      />

      <div className="text-3xl mb-4 sm:text-4xl md:text-5xl lg:text-6xl text-center pt-8 sm:pt-12 md:pt-16 lg:pt-14 xl:pt-18">
        <h3 className="my-6 md:mb-9 lg:mt-0 text-center text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-black uppercase">
          Smart
          <span className="bg-gradient-to-r from-[#eb2a1d] to-[#1d46eb] bg-clip-text text-transparent"> Electronic</span>
        </h3>
      </div>

      <main className="text-xl min-h-screen py-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 text-center ">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-[7/7] sm:aspect-[5/5] md:aspect-[7/7] lg:aspect-[7/5] w-full">
            <Image
              src={Image1}
              alt="Model with green bag"
              layout="fill"
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center h-full">
              <div className="text-base sm:text-lg leading-relaxed max-w-md sm:text-center lg:text-start text-center">
                <h2 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl mb-2 sm:mb-3 md:mb-4 leading-tight font-belleza lg:leading-[50px] 2xl:leading-[60px] font-bold ">
                  Experience Seamless Digital Integration
                </h2>
                <p>
                  Your home is more than a space—it’s a system. With our range
                  of intelligent electronics and integrated tools, you can
                  transform any room into a smart, responsive, and secure
                  environment. Control, automate, and enhance your living
                  experience with products that anticipate your needs and adapt
                  to your lifestyle. This isn’t just the future—it’s your new
                  normal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slider / Grid Preview */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-6 gap-4 pt-8 pb-0 text-basewhite">
          {[
            {
              title: "EchoTone Wireless Headphones",
              image: Image2,
            },
            {
              title: "AuraPods + Galaxy Companion",
              image: Image3,
            },
            {
              title: "PulseFit Smartwatch Pro",
              image: Image4,
            },
            {
              title: "NovaCharge Wireless Station",
              image: Image5,
            },
            {
              title: "ZenFlex Convertible Laptops",
              image: Image6,
            },
            {
              title: "PrismFlex Galaxy Series",
              image: Image7,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="w-full rounded-2xl shadow-md overflow-hidden group"
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-2xl">
                <CustomImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                />
              </div>
              <div className="p-4 gap-1">
                <p className="text-sm font-medium leading-snug">{item.title}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {categoryData.alternatingFeature ? (
        <section className="container p-10 md:p-14 xl:p-16 2xl:p-20">
          <h3 className="text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl mb-6 md:mb-16 2xl:mb-24 text-center text-basewhite font-bold">
            {categoryData.alternatingFeature.title ||
              "Why Choose Tele Gold Jewelers?"}
          </h3>
          <div className="space-y-8 lg:space-y-24">
            {categoryData.alternatingFeature.feature.map((feature, i) => (
              <AlternatingFeatureBlock key={i} {...feature} />
            ))}
          </div>
        </section>
      ) : null}

      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 mt-16 sm:mt-20 md:mt-24 lg:mt-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 overflow-hidden">
        <CustomImage
          src={toolsbg}
          alt="Center Watch Background"
          className="absolute inset-0 mx-auto my-auto w-full h-full object-cover filter blackscale brightness-50 z-0 pointer-events-none"
        />

        <div className="relative text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light tracking-wide mb-2 sm:mb-3 md:mb-4">
            INNOVATION MEETS PRECISION
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mt-1 sm:mt-2">
            ELITE ELECTRONICS
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
            & TOOLS
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed px-2 sm:px-4 md:px-6 lg:px-8">
            Unlock the power of performance and durability with our expertly
            crafted electronics and precision tools — built for those who demand
            excellence.
          </p>
        </div>
      </div>

      <section className="text-center px-4 sm:px-6 lg:px-8">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center pt-8 sm:pt-12 md:pt-16">
          <h3 className="my-6 md:mb-9 lg:mt-0 text-center text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-black uppercase"> Power
            <span className="bg-gradient-to-r from-[#eb2a1d] to-[#1d46eb] bg-clip-text text-transparent"> tools
            </span>
          </h3>
        </div>

        <div className="mx-auto">
          <p className="text-base lg:text-lg text-center mt-6 sm:mt-8 mb-8 sm:mb-12 px-2 sm:px-4">
            Explore our extensive tools inventory, catering to both everyday homeowners and seasoned professionals. Whether you're tackling small home repairs or managing large-scale construction projects, we offer a wide selection of reliable, high-performance tools to get the job done. Discover essentials such as socket sets, drills, wrenches,
            saws, nail guns, belt sanders, and lawnmowers. We also stock air compressors, angle grinders, pressure washers, tool storage systems,and safety gear. From precision screwdrivers to heavy-duty power tools, our collection is curated to support efficiency, durability, and safety. Trust in our inventory to equip you with the right tools for every task—big or small.
          </p>
        </div>

        <div className="w-full mt-10 mb-12 overflow-hidden">
          {/* Continuous sliding container */}
          <div
            className="flex space-x-6 hover:pause-animation"
            style={{
              animation: "slideLeft 30s linear infinite",
              width: "fit-content",
            }}
          >
            {duplicatedTools.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 overflow-hidden rounded-3xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-48 sm:h-56 md:h-60 hover:scale-105 transition-transform duration-300 "
                />
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes slideLeft {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .hover\\:pause-animation:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      <VisitUs />
    </>
  );
}
