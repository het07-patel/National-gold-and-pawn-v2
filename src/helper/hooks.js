'use client'
import { useEffect, useState } from "react";
import { messageType } from "@/utils/lib";
export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    // Check if the click is inside the ref or a link within the dropdown
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !e.target.closest("a") // Ignore clicks on <a> elements
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
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



export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

