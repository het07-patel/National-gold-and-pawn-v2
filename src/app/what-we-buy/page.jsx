import React from "react";
import Hero from "@/components/hero";
import VisitUs from "@/components/visitus";
import GradientText from "@/components/gradient-text";
import AccordionWithImage from "@/components/img-accordion";
import highestAppraised from "@/assets/images/what-we-buy/highest-appraised.webp";

import buyGoldSilver from "@/assets/images/what-we-buy/gold-silver-rings.webp";
import pawn from "@/assets/images/what-we-buy/pawn.webp";
import loans from "@/assets/images/what-we-buy/loans.webp";
import goldSilverCoin from "@/assets/images/what-we-buy/coin-gold-silver.webp";
import electronics from "@/assets/images/what-we-buy/electronics.webp";
import watches from "@/assets/images/what-we-buy/watches.webp";
import pawnTool from "@/assets/images/what-we-buy/pawn-tool.webp";
import antiques from "@/assets/images/what-we-buy/antiques.webp";
import diamondJewelry from "@/assets/images/what-we-buy/diamond-jewelry.webp";
import bullions from "@/assets/images/what-we-buy/bullions.webp";
import silverJewelry from "@/assets/images/what-we-buy/silver-jewelry.webp";
import loanBrokers from "@/assets/images/what-we-buy/loan-brokers.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import AnimatedSection from "@/components/animated-section";
import banner from "@/assets/images/what-we-buy/banner.webp";
import SwiperSection from "@/components/swiper";
const META_TITLE = "What We Buy – Jewelry, Diamond, Tools, and More";
const META_DESCRIPTION =
  "Explore the items we buy, from jewelry and electronics to tools and collectibles. Get top value for your valuables with our trusted appraisal services.";
const META_KEYWORDS =
  "gold for Cash Utica, Cash for Gold Utica, Cash for Diamonds Utica, Diamond Buyers Utica, Watch Buyer Utica, Pawn Shop Utica, Coin Buyers Utica, Customized Jewelry Utica, cash for Diamonds Utica, pawn shop Utica, Wholesale Jewelry Utica, best pawn store Utica, gold buyers Utica, silver buyers Utica, coins buyers Utica, buy coins Utica, buy diamond jewelry Utica, sell jewelry Utica, sell bullions Utica, buy bullions Utica, sell antiques Utica, buy antiques Utica, buy electronics Utica, sell electronics Utica, sell games Utica, buy musical equipment Utica, sell musical equipment Utica ,buy sports memorabilia Utica, sell sports memorabilia Utica, sell coin Utica, Estate buyers Utica, Scrap Jewelry buyer Utica, Broken Jewelry Buyer Utica, Auctioneers Utica, Used car buyers Utica, Buy Here, Pay Here Utica";
const CANONICAL_URL = "https://nationalgoldandpawn.com/what-we-buy";
const OPEN_GRAPH_IMAGE = "/opengraph-image.png";

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "National Gold & Pawn | Pawn Shop",
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: "National Gold & Pawn - What We Buy",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
};

const slideData = [
  {
    image: buyGoldSilver,
    text: "Buying Gold and Silver",
    titleAttr: "National Gold and Pawn | Gold Ring",
    altAttr: "National Gold and Pawn | Gold Ring",
  },
  {
    image: pawn,
    text: "Pawn",
    titleAttr: "National Gold and Pawn | Pawn",
    altAttr: "National Gold and Pawn | Pawn",
  },
  {
    image: loans,
    text: "Loans",
    titleAttr: "National Gold and Pawn | Loans",
    altAttr: "National Gold and Pawn | Loans",
  },
  {
    image: goldSilverCoin,
    text: "Coin, Gold and Silver",
    titleAttr: "National Gold and Pawn | Coins | Gold Silver",
    altAttr: "National Gold and Pawn | Coins | Gold Silver",
  },
  {
    image: electronics,
    text: "Electronics",
    titleAttr: "National Gold and Pawn | Electronics",
    altAttr: "National Gold and Pawn | Electronics",
  },
  {
    image: watches,
    text: "Watches",
    titleAttr: "National Gold and Pawn | Watch",
    altAttr: "National Gold and Pawn | Watch",
  },
  {
    image: pawnTool,
    text: "Pawn Tools",
    titleAttr: "National Gold and Pawn | Tools",
    altAttr: "National Gold and Pawn | Tools",
  },
  {
    image: antiques,
    text: "Antiques",
    titleAttr: "National Gold and Pawn | Antiques",
    altAttr: "National Gold and Pawn | Antiques",
  },
  {
    image: diamondJewelry,
    text: "Diamond and Jewelry",
    titleAttr: "National Gold and Pawn | Diamond Jewelry",
    altAttr: "National Gold and Pawn | Diamond Jewelry",
  },
  {
    image: bullions,
    text: "Bullions",
    titleAttr: "National Gold and Pawn | Bullions",
    altAttr: "National Gold and Pawn | Bullions",
  },
  {
    image: silverJewelry,
    text: "Broken gold, Silver Jewelry",
    titleAttr: "National Gold and Pawn | Silver Jewelry",
    altAttr: "National Gold and Pawn | Silver Jewelry",
  },
  {
    image: loanBrokers,
    text: "Collateral Loan Brokers",
    titleAttr: "National Gold and Pawn | Loans",
    altAttr: "National Gold and Pawn | Loans",
  },
];

const valueProposition = {
  img: highestAppraised,
  titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  title: "We buy your valuables for the highest appraised value!",
  description: [
    "We offer top dollar for your valuables, providing the highest appraised value in the market. Our team of experienced appraisers ensures you get a fair and accurate evaluation every time.",
    "Whether it’s gold, silver, diamonds, or luxury items, we make the selling process simple and transparent. Visit us today to turn your valuables into immediate cash!",
  ],
  // imgClassName: "md:!py-10 2xl:!py-0",
  // className: "!p-5 md:!pt-10",
  titleClassName: "text-lightgold",
};

const WhatWeBuy = () => {
  return (
    <div>
      <Hero
        title="Explore What We Buy: Jewelry, Electronics, and More!"
        description="Discover the wide range of items we buy, from jewelry and electronics to tools and collectibles. Get the best value for your valuables today!"
        imageSrc={banner}
        imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
      />

      {/* Value Proposition */}
      <AnimatedSection {...valueProposition} />

      <AccordionWithImage />

      <section className="p-4 xxs:p-2 sm:p-8 md:p-12 lg:p-16 xl:p-10 2xl:p-20 ">
        <h3 className="my-6 md:mb-9 text-center text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-black uppercase">
          <GradientText text="What We Buy" /> at National Gold and Pawn
        </h3>
        <p className="text-center text-sm sm:text-lg text-white/90 lg:max-w-[50%] mx-auto">
          Don&apos;t see your item listed? Bring it in! Our team is always open
          to evaluating unique or valuable items.
        </p>

        {/* Swiper */}
        <SwiperSection slides={slideData} />
      </section>

      {/* Pawn and Shop With Us */}
      <VisitUs />
    </div>
  );
};

export default WhatWeBuy;
