import React from "react";
import Hero from "@/components/hero";
import banner from "@/assets/images/what-we-buy/coins/hero-coins.webp"
import featureImg from "@/assets/images/what-we-buy/coins/feature.webp";
import featureImg1 from "@/assets/images/what-we-buy/coins/feature-1.webp";
import coin2 from "@/assets/images/what-we-buy/coins/coin2.webp";
import coin1 from "@/assets/images/what-we-buy/coins/coin1.webp";
import {MarqueeText,
  CustomImage,WhyInvestInCoins,
  VisitUs,AlternatingFeatureBlock,
  AnimatedSection,GradientText} from "@/components/dynamiComponents";

export default function Coins()
{
            const animatedFeatures = {
            title: "Unmatched Quality in Every Piece",
            description: [
            "Our commitment to excellence ensures that every item is meticulously crafted with precision and passion. Each piece tells a story of timeless beauty and lasting value.",
            "Experience the difference that expert craftsmanship makes in gold, silver, and platinum jewelry.Invest in jewelry that reflects your legacy and personal style.",
            "Style it up or dress it down—our pieces are made to move with you.",
            ],
            img: coin2,
            altAttr: "Jewelry Crafting Process",
            titleAttr: "Expert Crafting Detail",
            direction: "RTF",
            imgClassName: `
            relative w-[100%] max-w-[800px] mx-auto`,
            };

            const categoryData = {
              alternatingFeature: {
                title: "Our Commitment to Quality & Trust",
                feature: [
                  {
                    title: "Trusted Experts in Precious Metals",
                    description:
                      "With years of industry experience, our team provides accurate appraisals and honest assessments for your coins and jewelry.",
                    direction: "LTF",
                    imgSrc: featureImg1,
                    titleAttr: "Experienced Appraisal",
                    altAttr: "Appraisal Expert Image",
                  },
                  {
                    title: "Transparent Transactions, Exceptional Value",
                    description:
                      "We ensure every transaction is straightforward, secure, and offers the best market value for your gold, silver, or collectible coins.",
                    direction: "RTF",
                    imgSrc: featureImg,
                    titleAttr: "Honest Deals Image",
                    altAttr: "Customer Transaction",
                  },
                ],
              },
            };

    return(
        <>
        <div>
        <Hero
          title="Discover Value in Every Coin"
          description="Whether you're a seasoned collector or a first-time investor, explore our diverse range of coins—from rare finds to gold and silver bullion."
          imageSrc={banner}
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        />
      </div>

      <div className="container max-w-7xl px-4 text-center py-8 sm:py-8 md:py-12 lg:py-12 2xl:py-16 mt-6">
        <p className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold uppercase leading-tight">
          <GradientText text=" Precious Metal Investments" />
        </p>
        <h2 className="text-xl md:text-2xl py-6 sm:py-4 md:py-6 lg:py-10">
          Secure your future with our premium selection of authentic gold and silver coins, perfect for collectors and investors alike.
        </h2>
      <AnimatedSection
        {...animatedFeatures}
        className="!py-0 md:!pb-5"
      >
      </AnimatedSection>
      </div>
            <WhyInvestInCoins/>
            <div className="py-4 md:py-6 xl:py-8 2xl:py-10 mt-10 uppercase overflow-hidden relative">
                <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap text-2xl md:text-3xl font-bold ">
                    <MarqueeText
                    text={[
                        "✦ Rare coins, timeless value — collect history today.",
                        "✦ Every collectible has a story. Start yours with us.",
                        "✦ Discover hidden treasures in our coins.",
                    ]}
                    speed={30}
                    isAbsolute={false}
                    />
                </div>
            </div>
        <section className="container max-w-[7xl] text-center p-10 p-10 md:p-14 xl:p-12 2xl:p-16">
            <p className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold uppercase leading-tight">
              <GradientText text="Rare Collectible Coins" />
            </p>

            <h2 className="text-xl md:text-2xl py-6 sm:py-4 md:py-6 lg:py-10">
              Invest in top-grade gold and silver bullion — trusted by collectors and valued for their lasting worth and purity.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start text-left">
              <div>
                <CustomImage
                  srcAttr={coin1}
                  titleAttr=""
                  altAttr="Gold collectible coins"
                  className="w-full h-auto rounded-lg sm:rounded-xl object-cover"
                />
                <p className="mt-4 text-[14px] md:text-[17px] 2xl:text-[20px] leading-relaxed pt-6">
                  Our experts carefully assess your pocket watch based on its condition, rarity, and craftsmanship to offer you the best possible value. Whether it's a classic heirloom or a rare collector’s item, we ensure a transparent, fair process. Trust us to help you unlock the true worth of your timeless treasure.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <CustomImage
                  srcAttr={coin2}
                  titleAttr=""
                  altAttr="Silver collectible coins"
                  className="w-full max-w-[500px] h-auto rounded-lg sm:rounded-x object-cover"
                />
              </div>
            </div>
          </section>

            {categoryData.alternatingFeature ? (
              <section className="container p-10 md:p-14 xl:p-12 2xl:p-16">
                <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase mb-6 md:mb-16 2xl:mb-24 text-center text-basewhite font-bold">
                  {categoryData.alternatingFeature.title || "Why Choose Us?"}
                </h3>
                <div className="space-y-8 lg:space-y-24">
                  {categoryData.alternatingFeature.feature.map((feature, i) => (
                    <AlternatingFeatureBlock key={i} {...feature} />
                  ))}
                </div>
              </section>
            ) : null}

            <VisitUs/>
        </>
    )
}