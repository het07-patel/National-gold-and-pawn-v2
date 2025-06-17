import React from "react";
import Hero from "@/components/hero";
import banner from "@/assets/images/what-we-buy/gold-silver-platinum/hero-goldsilver.webp";
import featureImg from "@/assets/images/what-we-buy/gold-silver-platinum/feature-2.webp";
import {MetalCategoriesSection,
  MarqueeText, 
  NewInCollectionSection,
  HorizontalScrollCarousel,
  VisitUs,AnimatedSection,
  CraftsmanshipSection,GradientText } from "@/components/dynamiComponents";

export default function GoldSilverPlatinum() 
{
      const categoryFeatures = {
        title: "Get Paid What Your Metals Deserve",
        description: [
        "Every piece of gold, silver, or platinum—whether it's broken, outdated, or no longer worn—holds real value. From jewelry and silverware to coins and bullion, we assess your items based on purity, weight, and current market rates.",
        "Our process is simple, honest, and fast. You’ll receive a transparent evaluation and a competitive offer with no pressure. Walk in with your precious metals and walk out with instant cash and peace of mind.",
      ],
        img: featureImg,
        altAttr: "Jewelry Crafting Process",
        titleAttr: "Expert Crafting Detail",
        direction: "RTF",
        imgClassName: `
        relative p-4 sm:p-6 md:p-8 lg:p-12 
        w-[90%] sm:w-[80%] md:w-[65%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] 
        max-w-[600px] mx-auto rounded-lg sm:rounded-xl`,
        };


  return (
    <>
      <div>
        <Hero
          title="Trusted Buyers of Gold, Silver & Platinum"
          description="Whether it's jewelry, coins, bullion, or scrap, we pay top dollar for your gold, silver, and platinum. Get fast, fair evaluations and instant cash with service you can count on."
          imageSrc={banner}
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        />
      </div>
      <CraftsmanshipSection/>
      <div className="py-4 md:py-6 xl:py-10 2xl:py-10">
        <MarqueeText
          text = {[
            "✤ Where gold tells your story, and silver sings your style.",
            "✤ Platinum precision. Golden elegance. Timeless treasures.",
            "✤ Crafted brilliance — forged to last, designed to dazzle.",
          ]}
          speed={30}
          isAbsolute={false}
        />
      </div>
      <MetalCategoriesSection/>

      <div className="container px-4 text-center py-4 md:py-6 xl:py-10 2xl:py-10">
          <p className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold uppercase leading-tigh">
              We Buy It <GradientText text="All Here" />
          </p>
          <h2 className="text-xl md:text-2xl mt-4 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            From tangled gold chains to silver flatware and platinum coins, we purchase all types of precious metals—regardless of condition. No item is too small or too old.
          </h2>
        <div>
            <AnimatedSection
              {...categoryFeatures}
              className="!py-0 md:!pb-5"
            >
            </AnimatedSection>
        </div>
      </div>

      <NewInCollectionSection/>     
      <HorizontalScrollCarousel/>
      <VisitUs/>
    </>
  );
}
