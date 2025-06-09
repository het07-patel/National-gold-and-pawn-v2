import React from "react";
import { CustomImage } from "./dynamiComponents";

export default function CategoryFeatureSection({
  sectionHeading = "",
  title = "",
  description = "",
  categoryImage,
  titleAttr = "",
  altAttr = "",

}) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-16">
      {sectionHeading && (
        <h2 className="font-semibold text-center text-4xl font-semibold leading-tight text-white lg:py-12">
          {sectionHeading}
        </h2>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center leading-relaxed py-12 gap-10 lg:gap-14">
        <div>
          <h3 className="font-semibold leading-tight text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl text-basewhite ">
            {title}
          </h3>
          <p className="mt-4 text-[14px] md:text-[17px] 2xl:text-[20px]">
            {description}
          </p>
        </div>
        <div>
          <CustomImage
            srcAttr={categoryImage}
            titleAttr={titleAttr}
            altAttr={altAttr}
            className="max-w-[500px] h-auto lg:shadow-[38px_-40px_0px_-11px_rgba(30,30,30,0.5)] 2xl:shadow-[38px_-44px_0px_-1px_rgba(30,30,30,0.5)] rounded-lg sm:rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
