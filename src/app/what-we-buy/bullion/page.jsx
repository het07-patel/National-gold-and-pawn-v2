import React from "react";
import Hero from "@/components/hero";
import banner from "@/assets/images/hero-bullion.webp";
import Image1 from "@/assets/images/bullion/Image1.webp";
import Image2 from "@/assets/images/bullion/Image2.webp";
import VisitUs from "@/components/visitus";
import GradientText from "@/components/gradient-text";
import AnimatedSection from "@/components/animated-section";
import { CustomImage } from "@/components/dynamiComponents";
import coinImage from "@/assets/images/bullion/coin-image.webp";
import CoinSlide from "@/components/CoinSlide";
import bgimage from "@/assets/images/bullion/bgImg.webp";

const communityContent = [
  {
    img: Image1,
    titleAttr: "National Gold and Pawn | Gold for Cash",
    altAttr: "National Gold and Pawn | Gold for Cash",
    title: "Turn Precious Metals Into Instant Value",
    description: [
      "Whether it's gold bars, silver rounds, or platinum coins, we offer competitive rates and quick payouts. Our team ensures secure handling, real-time pricing, and a transparent process from start to finish.",
    ],
  },
   {
    img: Image2,
    titleAttr: "National Gold and Pawn | Gold for Cash",
    altAttr: "National Gold and Pawn | Gold for Cash",
    title: "Smart Moves Start with Bullion",
      direction: "RTF",
       className: "!flex-col lg:!flex-row-reverse md:!px-5",
    description: [
      "Building your wealth with bullion starts here. Whether you’re a seasoned investor or just starting out, we make it easy to buy premium gold, silver, and platinum with confidence, clarity, and expert guidance.",
    ],
  },
];

export default function BullionPage() {
  return (
    <>
      <div>
        <Hero
          title="Bullion That Holds Its Power"
          description="Gold, silver, or platinum—bullion isn’t just metal, it’s lasting value. Whether you're buying or selling, trust us for expert insight, fair rates, and secure transactions."
          imageSrc={banner}
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        />
      </div>

      <section className="p-4 xxs:p-2 xxs:py-4 sm:p-8 md:p-12 lg:p-16 xl:p-10 mt-12">
        <h3 className="my-6 mb-2 md:mb-7 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl md:mx-0 font-black uppercase text-center">
          Stack Smart, <GradientText text="Trade Confidently" />
        </h3>
        {communityContent.length &&
          communityContent.map((community, i) => {
            return (
              <AnimatedSection
                className={"md:!py-0 md:!px-5"}
                key={i}
                {...community}
              />
            );
          })}
      </section>

      <main className="bg-black 2xl:px-36">
        {/* Hero Section */}
        <section className="relative text-center py-20 px-6">
          <CustomImage
            src={bgimage}
            alt="Empire Bullion Hero"
            fill
            className="object-cover opacity-20 z-0"
          />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-xl lg:text-5xl sm:text-2xl md:text-4xl font-extrabold text-gold mb-8 uppercase">
              Where Every Ounce Reflects Market-Driven True Worth
            </h1>
            <p className="text-sm lg:text-lg sm:text-sm md:text-2xl 2xl:text-3xl mb-8">
              We price every bullion piece using real-time market data, ensuring you get honest, transparent value for every transaction.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          className="px-6 py-16 md:py-24 text-center max-w-5xl 2xl:max-w-full mx-auto"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold  mb-12 uppercase">
            Value You Can Hold
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <CustomImage
                src={coinImage}
                alt="Gold Coin"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <p className="text-sm leading-relaxed lg:text-lg 2xl:text-xl">
                Bullion isn't just an investment—it's a tangible asset with lasting worth. We buy and sell gold, silver, and platinum with accuracy and integrity. Whether you're expanding your portfolio or liquidating assets, we ensure fair evaluations, transparent pricing, and a secure experience every step of the way.
              </p>
            </div>
          </div>
        </section>
      </main>
          <section className="p-4 xxs:p-2 xxs:py-4 sm:p-8 md:p-12 lg:p-8 xl:p-4 2xl:p-10 bg-baseblack">
        <h3 className="my-6 mb-2 md:mb-7 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl md:mx-0 font-black uppercase text-center">
        Your Metals,<GradientText text=" Our Expertise" />
        
        </h3>
          <div className="w-full text-center">
              <p className="lg:text-lg leading-relaxed pb-8 2xl:text-xl ">
               Navigating the bullion market can be complex—but we make it simple. Our experienced team handles each transaction with precision and care, offering accurate assessments, secure handling, and honest advice so you can make informed decisions with total peace of mind.
              </p>
              </div>
        </section>
      <CoinSlide />
      <VisitUs />
    </>
  );
}
