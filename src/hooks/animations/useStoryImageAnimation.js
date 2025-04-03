import {useRef, useEffect} from "react";
import gsap from "gsap";

const useStoryImageAnimation = () => {
  const frameRef = useRef(null);

  useEffect(() => {
    const element = frameRef.current;
    if (!element) return;

    // Performance optimization
    element.style.willChange = "transform";

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const xPos = e.clientX - rect.left;
      const yPos = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((yPos - centerY) / centerY) * -10;
      const rotateY = ((xPos - centerX) / centerX) * 10;

      gsap.to(element, {
        duration: 0.3, // Add duration for smoother animation
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ease: "power1.out",
        overwrite: "auto", // Overwrite other conflicting animations
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        transformPerspective: 1000,
        ease: "power1.out",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return frameRef;
};

export default useStoryImageAnimation;
