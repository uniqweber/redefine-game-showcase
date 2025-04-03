import React from "react";
import {TiLocationArrow} from "react-icons/ti";
import Button from "../../../../components/ui/Button";

const HeroContent = () => {
  return (
    <>
      <div className="absolute left-0 top-0 size-full z-40">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="hero-heading text-blue-100">
            redefi<b>n</b>e
          </h1>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button id="watch-trailer" title="Watch trailer" leftIcon={<TiLocationArrow />} containerClass="bg-yellow-300 flex-center gap-1" />
        </div>
      </div>

      <h1 className="hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        G<b>a</b>ming
      </h1>
    </>
  );
};

export default HeroContent;
