"use client";

import Link from "next/link";
import Image from "next/image";
import home from "@/assets/images/home.svg";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { capitalizeWords } from "@/utils/common";

const Breadcrumb = () => {
  const pathname = usePathname();

  const segments = pathname
    ?.split("/")
    ?.filter(Boolean) // Remove empty strings
    ?.map((segment, index, array) => {
      const path = `/${array?.slice(0, index + 1).join("/")}`;
      return { name: capitalizeWords(segment), path };
    });

  return (
    <nav className="flex items-center justify-center gap-2 text-sm sm:text-base text-white/80">
      {/* <Image
        src={home}
        alt={`Home`}
        title={"Home"}
        priority
        className="object-contain w-5"
      /> */}
      <div className=" flex items-center gap-1 text-[#b9b9b9] hover:text-white transition-all">
        <FaHome className="inline-block" />

        <Link href="/">Home</Link>
      </div>
      {segments?.map((segment, index) => (
        <div key={segment?.path} className="flex items-center gap-2">
          <span className="text-white/50 ">/</span>
          <Link
            href={segment?.path}
            className={index === segments?.length - 1 ? "text-lightgold" : ""}
          >
            {decodeURIComponent(segment?.name)}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
