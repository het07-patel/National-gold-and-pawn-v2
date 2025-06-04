import React from "react";
import Hero from "@/components/hero"
import banner from "@/assets/images/hero-diamondjewelry.webp";
import slide1 from "@/assets/images/what-we-buy/diamond-jewelry/slide-1.webp";
import slide2 from "@/assets/images/what-we-buy/diamond-jewelry/slide-2.webp";
import slide3 from "@/assets/images/what-we-buy/diamond-jewelry/slide-3.webp";
import slide4 from "@/assets/images/what-we-buy/diamond-jewelry/slide-4.webp";
import slide5 from "@/assets/images/what-we-buy/diamond-jewelry/slide-5.webp";
import featureImg1 from "@/assets/images/what-we-buy/diamond-jewelry/feature-1.webp";
import {JewelryCarousel,
  JewelryCategoryGallery,VisitUs,
  HighlightSection,CategoryFeatureSection} from "@/components/dynamiComponents";

export default function DiamondAndJewelry()
{
    const jewelryCarousel = {
    title: "From Pawn to Prestige: Our Finest Picks",
    swiperItems: [
      {
        title: "Pendant Necklace",
        imgSrc: slide1,
        altAttr: "Pendant Necklace",
        titleAttr: "Pendant Necklace",
      },
      {
        title: "Tennis Necklace",
        imgSrc: slide2,
        altAttr: "Tennis Necklace",
        titleAttr: "Tennis Necklace",
      },
      {
        title: "Choker Necklace",
        imgSrc: slide3,
        altAttr: "Choker Necklace",
        titleAttr: "Choker Necklace",
      },
      {
        title: "Bib Necklace",
        imgSrc: slide4,
        altAttr: "Bib Necklace",
        titleAttr: "Bib Necklace",
      },
      {
        title: "Station Necklace",
        imgSrc: slide5,
        altAttr: "Station Necklace",
        titleAttr: "Station Necklace",
      },
    ],
  };
  const categoryFeatures = [
    {
      title: "Elegant Craftsmanship",
      description: "This exquisite piece of jewelry embodies elegance and timeless craftsmanship. Designed with precision, it features a harmonious blend of fine metals and sparkling gemstones that catch the light from every angle. Whether worn for a special occasion or as a daily statement, this piece adds a touch of luxury and sophistication to any look. The intricate detailing highlights the artisan’s skill, making it not just an accessory, but a work of art. Perfect for those who appreciate beauty, tradition, and modern style, this jewelry item speaks volumes about refined taste and enduring quality.",
      categoryImage: featureImg1,
      titleAttr: "Elegant Craftsmanship Image",
      altAttr: "Elegant Craftsmanship",
    },
  ];

  const highlightSection = { 
          titleAttr: "",
          altAttr: "",
          title: "Understanding Ring Styles and Craftsmanship",
          description: "Discover a variety of styles crafted with precision and care:",
          points: [
            {
              title: "Timeless Elegance",
              description: "Explore classic designs like diamond solitaires, eternity bands, and gemstone rings.",
            },
            {
              title: "Special Occasions",
              description: "Find rings for engagements, weddings, or anniversaries that capture life’s unforgettable moments.",
            },
            {
              title: "Everyday Glam",
              description: "Choose stylish rings that offer sophistication and comfort for daily wear.",
            },
            {
              title: "Craftsmanship Excellence",
              description: "Enjoy meticulously crafted rings made with high-quality materials and attention to detail.",
            },
            {
              title: "Custom Creations",
              description: "Design your own unique ring with personalized touches, from stone selection to engraving options.",
            },
          ],
        };


    return (
        <>
        <div>
            <Hero
                title="Diamonds with Meaning. Jewelry with Value."
                description="Discover trusted pawn services for jewelry, diamonds, and more. Offering fair appraisals, fast cash, and a wide selection of quality items – visit us today!"
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
          sectionHeading={index === 0 ? "Why Choose Our Jewelry?" : ""} 
          title={feature.title}
          description={feature.description}
          categoryImage={feature.categoryImage}
          titleAttr={feature.titleAttr}
          altAttr={feature.altAttr}
        />
      ))}

        <JewelryCategoryGallery />
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