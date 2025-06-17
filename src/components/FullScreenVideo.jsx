"use client";
import React, { useRef, useState } from "react";

export default function FullScreenVideo({ videoSrc, titleAttr }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden cursor-pointer"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        width={2070}
        height={1380}
        muted
        preload="none"
        aria-label="Video player"
        playsInline
        className="w-full h-full object-cover"
        autoPlay
        title={titleAttr}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
