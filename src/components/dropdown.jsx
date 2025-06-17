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
import { createPortal } from "react-dom";

const DropDown = ({ title, menuList, isDropDownOpen, setIsDropDownOpen }) => {
  const menuRef = useRef();
  const buttonRef = useRef();
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

  const getDropdownPosition = () => {
    if (!buttonRef.current) return { top: 0, left: 0 };
    
    const rect = buttonRef.current.getBoundingClientRect();
    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width
    };
  };

  const position = isDropDownOpen ? getDropdownPosition() : { top: 0, left: 0, width: 0 };

  console.log(title, "title");

  return (
    <>
    
      <div className="relative" ref={buttonRef}>
        <HeaderLinkButton
          onClick={handleDropDownToggle}
          className={`
            px-6 py-3 transition-colors duration-200 hover:bg-white/10
           ${activeItem === title ? 'bg-white text-black' : 'text-white'}
          `}
        >
          <div className="gap-1.5 flex items-center">
            {title}
            {isDropDownOpen ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </div>
        </HeaderLinkButton>

        <div className={`
          absolute z-50 top-full left-0 w-[280px] rounded-lg bg-white p-2 shadow-[rgba(99,99,99,0.2)_0_1px_6px_0] 
          lg:hidden
          ${isDropDownOpen ? "block" : "hidden"}
        `}>
          <ul className="flex flex-col w-full gap-[2px]">
            {menuList?.map((x, i) => (
              <li className="w-full" key={i}>
                {x.href ? (
                  <Link
                    className={`block w-full leading-5 text-[15px] text-black transition-all font-normal bg-lightslate p-[9px] ${
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

      {isDropDownOpen && typeof window !== 'undefined' && createPortal(
        <div
          ref={menuRef}
          className="fixed z-50 rounded-lg bg-white p-2 shadow-[rgba(99,99,99,0.2)_0_1px_6px_0] hidden lg:block"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            minWidth: `${Math.max(position.width, 220)}px`,
            width: 'auto'
          }}
        >
          <ul className="flex flex-col w-full gap-[2px]">
            {menuList?.map((x, i) => (
              <li className="w-full" key={i}>
                {x.href ? (
                  <Link
                    className={`block w-full leading-5 text-[15px] 2xl:text-lg text-black transition-all font-normal bg-lightslate p-[9px] 2xl:p-[10px] ${
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
        </div>,
        document.body
      )}
    </>
  );
};

export default DropDown;