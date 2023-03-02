import React from "react";
import Lottie from "react-lottie-player";
import Hiring from "../assets/hiring.json";

function AboutWhy() {
  return (
    <div>
      <div className="w-full px-4 pt-10">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-[#03256C] md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
              Why Abuja Recruiter?
            </h1>
            <p className="text-black text-md font-medium">
              At Abuja Recruiter, we believe that our employees are our most
              valuable asset. We believe in investing in our employees'
              well-being and happiness, and we are committed to supporting them
              both in and out of the workplace.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <Lottie loop animationData={Hiring} play className="mx-auto my-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWhy;
