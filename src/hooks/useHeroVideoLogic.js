import {useEffect, useRef, useState} from "react";

const useHeroVideoLogic = (totalVideos = 3) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const nextVideoRef = useRef(null);
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleVideoLoad = () => setLoadedVideos((prev) => prev + 1);

  useEffect(() => {
    if (loadedVideos >= totalVideos - 1) setIsLoading(false);
  }, [loadedVideos, totalVideos]);

  const miniPlayerClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  return {
    currentIndex,
    nextVideoRef,
    isLoading,
    hasClicked,
    miniPlayerClick,
    handleVideoLoad,
    getVideoSrc: (index) => `videos/hero-${index}.mp4`,
  };
};

export default useHeroVideoLogic;
