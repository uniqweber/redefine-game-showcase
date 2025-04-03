import TiltCard from "./TiltCard";
import BentoCard from "./BentoCard";
import {comingSoonFeature, featureItems, firstFeatureItem} from "../../../../utils/constant/constant";

const Features = () => (
  <section id="vault" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <TiltCard className={firstFeatureItem.className}>
        <BentoCard src={firstFeatureItem.src} title={firstFeatureItem.title} description={firstFeatureItem.description} isComingSoon />
      </TiltCard>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        {featureItems.map((item, index) => (
          <TiltCard key={index} className={item.className}>
            <BentoCard src={item.src} title={item.title} description={item.description} isComingSoon />
          </TiltCard>
        ))}

        <TiltCard className={comingSoonFeature.className}>
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            {comingSoonFeature.title}
            {comingSoonFeature.icon}
          </div>
        </TiltCard>

        <TiltCard className="bento-tilt_2">
          <video src="videos/feature-5.mp4" loop muted autoPlay className="size-full object-cover object-center" />
        </TiltCard>
      </div>
    </div>
  </section>
);

export default Features;
