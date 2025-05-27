import GradientText from "@/components/gradient-text";
import Hero from "@/components/hero";
import VisitUs from "@/components/visitus";
import banner from "@/assets/images/about/banner.webp";
import cashExpress from "@/assets/images/about/cash-express.webp";
import familyFriendly from "@/assets/images/about/family-friendly.webp";
import mustardSeed from "@/assets/images/about/mustard-seed-ranch.webp";
import AnimatedSection from "@/components/animated-section";
import OurValues from "@/components/our-value";

const META_TITLE = "Trusted Pawn Shop with Expert Service";
const META_DESCRIPTION =
  "Learn about our commitment to trust, transparency, and exceptional service. Discover why we’re the preferred choice for buying, selling, and pawning valuables.";
const META_KEYWORDS =
  "gold for Cash Utica, Cash for Gold Utica, Cash for Diamonds Utica, Diamond Buyers Utica, Watch Buyer Utica, Pawn Shop Utica, Coin Buyers Utica, Customized Jewelry Utica, cash for Diamonds Utica, pawn shop Utica, Wholesale Jewelry Utica, best pawn store Utica, gold buyers Utica, silver buyers Utica, coins buyers Utica, buy coins Utica, buy diamond jewelry Utica, sell jewelry Utica, sell bullions Utica, buy bullions Utica, sell antiques Utica, buy antiques Utica, buy electronics Utica, sell electronics Utica, sell games Utica, buy musical equipment Utica, sell musical equipment Utica ,buy sports memorabilia Utica, sell sports memorabilia Utica, sell coin Utica, Estate buyers Utica, Scrap Jewelry buyer Utica, Broken Jewelry Buyer Utica, Auctioneers Utica, Used car buyers Utica, Buy Here, Pay Here Utica";
const CANONICAL_URL = "https://nationalgoldandpawn.com/about";
const OPEN_GRAPH_IMAGE = "/opengraph-image.png";

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "National Gold & Pawn | Pawn Shop",
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: "National Gold & Pawn",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
};

const communityContent = [
  {
    img: cashExpress,
    titleAttr: "National Gold and Pawn | Gold for Cash",
    altAttr: "National Gold and Pawn | Gold for Cash",
    title: "Why National Gold and Pawn",
    description: [
      "Choose us for reliable and professional service you can trust. With years of expertise in buying, selling, and pawning, we offer fair appraisals, competitive prices, and a seamless experience. Our commitment to integrity and customer satisfaction sets us apart, ensuring you always feel confident in every transaction. Visit us today!",
    ],
  },
  {
    img: familyFriendly,
    titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    title: "A Family-Friendly Environment",
    description: [
      "We provide a warm, family-friendly environment where everyone feels welcome. Our team ensures honest advice, exceptional service, and a positive experience for every visit.",
    ],
    direction: "RTF",
    className: "!flex-col  lg:!flex-row-reverse md:!px-5",
  },
  {
    img: mustardSeed,
    titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    title: "Customer-Focused Programs",
    description: [
      "Our customer-focused programs are designed to meet your needs with personalized services, loyalty rewards, and flexible solutions. We prioritize your satisfaction at every step.",
    ],
  },
];
export default function About() {
  return (
    <div>
      <Hero
        title="Excellence in Jewelry, Watches, and Pawn Services"
        description="Discover trusted pawn services for jewelry, watches, and more. Offering fair appraisals, fast cash, and a wide selection of quality items – visit us today!"
        imageSrc={banner}
        imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
      />

      {/* Community */}
      <section className="p-4 xxs:p-2 xxs:py-4 sm:p-8 md:p-12 lg:p-16  xl:p-10 2xl:p-20">
        <h3 className="my-6 mb-2 md:mb-7 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl  md:mx-0 font-black uppercase text-center">
          NATIONAL <GradientText text="GOLD AND PAWN" />
        </h3>
        {communityContent.length &&
          communityContent.map((community, i) => {
            return (
              <AnimatedSection
                className={"md:!py-0 md:!px-5"}
                key={i}
                {...community}
              />
            );
          })}
      </section>

      {/* Our Value */}
      <OurValues />
      {/* Pawn and Shop With Us */}
      <VisitUs />
    </div>
  );
}
