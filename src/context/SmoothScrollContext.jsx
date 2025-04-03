import {createContext, useContext, useEffect, useRef} from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScrollContext = createContext(null);

export const SmoothScrollProvider = ({children}) => {
  const lenis = useRef(null);

  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.current.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      lenis.current.scrollTo(element);
    }
  };

  return <SmoothScrollContext.Provider value={scrollToSection}>{children}</SmoothScrollContext.Provider>;
};


export const useSmoothScroll = () => useContext(SmoothScrollContext);
