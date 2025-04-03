import React from "react";
import Hero from "./homeComp/hero/Hero";
import About from "./homeComp/about/About";
import Navbar from "../../components/shared/Navbar";
import Features from "./homeComp/features/Features";
import Story from "./homeComp/story/Story";
import Footer from "../../components/shared/Footer";
import Contact from "./homeComp/contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
