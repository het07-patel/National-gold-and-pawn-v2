import GradientText from "@/components/gradient-text";
import Hero from "@/components/hero";
import pawnloans from "@/assets/images/pawn-process/pawnloans.webp";
import VisitUs from "@/components/visitus";
import Image from "next/image";
import banner from "@/assets/images/pawn-process/banner.webp";

const META_TITLE = "Our Pawn Process – Quick, Easy, and Transparent";
const META_DESCRIPTION =
  "Learn about our simple pawn process. Get fair appraisals, instant cash offers, and secure transactions for your valuables with no hassle or hidden fees.";
const META_KEYWORDS =
  "gold for Cash Utica, Cash for Gold Utica, Cash for Diamonds Utica, Diamond Buyers Utica, Watch Buyer Utica, Pawn Shop Utica, Coin Buyers Utica, Customized Jewelry Utica, cash for Diamonds Utica, pawn shop Utica, Wholesale Jewelry Utica, best pawn store Utica, gold buyers Utica, silver buyers Utica, coins buyers Utica, buy coins Utica, buy diamond jewelry Utica, sell jewelry Utica, sell bullions Utica, buy bullions Utica, sell antiques Utica, buy antiques Utica, buy electronics Utica, sell electronics Utica, sell games Utica, buy musical equipment Utica, sell musical equipment Utica ,buy sports memorabilia Utica, sell sports memorabilia Utica, sell coin Utica, Estate buyers Utica, Scrap Jewelry buyer Utica, Broken Jewelry Buyer Utica, Auctioneers Utica, Used car buyers Utica, Buy Here, Pay Here Utica";
const CANONICAL_URL = "https://nationalgoldandpawn.com/pawn-process";
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
        alt: "National Gold & Pawn - Pawn Process",
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

const PawnProcess = () => {
  return (
    <div>
      <Hero
        title="Our Simple and Transparent Pawn Process"
        description="Experience a quick and hassle-free pawn process. Get fair appraisals, instant offers, and cash on the spot with no hidden fees or obligations."
        imageSrc={banner}
        imgTitleAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
        imgAltAttr="National Gold and Pawn | Diamonds, Watches, Jewelry"
      />

      <section className="p-4 xxs:p-2 sm:p-8 md:p-12 lg:p-16 xl:p-10 2xl:p-20 ">
        <h3 className="my-6 md:mb-9 text-center text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-black uppercase">
          How Do <GradientText text="Pawn Loans" /> Work?
        </h3>
        <p className="text-center text-sm sm:text-lg text-white/90 lg:max-w-[50%] mx-auto my-6 md:mb-9">
          Based on the item’s value, they offer you a loan. If you accept, they
          hold the item while you receive cash.
        </p>
        <Image
          width={400}
          height={400}
          src={pawnloans}
          title="National Gold and Pawn | Pawn Loan"
          alt="National Gold and Pawn | Pawn Loan"
          className="w-full h-auto lg:h-[85vh] object-contain shadow-lg"
          priority
        />
      </section>
      <VisitUs />
    </div>
  );
};

export default PawnProcess;
