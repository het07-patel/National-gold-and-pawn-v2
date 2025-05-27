"use client";
import AnimatedSection from "@/components/animated-section";
import Hero from "@/components/hero";
import VisitUs from "@/components/visitus";

import buyGoldSilver from "@/assets/images/home/buy-gold-silver.webp";
import pawn from "@/assets/images/home/pawn.webp";
import loans from "@/assets/images/home/loans.webp";
import coinGoldSilver from "@/assets/images/home/coins-gold-silver.webp";
import electronics from "@/assets/images/home/electronics.webp";
import watches from "@/assets/images/home/watches.webp";
import pawnTools from "@/assets/images/home/pawn-tools.webp";
import antiques from "@/assets/images/home/antiques.webp";
import diamondJewelry from "@/assets/images/home/diamond-jewelry.webp";
import bullions from "@/assets/images/home/bullions.webp";
import loanBrokers from "@/assets/images/home/loan-brokers.webp";
import goldSilverJewelry from "@/assets/images/home/gold-silver-jewelry.webp";

import servicesIntro from "@/assets/images/home/services-intro.webp";
import goldRing from "@/assets/images/home/gold-ring.webp";

import ServiceSection from "@/components/service-section";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

const bannerVideo = "/videos/herosection.mp4";
const services = [
  {
    img: buyGoldSilver,
    title: "Buying Gold and Silver",
    description:
      "Turn gold and silver into cash or treasures – unbeatable deals, unmatched trust, every time!",
    titleAttr: "National Gold and Pawn | Gold | Silver",
    altAttr: "National Gold and Pawn | Gold | Silver",
  },
  {
    img: pawn,
    title: "Pawn",
    description:
      "Fast cash for your valuables – pawn with confidence and get the best value today!",
    titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
    altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  },
  {
    img: loans,
    title: "Loans",
    description:
      "Quick and easy loans – get the cash you need, no hassle, no delays!",
    titleAttr: "National Gold and Pawn | Loans",
    altAttr: "National Gold and Pawn | Loans",
  },
  {
    img: coinGoldSilver,
    title: "Coins, Gold and Silver",
    description:
      "Buy or sell coins, gold, and silver – top value, expert appraisals, and trusted service!",
    titleAttr: "National Gold and Pawn | Coins | Gold Silver",
    altAttr: "National Gold and Pawn | Coins | Gold Silver",
  },
  {
    img: electronics,
    title: "Electronics",
    description:
      "Pawn or sell your electronics – fast cash, fair prices, and reliable service every time!",
    titleAttr: "National Gold and Pawn | Electronics",
    altAttr: "National Gold and Pawn | Electronics",
  },
  {
    img: watches,
    title: "Watches",
    description:
      "Buy, sell, or pawn your watches – get top value for luxury and timepieces today!",
    titleAttr: "National Gold and Pawn | Watch",
    altAttr: "National Gold and Pawn | Watch",
  },
  {
    img: pawnTools,
    title: "Power Tool",
    description:
      "Pawn or sell your power tools – fast cash for quality tools, fair and reliable offers!",
    titleAttr: "National Gold and Pawn | Tools",
    altAttr: "National Gold and Pawn | Tools",
  },
  {
    img: antiques,
    title: "Antiques",
    description:
      "Discover the true worth of your antiques – fair offers for your vintage treasures and collectibles!",
    titleAttr: "National Gold and Pawn | Antiques",
    altAttr: "National Gold and Pawn | Antiques",
  },
  {
    img: diamondJewelry,
    title: "Diamond and Jewelry",
    description:
      "Unlock the value of your diamonds and jewelry – we offer fair prices and expert evaluations!",
    titleAttr: "National Gold and Pawn | Diamond Jewelry",
    altAttr: "National Gold and Pawn | Diamond Jewelry",
  },
  {
    img: bullions,
    title: "Bullions",
    description:
      "Turn your bullions into cash – competitive offers and trusted expertise for your valuable metals!",
    titleAttr: "National Gold and Pawn | Gold Bullions | Silver Bullions",
    altAttr: "National Gold and Pawn | Gold Bullions | Silver Bullions",
  },
  {
    img: loanBrokers,
    title: "Collateral Loan Brokers",
    description:
      "Get fast collateral loans with trusted brokers – secure deals and fair rates for your assets!",
    titleAttr: "National Gold and Pawn | Loans",
    altAttr: "National Gold and Pawn | Loans",
  },
  {
    img: goldSilverJewelry,
    title: "Broken Gold, Silver, Jewelry",
    description:
      "Turn broken gold, silver, and jewelry into cash – fair value for your damaged treasures!",
    titleAttr: "National Gold and Pawn | Jewelry",
    altAttr: "National Gold and Pawn | Jewelry",
  },
];

const pawnServicesIntro = {
  img: servicesIntro,
  titleAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  altAttr: "National Gold and Pawn | Diamonds, Watches, Jewelry",
  className: "md:!pb-0",
  title: "Leading Pawn Service in Utica, New York",
  description: [
    "Discover Utica’s leading pawn service, offering fast and secure transactions for gold, diamonds, watches, and more. Our process is simple and reliable, ensuring you get the best value with ease.",
  ],
};
const productShowCase = {
  img: goldRing,
  titleAttr: "National Gold and Pawn | Gold Ring",
  altAttr: "National Gold and Pawn | Gold Ring",
  title:
    "Uncover hidden gems – visit us to explore our unique jewelry and watch collection!",
  description: [
    "Visit our store and explore an exclusive collection of fine jewelry and watches. From classic, timeless designs to bold, statement pieces, we offer something for every taste and occasion. Our curated selection features high-quality craftsmanship and unique styles, ensuring you find the perfect accessory. Stop by today and discover the perfect piece to elevate your collection!",
  ],
  direction: "RTF",
};
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Hero
        title="Your Trusted Pawn Shop for Gold, Diamonds, Watches, and More"
        description="Turn your gold, diamonds, and watches and many more into quick cash with trusted appraisals. Enjoy secure, hassle-free transactions at our pawn shop."
        buttons={[
          { label: "View Categories", url: "#service" },
          {
            label: "Discover More",
            variant: "outlined",
            className: "",
            url: "/what-we-buy",
          },
        ]}
        videoSrc={bannerVideo}
        isHomePage={true}
      />

      {/* Leading pawn services */}
      <AnimatedSection
        {...pawnServicesIntro}
        className="!py-0 md:!pb-5 3xl:!p-0"
      >
        <Button
          variant="outlined"
          id="service"
          className="mt-6 mx-auto lg:mx-0 xxs:mt-4 sm:mt-10 lg:mt-6 2xl:mt-10 text-sm md:text-base"
          onClick={() => router.push("/what-we-buy")}
        >
          Learn How it Works
        </Button>
      </AnimatedSection>

      {/* Service Section */}
      <ServiceSection services={services} />

      {/* Jewelry and Watches Showcase */}
      <AnimatedSection className={"md:!py-0"} {...productShowCase} />

      {/* Pawn and Shop With Us */}
      <VisitUs />
    </div>
  );
}
