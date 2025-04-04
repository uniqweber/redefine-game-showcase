import clsx from "clsx";
import {TiLocationArrow} from "react-icons/ti";
import Button from "../ui/Button";
import useNavbarLogic from "../../hooks/logic/useNavbarLogic";
import {navItems} from "../../utils/constant/constant";
import { useSmoothScroll } from "../../context/SmoothScrollContext";

const NavBar = () => {
  const {navContainerRef, toggleAudioIndicator, audioElementRef, isIndicatorActive} = useNavbarLogic();
  const scrollToSection = useSmoothScroll()

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img onClick={()=>scrollToSection("nexus")} src="/img/logo.png" alt="logo" className="size-10 cursor-pointer hover:scale-125 duration-500" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <button className="nav-hover-btn" key={index} onClick={() => scrollToSection(item.toLocaleLowerCase())}>
                  {item}
                </button>
              ))}
            </div>

            <button onClick={toggleAudioIndicator} className="ml-10 flex items-center space-x-0.5 cursor-pointer">
              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bar) => (
                <div key={bar} className={clsx("indicator-line", {active: isIndicatorActive})} style={{animationDelay: `${bar * 0.1}s`}} />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
