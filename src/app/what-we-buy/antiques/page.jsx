import Hero from "@/components/hero";
import banner from "@/assets/images/what-we-buy/antiques/banner.webp";
import featureImg from "@/assets/images/what-we-buy/antiques/feature.webp";
import featureImg1 from "@/assets/images/what-we-buy/antiques/feature1.webp";
import featureImg2 from "@/assets/images/what-we-buy/antiques/feature2.webp";
import featureImg3 from "@/assets/images/what-we-buy/antiques/feature3.webp";
import inspectionImage from "@/assets/images/what-we-buy/antiques/inspection.webp";
import gemologistImage from "@/assets/images/what-we-buy/antiques/gemologist.webp";
import AntiqueCategories from "@/components/AntiquesCategory";
import GradientText from "@/components/gradient-text";
import { AlternatingFeatureBlock, VisitUs } from "@/components/dynamiComponents";
import AuthenticationRestoration from "@/components/Authentication";

export default function Antiques()
{

    const categoryData = {
                  alternatingFeature: {
                    title: "Antiques Worth Remembering",
                    feature: [
                      {
                        title: "Timeless Pieces, Lasting Worth",
                        description:
                          "From antique clocks and pocket watches to decorative vintage accents, we appreciate the craftsmanship of pieces that stand the test of time. These items often carry sentimental value and historical significance—making them sought-after collectibles. We evaluate each item with care and offer competitive prices based on rarity, age, and market demand.",
                        direction: "LTF",
                        imgSrc: featureImg1,
                        titleAttr: "Experienced Appraisal",
                        altAttr: "Appraisal Expert Image",
                      },
                      {
                        title: "Stories Etched in Every Find",
                        description:
                          "Old letters, vintage postcards, and historic books are more than paper—they’re pieces of the past. We seek well-preserved documents that reflect culture, history, or personal stories. Whether handwritten or printed, these items attract collectors and historians alike, and we’re ready to offer fair prices for pieces that speak to another time.",
                        direction: "RTF",
                        imgSrc: featureImg,
                        titleAttr: "Honest Deals Image",
                        altAttr: "Customer Transaction",
                      },
                      {
                        title: "Art That Speaks Through Time",
                        description:
                          "Framed prints, oil paintings, sculptures, and other collectible art can hold incredible value. We look for pieces that reflect notable periods, artists, or styles. Whether it’s an estate piece or a forgotten gem, we assess condition, signature, and historical relevance to offer you a respectful and honest evaluation.",
                        direction: "LTF",
                        imgSrc: featureImg2,
                        titleAttr: "Experienced Appraisal",
                        altAttr: "Appraisal Expert Image",
                      },
                      {
                        title: "Nostalgia in Every Detail",
                        description:
                          "Vintage toys, games, action figures, and dolls often bring back fond memories—and collector interest. We’re always looking for well-kept or rare childhood treasures from past decades. Whether it’s tin toys, board games, or 80s figurines, we evaluate their uniqueness, condition, and brand to offer you a price rooted in real demand.",
                        direction: "RTF",
                        imgSrc: featureImg3,
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
                title="Discover Value in Antiques & Collectibles"
                description="From vintage heirlooms to rare collectibles, we buy unique items with history and character. Get expert evaluations, fair offers, and immediate cash for the pieces you’re ready to let go."
                imageSrc={banner}
                imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
                imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry" />
        </div>

        <section className="py-10 sm:py-8 md:py-12 lg:py-14 xl:py-14 2xl:py-16 mt-6 text-center font-bold leading-tight">
        <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold uppercase leading-tight mb-12">
          Treasures With <GradientText text="Timeless Value"/>
        </h1>
        <AntiqueCategories />
      </section>

      {categoryData.alternatingFeature ? (
                    <section className="container p-10 md:p-14 xl:p-14 2xl:p-16">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl uppercase mb-6 md:mb-12 2xl:mb-20 text-center text-basewhite font-bold">
                        {categoryData.alternatingFeature.title}
                      </h3>
                      <div className="space-y-8 lg:space-y-24">
                        {categoryData.alternatingFeature.feature.map((feature, i) => (
                          <AlternatingFeatureBlock key={i} {...feature} />
                        ))}
                      </div>
                    </section>
                  ) : null}

            <AuthenticationRestoration 
                gemologistImage={gemologistImage}
                inspectionImage={inspectionImage}
            />

            <VisitUs/>

        </>
    )
}