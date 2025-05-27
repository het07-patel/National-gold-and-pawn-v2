"use client";
import { useEffect, useState } from "react";
import { messageType } from "@/utils/lib";

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current?.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export function useAlertTimeout({ message, type }, action, delay = 3000) {
  useEffect(() => {
    if (type === messageType.SUCCESS || type === messageType.INFO) {
      const timeoutId = setTimeout(() => {
        action();
      }, delay);

      return () => clearTimeout(timeoutId); // Cleanup on component unmount
    }
  }, [message, action, delay, type]);

  return null;
}
