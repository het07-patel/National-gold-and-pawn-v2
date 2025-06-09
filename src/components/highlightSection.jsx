import { CustomImage } from "./dynamiComponents";
import commonHighlightImg from "@/assets/images/what-we-buy/highlight-image.webp";

export default function HighlightSection({
  title = "",
  description = "",
  points = [],
  imgSrc,
  altAttr = "",
  titleAttr = "",
}) {
  return (
    <section className="container px-8 py-8 md:py-8 xl:py-10 2xl:py-10 text-white">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center">
        <div className="lg:w-[35%]">
          <CustomImage
            srcAttr={imgSrc || commonHighlightImg}
            altAttr={altAttr}
            titleAttr={titleAttr}
            className="object-cover w-full rounded-lg sm:rounded-xl"
          />
        </div>
        <div className="lg:w-[75%] p-8 md:p-10 lg:px-20 2xl:px-24 border-t border-[#595959] lg:border-0">
          <h3 className="text-2xl md:text-3xl md:mb-2 2xl:text-4xl lg:leading-[50px] 2xl:leading-[60px] font-bold">
            {title}
          </h3>
          {description ? (
            <p className="mt-6 md:text-md lg:text-lg lg:text-start 2xl:text-[20px]">
              {description}
            </p>
          ) : null}
          <div className="ml-3 mt-2">
            {points.map((point, i) => {
              return (
                <h3
                  className="list-item py-2 2xl:py-3 text-[16px] md:text-[17px] 2xl:text-[20px]"
                  key={i}
                >
                  <span className="font-semibold">{point.title} : </span>
                  {point.description}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
