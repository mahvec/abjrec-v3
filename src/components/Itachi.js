import React from "react";
import { Slide } from "react-awesome-reveal";
import Typed from "react-typed";
import Worked from "../assets/images/work-image.jpg"
function Itachi() {
  return (
    <>
      <div className="bg-white min-h-[600px] max-w-[1440px] mx-auto  grid md:grid-cols-2 items-center justify-center xs:px-0 md:px-5 md:gap-5">
        <div className="relative min-w-fit md:w-[50%] h-[400px] ">
          <div className="absolute top-20 left-2 bg-[#FAFA33] xs:w-20 xs:ml-10 md:w-20 lg:w-52 h-6 rounded-full mix-blend-multiply filter opacity-20 xs:scale-50 md:scale-75  ml-5 mt-3 animate-blob animation-delay-2000"></div>
          <div className="absolute top-20 left-32 bg-[#BF40BF] xs:w-20 xs:ml-10 md:w-20 lg:w-52 h-6 rounded-full mix-blend-multiply filter opacity-20 xs:scale-50 md:scale-75  ml-5 mt-3 animate-blob animation-delay-6000"></div>
          <div className="absolute bottom-28 left-20 bg-red-500 xs:w-20 xs:mx-0 md:w-20 lg:w-52 h-6 rounded-full mix-blend-multiply filter opacity-20 xs:scale-50 md:scale-75  ml-5 mt-3 animate-blob animation-delay-4000 "></div>
          <div className="justify justify-center items-center text-center">
            <h1 className="xs:pt-0 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-bold pt-32 py-9 pb-10 my-10 px-20 text-[#03256C]">
              <Slide>WE ARE NOT YOUR TYPICAL JOB SITE</Slide>
            </h1>
            <p className="pt-5 text-[#2541B2] text-center xs:pr-10 align-center ">
              <Typed
                strings={[
                  "Abuja Recruiter is makes it easier to find your next great opportunity.",
                ]}
                typeSpeed={50}
                loop
                className="xs:text-sm font-semibold md:text-lg lg:text-xl mx-10 text-center"
              />
            </p>
          </div>
        </div>
        <div className="flex flex-col xs:px-1 pb-2 md:px-0 ">
          <img src={Worked} alt="Worked-logo" className="h-full rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default Itachi;
