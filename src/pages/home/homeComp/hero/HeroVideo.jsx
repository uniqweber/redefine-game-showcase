import React from "react";

const HeroVideo = ({id, videoRef, src, onLoad, className, autoPlay = false}) => {
  return (
    <video
      id={id}
      ref={videoRef}
      src={src}
      onLoadedData={onLoad}
      loop
      muted
      preload="auto"
      playsInline
      loading="lazy"
      autoPlay={autoPlay}
      className={`absolute object-cover object-center ${className}`}
    />
  );
};

export default HeroVideo;
