"use client";
import Link from "next/link";
import { useState, useEffect,useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderLinkButton, LinkButton } from "./button";
import logo from "@/assets/images/logo.webp";
import Image from "next/image";
import { useDispatch,useSelector } from "react-redux";
import {setIsMenuOpen,setIsWhatWeBuyDropDownOpen,} from "@/store/slices/commonSlice";
import { DropDown } from "./dynamiComponents";

const Header = () => {
  const dispatch = useDispatch();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {isMenuOpen,isWhatwebuyDropDownOpen}=useSelector(({ common }) => common);

  const toggleMenu = () => dispatch(setIsMenuOpen(!isMenuOpen));

  const whatWeBuyDropDownList = [
     {
      href: "/what-we-buy/gold-silver-platinum",
      title: "Gold, Silver and Platinum",
    },
    {
      href: "/what-we-buy/coins",
      title: "Coins",
    },
    { href: "/what-we-buy/diamond-and-jewelry", title: "Diamond and Jewelry" },
   
    { href: "/what-we-buy/watches", title: "Watches " },
    {
      href: "/what-we-buy/electronics-and-tools",
      title: "Electronics and Tools",
    },
        {
      href: "/what-we-buy/antiques",
      title: "Antiques",
    },    
        {
      href: "/what-we-buy/bullion",
      title: "Bullion",
    },  
  ];

  const menuList = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      label: "What We Buy",
      dropDown: whatWeBuyDropDownList,
      isDropDownOpen: isWhatwebuyDropDownOpen,
      setIsDropDownOpen: (value) => dispatch(setIsWhatWeBuyDropDownOpen(value)),
    },
    { href: "/pawn-process", label: "Pawn Process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 300) {
          setIsHeaderVisible(false);
          dispatch(setIsWhatWeBuyDropDownOpen(false));
        } else {
          setIsHeaderVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const closeAllDropdown = useCallback(() => {
    dispatch(setIsMenuOpen(false));
  }, [dispatch]);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 top-4 md:top-7 w-[90%] md:max-w-[90%] z-50 transition-transform duration-300 ${
        isHeaderVisible
          ? "translate-y-0"
          : "-translate-y-[120px] xl:-translate-y-[140px]"
      }`}
    >
      <div className="backdrop-blur-lg bg-white/20 border border-white/20 w-full">
        <div className="flex gap-2 xxs:gap-3 xs:gap-4 items-center justify-between px-2 xxs:px-3 xs:px-4 py-1 md:py-2 lg:py-1.5 4xl:py-3">
          <Link href="/" className="font-bold text-xl xxs:text-2xl">
            <Image
              src={logo}
              className="object-contain w-[120px] h-[40px] md:w-[200px] md:h-[50px] 2xl:w-[250px] 2xl:h-[70px]"
              alt="National Gold and Pawn | Diamonds, Watches, Jewelry"
              title="National Gold and Pawn | Diamonds, Watches, Jewelry"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-lg  gap-0 2xl:gap-0 flex items-center overflow-hidden">
              {menuList.map((item) =>
                item.dropDown ? (
                  <div key={item.label}>
                    <DropDown
                      title={item.label}
                      menuList={item.dropDown}
                      onToggle={() => setIsMenuOpen(false)}
                      isDropDownOpen={item.isDropDownOpen}
                      setIsDropDownOpen={item.setIsDropDownOpen}
                    />
                  </div>
                ) : (
                  <HeaderLinkButton
                    key={item?.label}
                    href={item?.href}
                    onClick={closeAllDropdown}
                  >
                    {item?.label}
                  </HeaderLinkButton>
                )
              )}
            </div>
          </nav>

          {/* Contact Button - Desktop */}
          <LinkButton
            href="/contact"
            className="hidden lg:flex !py-0 lg:!h-[2.2rem] 4xl:!h-[3rem]"
          >
            Contact
          </LinkButton>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 xxs:p-2 hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 xxs:w-6 xxs:h-6" />
            ) : (
              <Menu className="w-5 h-5 xxs:w-6 xxs:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <nav className="px-2 xxs:px-3 xs:px-4 py-2 flex flex-col gap-2">
                {menuList.map((item) =>
                  item.dropDown ? (
                    <DropDown
                      key={item.label}
                      title={item.label}
                      menuList={item.dropDown}
                      isDropDownOpen={item.isDropDownOpen}
                      setIsDropDownOpen={item.setIsDropDownOpen}
                    />
                  ) : (
                    <HeaderLinkButton
                      key={item?.label}
                      href={item?.href}
                      onClick={() => dispatch(setIsMenuOpen(false))}
                      className="w-full justify-center"
                    >
                      {item?.label}
                    </HeaderLinkButton>
                  )
                )}
                <LinkButton
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full justify-center"
                >
                  Contact
                </LinkButton>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
