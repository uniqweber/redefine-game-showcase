import RoundedCorners from "./RoundedCorners";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const StoryImgContainer = ({frameRef, handleMouseLeave, handleMouseMove}) => {
  return (
    <div className="story-img-container">
      <div className="story-img-mask">
        <div className="story-img-content">
          <img
            id="story-img"
            ref={frameRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseLeave}
            onMouseEnter={handleMouseLeave}
            src="/img/entrance.webp"
            alt="entrance.webp"
            className="object-contain"
          />
        </div>
      </div>
      <RoundedCorners />
    </div>
  );
};

export default StoryImgContainer;
