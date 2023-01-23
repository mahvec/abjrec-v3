import React from "react";
import Typed from "react-typed";
import { Slide } from "react-awesome-reveal";

function Hero() {
  return (
    <div className="">
      <Slide cascade damping={1}>
      <div className="max-w-[1440px] mt-[-96px] w-full h-[800px] mx-auto text-center flex flex-col justify-center">
        <p className="text-[#03256C] font-bold p-2">GET YOUR DREAM JOB</p>
        <h1 className="text-[#03256C] md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 sm:py-6 xs:py-6 ">
          Explore all the most exciting jobs roles
        </h1>
        <div className="flex justify-center items-center ">
          <p className="text-[#2541B2] md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Based on your
          </p>
          <Typed
            className="text-[#03256C] md:text-4xl sm:text-3xl pt-2 text-xl font-bold pl-4 py-2 "
            strings={["Interest", "Study Major"]}
            typeSpeed={100}
            loop
          />
          
        </div>
      </div>
      </Slide>
    </div>
  );
}

export default Hero;
