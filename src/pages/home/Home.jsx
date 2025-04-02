import React from "react";
import Hero from "./homeComp/hero/Hero";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="h-dvh bg-violet-300"></section>
    </main>
  );
};

export default Home;
