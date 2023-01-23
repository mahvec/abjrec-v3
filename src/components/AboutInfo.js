import React from 'react';
import Lottie from "react-lottie-player";
import GirlLottie from "../assets/girl.json";

function AboutInfo() {
  return (
    <div className="w-full px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 px-8">
        <div className="flex flex-col justify-center">
          <Lottie
            loop
            animationData={GirlLottie}
            play
            className="mx-auto my-4 -z-10"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[#03256C] md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
            Abuja Recruiter
          </h1>
          <p className="text-[#1768AC] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo