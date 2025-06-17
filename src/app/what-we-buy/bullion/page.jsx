import React from "react";
import Hero from "@/components/hero";
import banner from "@/assets/images/hero-bullion.webp";
import Image1 from "@/assets/images/bullion/Image1.webp";
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
    title: "Buy, Sell, and Pawn Precious Metals",
    description: [
      "At National Gold and Pawn, we specialize in the buying, selling, and pawning of bullion, including gold, silver, platinum, and palladium. Whether you're a first-time investor or a seasoned collector, our experienced team ensures a safe, transparent, and rewarding experience every step of the way.",
    ],
  },
   {
    img: Image1,
    titleAttr: "National Gold and Pawn | Gold for Cash",
    altAttr: "National Gold and Pawn | Gold for Cash",
    title: "Bullion Coins: Where Art Meets Value",
      direction: "RTF",
       className: "!flex-col lg:!flex-row-reverse md:!px-5",
    description: [
      "Our bullion coins are more than investments—they’re miniature works of art. Featuring detailed designs, rich history, and enduring worth, our collection is ideal for both first-time buyers and seasoned collectors seeking something truly special.",
    ],
  },
];

export default function BullionPage() {
  return (
    <>
      <div>
        <Hero
          title="Timeless Wealth with Gold and Silver Bullion Coins"
          description="Discover premium gold and silver bullion coins designed for lasting value and secure investment. Each coin is minted for purity, authenticity, and trust."
          imageSrc={banner}
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        />
      </div>

      <section className="p-4 xxs:p-2 xxs:py-4 sm:p-8 md:p-12 lg:p-16 xl:p-10 2xl:p-20">
        <h3 className="my-6 mb-2 md:mb-7 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl md:mx-0 font-black uppercase text-center">
          Buy & <GradientText text="  Sell Bullion" />
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
              Redefining Excellence in Customized Gold Collectibles
            </h1>
            <p className="text-sm lg:text-lg sm:text-sm md:text-2xl 2xl:text-3xl mb-8">
              Experience luxury through meticulously crafted gold coins that blend timeless artistry with lasting value. Discover the power of personalization in every piece.
            </p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          className="px-6 py-16 lg:mt-16 md:py-24 text-center max-w-5xl  2xl:max-w-7xl mx-auto"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold  mb-12 uppercase">
            Why Choose Empire Bullion
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
                Empire Bullion is a prestigious UK-based company with a legacy deeply
                intertwined with the cultural and economic significance of precious
                metals. Our expertise spans generations, offering a refined
                collection of customized gold collectibles crafted with precision
                and passion. Celebrating both tradition and innovation, each piece
                is a unique work of art—an investment in craftsmanship and enduring
                value.
              </p>
            </div>
          </div>
        </section>
      </main>
          <section className="p-4 xxs:p-2 xxs:py-4 sm:p-8 md:p-12 lg:p-8 xl:p-4 2xl:p-10 bg-baseblack">
        <h3 className="my-6 mb-2 md:mb-7 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl md:mx-0 font-black uppercase text-center">
        Discover <GradientText text=" Precious Coins" />
        
        </h3>
          <div className="w-full text-center">
              <p className="lg:text-lg leading-relaxed pb-8 2xl:text-xl ">
               Uncover the timeless allure of precious coins, where beauty, history, and value come together. Our curated selection features gold, silver, and certified coins from renowned mints around the world. Whether you're a passionate collector or a first-time buyer, each coin offers a story worth holding onto—and a legacy worth investing in.
              </p>
              </div>
        </section>
      <CoinSlide />
      <VisitUs />
    </>
  );
}
