import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import heroPic from "../assets/images/hero1.png"



function Hero() {
  return (
    <div className=" grid md:grid-cols-3 max-w-[1440px] mx-auto ">
      <div className=" mt-[-96px] w-full h-[800px] mx-auto text-center flex flex-col justify-center md:col-span-2">
        <p className="text-[#03256C] font-bold p-2 ">GET YOUR DREAM JOB</p>
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
        <div className="relative mt-5">
          <button
          className="text-2xl bg-transparent font-bold font-poppins text-[#03256C] border-2 px-7 py-3 rounded-3xl border-blue-800 hover:border-none hover:bg-[#03256C] hover:text-white "><Link to="/job">Explore Jobs</Link><i className="fa-solid fa-arrow-right-long-to-line"></i> </button>
        </div>
      </div>
      <div className="md:col-span-1 ">
          <img src={heroPic} alt="hero1" className="block xs:hidden sm:hidden md:block md:pt-20 lg:pt-10" />
      </div>
    </div>
  );
}

export default Hero;
