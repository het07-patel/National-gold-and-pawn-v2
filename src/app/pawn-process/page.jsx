import GradientText from "@/components/gradient-text";
import Hero from "@/components/hero";
import pawnloans from "@/assets/images/pawn-process/pawnloans.webp";
import VisitUs from "@/components/visitus";
import Image from "next/image";
import banner from "@/assets/images/pawn-process/banner.webp";

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
