"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import Breadcrumb from "@/components/breadcrumb";

const Hero = ({
  title,
  buttons,
  imageSrc,
  imgTitleAttr = "",
  imgAltAttr = "",
  videoSrc,
  description,
  isHomePage = false,
}) => {
  const router = useRouter();

  function smoothScrollTo(target, duration = 500) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep() {
      const currentTime = performance.now();
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + targetPosition * progress);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
  return (
    <section
      className={`relative rounded-xl 2xl:rounded-[30px] overflow-hidden ${
        isHomePage
          ? "h-[calc(100vh-16px)] md:h-[calc(100vh-32px)]"
          : "h-[70vh] md:h-[60vh]"
      }`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imgAltAttr}
          title={imgTitleAttr}
          width={2070}
          height={1380}
          priority
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          width={2070}
          height={1380}
          muted
          preload="none"
          aria-label="Video player"
          playsInline
          className="w-full h-full object-cover"
          autoPlay
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex justify-center items-center p-4">
        <div
          className={`flex flex-col justify-center items-center w-full max-w-[90%] xxs:max-w-full sm:max-w-[70%] lg:max-w-[60%] xl:max-w-[55%] text-center gap-3 xxs:gap-1.5 sm:gap-2 ${
            isHomePage ? "" : "mt-8 md:mt-10"
          }`}
        >
          {!isHomePage && <Breadcrumb />}
          <h1 className="text-xl  md:text-4xl md:mb-2 2xl:text-5xl lg:leading-[50px] 2xl:leading-[60px] font-bold">
            {title}
          </h1>
          {description && (
            <h2 className="text-[14px] md:text-[17px] 2xl:text-[20px] ">
              {description}
            </h2>
          )}
          {buttons?.length && (
            <div className="mt-4 sm:mt-2 md:mt-6 2xl:mt-16 flex justify-center items-center gap-3 xxs:gap-2 sm:gap-5 w-full">
              {buttons?.map((button, index) => (
                <Button
                  key={index}
                  className={`w-full xxs:w-auto xxs:flex-1 sm:w-[280px] 2xl:max-w-[35%] ${button?.className}`}
                  variant={button?.variant}
                  onClick={() => {
                    button?.url &&
                      (button.url.startsWith("#")
                        ? smoothScrollTo(button.url, 1500)
                        : router.push(button.url));
                  }}
                >
                  {button?.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
