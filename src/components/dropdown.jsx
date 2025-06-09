"use client";

import { useMemo, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderLinkButton } from "./button";
import { useDispatch } from "react-redux";
import { removeTrailingSlash } from "@/helper/helperFunctions";
import {
  setIsMenuOpen,
  setIsWhatWeBuyDropDownOpen
} from "@/store/slices/commonSlice";
import { useClickOutside } from "@/helper/hooks";

const DropDown = ({ title, menuList, isDropDownOpen, setIsDropDownOpen }) => {
  const menuRef = useRef();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const activeItem = useMemo(() => {
    if (!pathname) return null;

    const foundItem = menuList.find((x) => {
      return (
        x.href && removeTrailingSlash(x.href) === removeTrailingSlash(pathname)
      );
    });

    return foundItem;
  }, [menuList, pathname]);
  const handleDropDownToggle = () => {
  setIsDropDownOpen(!isDropDownOpen);
};

  useClickOutside(menuRef, () => setIsDropDownOpen(false));
console.log(title,"title")
  return (
  <div className="relative w-full flex justify-center" ref={menuRef}>
    <HeaderLinkButton
      onClick={handleDropDownToggle}
      className="hover:text-white w-full">
      <div className="gap-1.5 flex items-center">
        {title}
        {isDropDownOpen ? (
          <IoIosArrowUp size={20} />
        ) : (
          <IoIosArrowDown size={20} />
        )}
      </div>
    </HeaderLinkButton>

      <div
        className={`absolute z-40 top-[100%] w-[90%]  md:w-[50%] lg:w-[220px] 2xl:w-[265px]  rounded-lg bg-white p-2 shadow-[rgba(99,99,99,0.2)_0_1px_6px_0] ${
          isDropDownOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col w-full md:h-auto gap-[2px]">
          {menuList?.map((x, i) => (
            <li className={`w-full`} key={i}>
              {x.href ? (
                <Link
                  className={`block w-full leading-5 text-[15px] 2xl:text-lg text-black  transition-all font-normal bg-lightslate  p-[9px] 2xl:p-[10px] p-4 ${
                    activeItem?.href && activeItem?.href === x?.href
                      ? "!text-white rounded-lg bg-black"
                      : "hover:bg-black hover:text-white hover:rounded-lg"
                  }`}
                  href={x.href || "#"}
                  onClick={() => {
                    setIsDropDownOpen(false);
                    dispatch(setIsMenuOpen(false));
                  }}
                >
                  {x.title}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
