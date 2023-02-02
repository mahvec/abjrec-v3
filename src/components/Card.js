import React from "react";
import "../App.css";

function Card() {
  return (
    <div className="">
      <div className="max-w-[1440px] mx-auto bg-gray-100 p-6 py-20">
        {/* HEADIMG FOR CARD */}
        <h1 className="text-[#03256C] font-bold md:text-3xl sm:text-2xl  text-xl text-center py-6">
          Most Demanded Job Catergories
        </h1>

        {/* CARD CONTAINER START */}
        <div className="flex flex-wrap md:w-full xs:mx-auto md:mx-0 md:px-10 justify-center xs:w-[200px]">
          <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-sharp fa-solid fa-swatchbook pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Design
            </h2>
          </a>

          <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-light fa-microchip pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Technology
            </h2>
          </a>

          <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-money-bill-trend-up pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Marketing
            </h2>
          </a>

          <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-coins pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Finance
            </h2>
          </a>
          <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-coins pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Finance
            </h2>
          </a>
          <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css  transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-coins pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Finance
            </h2>
          </a>
          {/* <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-coins pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Finance
            </h2>
          </a> */}
          {/* <a
            href="/job"
            className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 h-32 justify-center overflow-hidden card-css transition duration-500 text-[#03256C] sm:w-52 xs:scale-110 lg:scale-110"
          >
            <i className="fa fa-solid fa-coins pl-8"></i>

            <h2 className="text-center px-2 mt-12 md:text-lg sm:text-xs md:lg:font-bold xs:text-xs xs:font-light md:font-bold sm:font-bold">
              Finance
            </h2>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
