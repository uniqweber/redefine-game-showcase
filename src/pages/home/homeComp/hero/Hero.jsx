import HeroLoading from "./HeroLoading";
import HeroContent from "./HeroContent";
import useHeroVideoAnimation from "../../../../hooks/animations/useHeroVideoAnimation";
import useHeroVideoLogic from "../../../../hooks/logic/useHeroVideoLogic";
import HeroVideo from "./HeroVideo";

const Hero = () => {
  const {currentIndex, nextVideoRef, isLoading, hasClicked, miniPlayerClick, handleVideoLoad, getVideoSrc, upcomingVideoIndex} = useHeroVideoLogic();
  useHeroVideoAnimation(hasClicked, nextVideoRef, currentIndex);

  return (
    <div id="nexus" className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && <HeroLoading />}
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100" onClick={miniPlayerClick}>
            <HeroVideo
              id="current-video"
              videoRef={nextVideoRef}
              src={getVideoSrc(upcomingVideoIndex)}
              onLoad={handleVideoLoad}
              className="size-64 scale-150"
            />
          </div>
        </div>

        <HeroVideo
          id="next-video"
          videoRef={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          onLoad={handleVideoLoad}
          className="absolute-center invisible z-20 size-64"
        />

        <HeroVideo id="bg-video" src={getVideoSrc(currentIndex)} onLoad={handleVideoLoad} className="left-0 top-0 size-full" autoPlay={false} />

        <HeroContent />
      </div>
      <h1 className="hero-heading absolute bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
