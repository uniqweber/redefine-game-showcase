import {TiLocationArrow} from "react-icons/ti";

export const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
export const firstFeatureItem = {
  src: "videos/feature-1.mp4",
  title: (
    <>
      radia<b>n</b>t
    </>
  ),
  description: "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
  className: "border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]",
};

export const featureItems = [
  {
    src: "videos/feature-2.mp4",
    title: (
      <>
        zig<b>m</b>a
      </>
    ),
    description: "An anime and gaming-inspired NFT collection - the IP primed for expansion.",
    className: "bento-tilt_1 row-span-1 col-span-2 md:col-span-1 md:row-span-2",
  },
  {
    src: "videos/feature-3.mp4",
    title: (
      <>
        n<b>e</b>xus
      </>
    ),
    description: "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
    className: "bento-tilt_1  col-span-2 md:col-span-1 ",
  },
  {
    src: "videos/feature-4.mp4",
    title: (
      <>
        az<b>u</b>l
      </>
    ),
    description: "A cross-world AI Agent - elevating your gameplay to be more fun and productive.",
    className: "bento-tilt_1 col-span-2  md:col-span-1 ",
  },
];

export const comingSoonFeature = {
  className: "bento-tilt_2",
  title: (
    <h1 className="bento-title special-font max-w-64 text-black">
      M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
    </h1>
  ),
  icon: <TiLocationArrow className="m-5 scale-[5] self-end" />,
};
