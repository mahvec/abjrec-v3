import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import Itachi from "./components/Itachi";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import TeamVision from "./components/TeamVision";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Info />
      <Itachi />
      <Info2 />
      <Card />
      <TeamVision />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
