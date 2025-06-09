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
        title: "Unmatched Quality in Every Piece",
        description: [
        "Our commitment to excellence ensures that every item is meticulously crafted with precision and passion. Each piece tells a story of timeless beauty and lasting value.Experience the difference that expert craftsmanship makes in gold, silver, and platinum jewelry.Invest in jewelry that reflects your legacy and personal style.",
        "We take pride in offering meticulously crafted items that combine elegance with durability, whether you're purchasing, pawning, or selling. Each item in our collection is inspected for authenticity, design integrity, and material quality, ensuring that you receive not only a stunning piece of jewelry but also a sound investment. ",
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
          title="Trusted Experts in Gold, Silver & Platinum"
          description="Discover unbeatable value with our premium collection of gold, silver, and platinum jewelry."
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
              Your Trusted Source for <GradientText text="Gold, Silver & Platinum" />
          </p>
          <h2 className="text-xl md:text-2xl mt-4 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            Explore our curated collection of timeless pieces in gold, silver, and platinum.
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
