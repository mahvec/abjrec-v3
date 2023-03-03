import React from "react";
import "../App.css";

function Card() {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto bg-[#d4e7feb8] p-6 py-20">
        {/* HEADIMG FOR CARD */}
        <h1 className="text-[#03256C] font-bold md:text-3xl sm:text-2xl  text-xl text-center py-6">
          Most Demanded Job Catergories
        </h1>

        {/* CARD CONTAINER START */}
        <div className="flex flex-wrap md:w-full xs:mx-auto md:mx-0 md:px-10 justify-center xs:w-[200px]">
          <a
            href="/job"
            className="design-icon flex flex-col bg-white rounded-lg shadow-md w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-[150px] xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-sharp fa-solid fa-swatchbook xs:pl-12 md:pl-12 scale-[2.00]"></i>

            <h2 className="text-center px-2 mt-12 md:text-md sm:text-xs md:lg:font-bold xs:text-xs xs:font-medium md:font-bold sm:font-bold">
              Design
            </h2>
          </a>

          <a
            href="/job"
            className="tech-icon flex flex-col bg-white rounded-lg shadow-md w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-[150px] xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-light fa-microchip xs:pl-12 md:pl-12 scale-[2.00]"></i>

            <h2 className="text-center px-2 mt-12 md:text-md sm:text-xs md:lg:font-bold xs:text-xs xs:font-medium md:font-bold sm:font-bold">
              Technology
            </h2>
          </a>

          <a
            href="/job"
            className="market-icon flex flex-col bg-white rounded-lg shadow-md w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-[150px] xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-money-bill-trend-up xs:pl-12 md:pl-12 scale-[2.00]"></i>

            <h2 className="text-center px-2 mt-12 md:text-md sm:text-xs md:lg:font-bold xs:text-xs xs:font-medium md:font-bold sm:font-bold">
              Marketing
            </h2>
          </a>

          <a
            href="/job"
            className="finance-icon flex flex-col bg-white rounded-lg shadow-md w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-[150px] xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-coins xs:pl-12 md:pl-12 scale-[2.00]"></i>

            <h2 className="text-center px-2 mt-12 md:text-md sm:text-xs md:lg:font-bold xs:text-xs xs:font-medium md:font-bold sm:font-bold">
              Finance
            </h2>
          </a>
          <a
            href="/job"
            className="human-icon flex flex-col bg-white rounded-lg shadow-md w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-[150px] xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-user xs:pl-12 md:pl-12 scale-[2.00]"></i>

            <h2 className="text-center px-2 mt-12 md:text-md sm:text-xs md:lg:font-bold xs:text-xs xs:font-medium md:font-bold sm:font-bold">
              Human Resource
            </h2>
          </a>
          <a
            href="/job"
            className="facility-icon flex flex-col bg-white rounded-lg shadow-md w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-[150px] xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-building xs:pl-12 md:pl-12  scale-[2.00]"></i>

            <h2 className="text-center px-2 mt-12 md:text-md sm:text-xs md:lg:font-bold xs:text-xs xs:font-medium md:font-bold sm:font-bold">
              Facality Management
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
