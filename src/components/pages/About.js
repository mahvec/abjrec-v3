import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import NewsLetter from "../NewsLetter";
import AboutInfo from "../AboutInfo"
import AboutWhy from "../AboutWhy";

function About() {
  return (
    <div>
      <Navbar />
      <AboutInfo />
      <AboutWhy />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default About;
