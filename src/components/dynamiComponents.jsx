"use client";
import dynamic from "next/dynamic";

export const DropDown = dynamic(() => import("./dropdown"), { ssr: false });
export const CustomImage = dynamic(() => import("./customImage"), {
  ssr: false,
});
export const JewelryCarousel = dynamic(()=> import("./jewelryCarousel"),{ssr:false});

export const JewelryCategoryGallery = dynamic(()=> import("./jewelryCategoryGallery"),{ssr:false});

export const WhyTrustUs = dynamic(() => import("./whyTrustUs"), { ssr: false });

export const VisitUs = dynamic(() => import("./visitus"), { ssr: false });