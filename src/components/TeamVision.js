import React from "react";
import Lottie from "react-lottie-player";
import Team from "../teamwork.json";
const TeamVision = () => {
  return (
    <div className="max-w-[1440px] h-fit mx-auto">
      <div className="md:flex justify items-center">
        <div className="text-start px-2 md:px-8 md:flex-col py-5">
          <p className="text-[#03256C] text-lg md:text-xl lg:text-3xl font-bold py-3 capitalize">
            Be part of our mission
          </p>
          <p className="text-[#1768AC] italic font-medium text-sm p-2">
            ~We're looking for passionate people to join us on our mission. We
            value flat hierarchies, <br></br>clear comminunication, and full
            ownership and responsibility.~
          </p>
        </div>
        <div className="">
          <Lottie loop animationData={Team} play className="" />
        </div>
      </div>
    </div>
  );
};

export default TeamVision;
