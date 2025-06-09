"use client";
import dynamic from "next/dynamic";

export const AlternatingFeatureBlock = dynamic(() => import("./alternatingFeatureBlock"), { ssr: false });

export const AnimatedSection = dynamic(() => import("./animated-section"), { ssr: false });

export const Button = dynamic(() => import("./button"), { ssr: false });

export const DropDown = dynamic(() => import("./dropdown"), { ssr: false });

export const CustomImage = dynamic(() => import("./customImage"), {
  ssr: false,
});

export const JewelryCarousel = dynamic(()=> import("./jewelryCarousel"),{ssr:false});

export const JewelryCategoryGallery = dynamic(()=> import("./jewelryCategoryGallery"),{ssr:false});

export const VisitUs = dynamic(() => import("./visitus"), { ssr: false });

export const CraftsmanshipSection = dynamic(() => import("./craftsmanshipSection"), { ssr: false });

export const MarqueeText = dynamic(() => import("./MarqueeText"), { ssr: false });

export const NewInCollectionSection = dynamic(() => import("./newCollection"), { ssr: false });

export const WhyInvestInCoins = dynamic(() => import("./whyInvestInCoinsSection"), { ssr: false });

export const MetalCategoriesSection = dynamic(() => import("./metalCategories"), { ssr: false });

export const GradientText = dynamic(() => import("./gradient-text"), { ssr: false })

export const HorizontalScrollCarousel = dynamic(() => import("./horizontalScrollCarousel"),{ ssr: false });

export const HighlightSection = dynamic(() => import("./highlightSection"), { ssr: false })

export const CategoryFeatureSection = dynamic(() => import("./categoryFeatureSection"), { ssr: false })

export const WatchesSwiper = dynamic(
  () => import("./WatchesSwiper"),
  {
    ssr: false,
  }
);