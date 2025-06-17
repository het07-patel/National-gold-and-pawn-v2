import React from "react";
import Hero from "@/components/hero"
import banner from "@/assets/images/hero-diamondjewelry.webp";
import slide1 from "@/assets/images/what-we-buy/diamond-jewelry/slide-1.webp";
import slide2 from "@/assets/images/what-we-buy/diamond-jewelry/slide-2.webp";
import slide3 from "@/assets/images/what-we-buy/diamond-jewelry/slide-3.webp";
import slide4 from "@/assets/images/what-we-buy/diamond-jewelry/slide-4.webp";
import slide5 from "@/assets/images/what-we-buy/diamond-jewelry/slide-5.webp";
import slide6 from "@/assets/images/what-we-buy/diamond-jewelry/slide-6.webp";
import featureImg1 from "@/assets/images/what-we-buy/diamond-jewelry/feature-1.webp";
import {JewelryCarousel,
  JewelryCategoryGallery,VisitUs,
  HighlightSection,CategoryFeatureSection} from "@/components/dynamiComponents";
import FullScreenVideo from "@/components/FullScreenVideo";

export default function DiamondAndJewelry()
{
    const jewelryCarousel = {
    title: "Value Beyond Sparkle",
    swiperItems: [
      {
        title: "Rings",
        imgSrc: slide1,
        altAttr: "Rings",
        titleAttr: "Rings",
      },
      {
        title: "Necklaces",
        imgSrc: slide2,
        altAttr: "Necklaces",
        titleAttr: "Necklaces",
      },
      {
        title: "Bracelets",
        imgSrc: slide3,
        altAttr: "Bracelets",
        titleAttr: "Bracelets",
      },
      {
        title: "Earrings",
        imgSrc: slide4,
        altAttr: "Earrings",
        titleAttr: "Earrings",
      },
      {
        title: "Watches",
        imgSrc: slide5,
        altAttr: "Watches",
        titleAttr: "Watches",
      },
      {
        title: "Custom & Vintage",
        imgSrc: slide6,
        altAttr: "Custom & Vintage",
        titleAttr: "Custom & Vintage",
      },
    ],
  };
  const categoryFeatures = [
    {
      title: "Jewelry That Still Shines Bright",
      description: "Your jewelry holds more than sparkle—it holds stories, value, and timeless beauty. Whether it's gold, silver, diamond, or gemstone, we’re here to help you turn it into something new. From cherished keepsakes to pieces you no longer wear, we offer honest evaluations and fair cash offers, right here in a place you can trust.",
      categoryImage: featureImg1,
      titleAttr: "Elegant Craftsmanship Image",
      altAttr: "Elegant Craftsmanship",
    },
  ];

  const highlightSection = { 
          titleAttr: "",
          altAttr: "",
          title: "Explore Ring Styles That Speak for You",
          description: "From iconic classics to personalized expressions, find rings that match every moment, mood, and milestone.",
          points: [
            {
              title: "Iconic Classics",
              description: "Think solitaires, halos, and eternity bands—timeless choices that never go out of style.",
            },
            {
              title: "Milestone Moments",
              description: "Celebrate love, commitment, or anniversaries with rings designed to mark life’s biggest memories.",
            },
            {
              title: "Modern Minimalism",
              description: "Clean lines, bold shapes, and everyday-friendly designs that mix elegance with comfort.",
            },
            {
              title: "Crafted to Last",
              description: "Each ring is made with premium materials and detailed workmanship for lasting beauty and strength.",
            },
            {
              title: "Made Just for You",
              description: "Create your own story—customize every detail from diamond cut to engraving, making your ring truly one of a kind.",
            },
          ],
        };


    return (
        <>
        <div>
            <Hero
                title="Sell Diamond Jewelry with Confidence"
                description="Get fair value for your diamond rings, earrings, necklaces, and more. We buy all styles and settings-modern or vintage-with expert evaluations and instant offers."
                imageSrc={banner}
                imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
                imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry" />
        </div>
        <div>
                <JewelryCarousel
                    title={jewelryCarousel.title}
                    swiperItems={jewelryCarousel.swiperItems} />
        </div>

        {categoryFeatures.map((feature, index) => (
        <CategoryFeatureSection
          key={index}
          sectionHeading={index === 0 ? "Trusted. Transparent. Local." : ""} 
          title={feature.title}
          description={feature.description}
          categoryImage={feature.categoryImage}
          titleAttr={feature.titleAttr}
          altAttr={feature.altAttr}
        />
      ))}

        <JewelryCategoryGallery />

        <FullScreenVideo
          videoSrc="/videos/diamond-jewelry.mp4"
          titleAttr="Diamond and Jewelry Video"
        />

        <HighlightSection
          title={highlightSection.title}
          description={highlightSection.description}
          points={highlightSection.points}
          titleAttr={highlightSection.titleAttr}
          altAttr={highlightSection.altAttr}
        />

        <VisitUs/>
            </>
    )
}