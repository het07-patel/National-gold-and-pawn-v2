import React from "react";
import Hero from "@/components/hero";
import banner from "@/assets/images/what-we-buy/coins/hero-coins.webp"
import featureImg from "@/assets/images/what-we-buy/coins/feature.webp";
import featureImg1 from "@/assets/images/what-we-buy/coins/feature-1.webp";
import coin2 from "@/assets/images/what-we-buy/coins/coin2.webp";
import coin1 from "@/assets/images/what-we-buy/coins/coin1.webp";
import coin3 from "@/assets/images/what-we-buy/coins/coin3.webp";
import {MarqueeText,
  CustomImage,WhyInvestInCoins,
  VisitUs,AlternatingFeatureBlock,
  AnimatedSection,GradientText} from "@/components/dynamiComponents";

export default function Coins()
{
            const animatedFeatures = {
            title: "The Value Behind Every Coin",
            description: [
            "Each coin has a story—whether it’s historical, collectible, or crafted from precious metals. We recognize what makes your pieces special.",
            "From old silver dollars to rare international coins, we evaluate based on condition, rarity, and demand. Bring in your collection and let us help uncover its true market value.",
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
                title: "We Know Coin Worth",
                feature: [
                  {
                    title: "Bullion and Precious Metal Coins",
                    description:
                      "We buy gold, silver, and platinum coins based on purity and weight. Get top value for your investment-grade bullion.",
                    direction: "LTF",
                    imgSrc: featureImg1,
                    titleAttr: "Bullion and Precious Metal Coins",
                    altAttr: "Bullion and Precious Metal Coins",
                  },
                  {
                    title: "Rare and Collectible Coins",
                    description:
                      "From antique U.S. coins to international rarities, we assess historical significance and collector demand to ensure a fair and informed offer.",
                    direction: "RTF",
                    imgSrc: featureImg,
                    titleAttr: "Rare and Collectible Coins",
                    altAttr: "Rare and Collectible Coins",
                  },
                ],
              },
            };

    return(
        <>
        <div>
        <Hero
          title="Sell Rare Coins with Confidence"
          description="From collectible coins to precious metal currency, we offer expert evaluations and fair deals. Whether you're selling a single piece or a full collection, we’re here to help."
          imageSrc={banner}
          imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
          imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        />
      </div>

      <div className="container max-w-7xl px-4 text-center py-8 sm:py-8 md:py-12 lg:py-12 2xl:py-16 mt-6">
        <p className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold uppercase leading-tight">
          Your Coins,<GradientText text=" Our Expertise" />
        </p>
        <h2 className="text-xl md:text-2xl py-6 sm:py-4 md:py-6 lg:py-10">
          We bring years of experience in evaluating coins—rare, collectible, or precious metal—offering honest guidance, fair pricing, and fast payouts you can trust.
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
              Coins That <GradientText text="Hold Value" />
            </p>

            <h2 className="text-xl md:text-2xl py-6 sm:py-4 md:py-6 lg:py-10">
              From silver to rare collectibles, we recognize and pay for coins with lasting market and historical worth.
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
                 Whether it's gold, silver, or a rare collector’s piece, we assess each coin with precision and care. Our expert team provides transparent evaluations and pays competitive rates based on real-time market value and historical significance.
                 </p>
              </div>

              <div className="flex justify-center items-center">
                <CustomImage
                  srcAttr={coin3}
                  titleAttr=""
                  altAttr="Silver collectible coins"
                  className="w-full max-w-[500px] h-auto rounded-lg sm:rounded-x object-cover"
                />
              </div>
            </div>
          </section>

            {categoryData.alternatingFeature ? (
              <section className="container p-10 md:p-14 xl:p-12 2xl:p-16">
                <h3 className="text-center text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-extrabold uppercase leading-tight text-white lg:py-12">
                  {categoryData.alternatingFeature.title}
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