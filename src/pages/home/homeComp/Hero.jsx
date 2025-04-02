import React, {useRef, useState} from "react";
import Button from "../../../components/ui/Button";
import {TiLocationArrow} from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const miniPlayerClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const handleVideoLoad = () => setLoadedVideos((prev) => prev + 1);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100" onClick={miniPlayerClick}>
              <video
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            loop
            muted
            id="next-video"
            className="absolute absolute-center invisible z-20 size-64 object-cover object-center"
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            onLoadedData={handleVideoLoad}
          />
          <video
            // autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b className="font-zentry-ss01">a</b>ming
        </h1>
        <div className="absolute left-0 top-0 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="hero-heading text-blue-100">
              redefi<b className="font-zentry-ss01">n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow/>} containerClasses="bg-yellow-300 flex-center gap-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
