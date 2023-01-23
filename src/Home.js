import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info"; 
import Itachi from "./components/Itachi";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";



function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Info />
      <Itachi />
      <Card />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
 