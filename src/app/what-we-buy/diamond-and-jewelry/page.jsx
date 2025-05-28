import react from "react";
import Hero from "@/components/hero"
import banner from "@/assets/images/hero-diamondjewelry.webp";
import {JewelryCarousel} from "@/components/dynamiComponents";
import { JewelryCategoryGallery } from "@/components/dynamiComponents";
import {WhyTrustUs} from "@/components/dynamiComponents"
import {VisitUs} from "@/components/dynamiComponents"
import slide1 from "@/assets/images/what-we-buy/diamond-jewelry/slide-1.webp";
import slide2 from "@/assets/images/what-we-buy/diamond-jewelry/slide-2.webp";
import slide3 from "@/assets/images/what-we-buy/diamond-jewelry/slide-3.webp";
import slide4 from "@/assets/images/what-we-buy/diamond-jewelry/slide-4.webp";
import slide5 from "@/assets/images/what-we-buy/diamond-jewelry/slide-5.webp";

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
    return (
        <>
        <div>
            <Hero
                title="Excellence in Jewelry, Watches, and Pawn Services"
                description="Discover trusted pawn services for jewelry, watches, and more. Offering fair appraisals, fast cash, and a wide selection of quality items – visit us today!"
                imageSrc={banner}
                imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
                imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry" />
        </div>
        <div>
                <JewelryCarousel
                    title={jewelryCarousel.title}
                    swiperItems={jewelryCarousel.swiperItems} />
        </div>
        <JewelryCategoryGallery />
        <WhyTrustUs/>
        <VisitUs/>

            </>
    )
}