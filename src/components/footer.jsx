"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.webp";
import call from "@/assets/images/icons/call.svg";
import location from "@/assets/images/icons/location.svg";
import { roundedBorder } from "@/utils/common";
import {
  companyAddress,
  companyPhoneNo,
  locationUrl,
} from "@/utils/environments";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Buy", href: "/what-we-buy" },
  { label: "Pawn Process", href: "/pawn-process" },
  { label: "Contact Us", href: "/contact" },
];
const Footer = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <footer
      className={`container-3xl relative z-40 ${roundedBorder} gradient-border-wrapper`}
    >
      <div
        className={`linear-gradient-border ${roundedBorder}  bg-approxblack  xxs:p-6 xs:p-8 md:p-12 md:pb-6 ${
          isContactPage ? "!pt-12 md:!pt-[4.5rem] lg:!pt-24 2xl:!pt-32" : ""
        }`}
      >
        <div className="p-4 2xl:pb-10 flex justify-center">
          <Link href="/" className="font-bold text-xl xxs:text-2xl">
            <Image
              src={logo}
              className="object-contain w-[160px] h-[50px] md:w-[200px] md:h-[70px] 2xl:w-[312px] 2xl:h-[93px]"
              alt="National Gold and Pawn | Diamonds, Watches, Jewelry"
              title="National Gold and Pawn | Diamonds, Watches, Jewelry"
            />
          </Link>
        </div>

        <ul className="container text-center text-white text-sm md:text-base 2xl:text-2xl flex md:flex-wrap flex-col md:flex-row py-6 gap-3  justify-center">
          {footerLinks.map((link, index) => (
            <li key={link.href}>
              <Link
                className="hover:text-lightgold transition-all duration-300"
                href={link.href}
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="mx-3 md:mx-2 lg:mx-7 hidden md:inline">|</span>
              )}
            </li>
          ))}
        </ul>
        <div className="text-sm md:text-base 2xl:text-2xl flex flex-col md:flex-row justify-center items-center mt-3 md:mt-4 gap-3 md:gap-5 lg:gap-7">
          <div className="flex items-center gap-3">
            <Image
              src={call}
              title="National Gold and Pawn | Diamonds, Watches, Jewelry"
              alt="National Gold and Pawn | Diamonds, Watches, Jewelry"
              className="w-5 md:w-6"
            />
            <Link
              href={"tel:315-3359274"}
              className="text-white hover:text-lightgold transition-all duration-300"
            >
              {companyPhoneNo}
            </Link>
          </div>
          <div className="flex text-center items-center gap-3">
            <Image
              src={location}
              title="National Gold and Pawn | Diamonds, Watches, Jewelry"
              alt="National Gold and Pawn | Diamonds, Watches, Jewelry"
              className="w-5 md:w-6"
            />
            <Link
              href={locationUrl}
              target="_blank"
              className="text-white hover:text-lightgold transition-all duration-300"
            >
              {companyAddress}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0b0c10] rounded-br-xl rounded-bl-xl 2xl:rounded-br-[30px] 2xl:rounded-bl-[30px] text-center p-3 xxs:p-4 lg:py-5 ">
        <p className="text-sm md:text-base 2xl:text-2xl">
          © 2024 Pawn. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
