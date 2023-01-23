import React from "react";
import Lottie from "react-lottie-player";
import InfoLottie from "../assets/Info.json";
import { Reveal,  } from "react-awesome-reveal";

function Info() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[600px] justify items-center pt-20 px-4 bg-gray-200 overflow-hidden">
      <div className=" mx-auto grid md:grid-cols-2 pt-10">
        <>
          <div className="flex flex-col justify-center">
            <Lottie
              loop
              animationData={InfoLottie}
              play
              className="mx-auto my-4 md:w-500px md:h-auto sm:w-80 sm:h-48"
            />
          </div>
        </>

        <div className="flex flex-col justify-center px-10 p-10 overflow-y-hidden ">
          <Reveal>
            <h1 className="text-[#03256C] md:text-4xl sm:text-3xl text-2xl font-bold py-5">
              One Step Closer To Your New Job
            </h1>
            <p className="text-[#1768AC] font-medium pb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Info;
