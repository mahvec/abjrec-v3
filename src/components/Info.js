import React from "react";
import Lottie from "react-lottie-player";
import InfoLottie from "../assets/Info.json";
import { Reveal } from "react-awesome-reveal";

function Info() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[400px] justify items-center bg-white overflow-hidden   rounded-br-[50px]  md:rounded-br-[100px]">
      <div className=" mx-auto grid md:grid-cols-2 md:h-[500px]  ">
        <>
          <div className="flex flex-col justify-center">
            <Lottie
              loop
              animationData={InfoLottie}
              play
              className="mx-auto my-4 md:w-fit  md:h-auto sm:w-70 sm:h-48"
            />
          </div>
        </>

        <div className="flex flex-col justify-center px-10 p-10 overflow-y-hidden ">
          <Reveal>
            <h1 className="text-[#03256C] md:text-4xl sm:text-3xl text-2xl font-bold py-5">
              One Step Closer To Your New Job
            </h1>
            <p className="text-gray-800 font-medium pb-5">
              We believe in investing in our employees' growth and development.
              That's why we offer Career Development Opportunities. We believe
              that our employees' success is our success, and we are committed
              to supporting them as they achieve their goals.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Info;
