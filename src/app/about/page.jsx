import GradientText from "@/components/gradient-text";
import Hero from "@/components/hero";
import VisitUs from "@/components/visitus";
import banner from "@/assets/images/about/banner.webp";
import cashExpress from "@/assets/images/about/cash-express.webp";
import familyFriendly from "@/assets/images/about/family-friendly.webp";
import mustardSeed from "@/assets/images/about/mustard-seed-ranch.webp";
import AnimatedSection from "@/components/animated-section";
import OurValues from "@/components/our-value";

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
    className: "!flex-col lg:!flex-row-reverse md:!px-5",
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
