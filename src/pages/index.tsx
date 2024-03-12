import React from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Events from "@/components/home/Events";
import Sermons from "@/components/home/Sermons";

export default function Home() {
  const heroTitle = "Welcome to the Jungle";
  const heroBackgroundImage = "/jungle.jpg";

  return (
    <div className="homePage">
      <Hero title={heroTitle} backgroundImage={heroBackgroundImage} />
      <About />
      <div className="junglehike"></div>
      <Events />
      <div className="bible"></div>
      <Sermons />
    </div>
  );
}
