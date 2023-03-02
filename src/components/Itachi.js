import React from "react";
import { Slide } from "react-awesome-reveal";
import infoPic from "../assets/images/info-pic.jpg";

function Itachi() {
  return (
    <>
      <div className="bg-white min-h-[600px] max-w-[1440px] mx-auto items-center justify-center xs:px-0  md:gap-5">
        <div className="grid md:grid-cols-2  bg-gradient-to-b from-white to-[#d4e7feb8] max-w-[1440px] h-[600px] items-center justify-center rounded-tl-[50px] overflow-hidden md:rounded-br-[50px]">
          <div className="relative col-span-1  min-w-fit md:w-[50%] h-[400px]">
            <div className="blur-sm absolute top-20 left-2 bg-[#FAFA33] xs:w-20 xs:ml-10 md:w-20 lg:w-52 h-6 rounded-full mix-blend-multiply filter opacity-20 xs:scale-50 md:scale-75  ml-5 mt-3 animate-blob animation-delay-2000"></div>
            <div className="blur-sm absolute top-20 left-32 bg-[#BF40BF] xs:w-20 xs:ml-10 md:w-20 lg:w-52 h-6 rounded-full mix-blend-multiply filter opacity-20 xs:scale-50 md:scale-75  ml-5 mt-3 animate-blob animation-delay-6000"></div>
            <div className="blur-sm absolute bottom-28 left-20 bg-red-500 xs:w-20 xs:mx-0 md:w-20 lg:w-52 h-6 rounded-full mix-blend-multiply filter opacity-20 xs:scale-50 md:scale-75  ml-5 mt-3 animate-blob animation-delay-4000 "></div>
            <div className="justify justify-center items-center text-center">
              <h1 className=" xs:pt-0 md:text-3xl lg:text-2xl sm:text-2xl text-xl font-bold pt-32 py-9 pb-10 my-10 px-20 text-[#03256C] overflow-hidden">
                <Slide>WE ARE NOT YOUR TYPICAL JOB SITE</Slide>
              </h1>
              <p className="pt-5 text-black text-center xs:pr-10 align-center xs:text-sm font-medium md:text-md lg:text-lg mx-10 ">
                Abuja Recruiter makes it easier to find your next great
                opportunity. <br></br>An excellent workforce, great team working
                spirit and ability for individual growth are what create our
                company’s HR-based competitive advantage
              </p>
            </div>
          </div>
          <div className="xs:px-1 pb-2 md:px-0 my-4">
            <img
              src={infoPic}
              alt="Worked-logo"
              className=" md:h-auto md:w-8/12 rounded-3xl mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Itachi;
