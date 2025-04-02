import React from "react";
import Hero from "./homeComp/hero/Hero";
import About from "./homeComp/about/About";
import Navbar from "../../components/shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
