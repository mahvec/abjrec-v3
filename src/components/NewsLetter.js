import React from "react";
import Jello from "react-awesome-reveal";

function NewsLetter() {
  return (
    <div className="max-w-[1440px] mx-auto py-16 bg-gradient-to-b from-[#f5f7fb] to-[#f7f7f7] -z-50">
      <Jello>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 px-2">
          <div className="lg:col-span-2 my-4">
            <h1 className="text-[#03246c] md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
              Subscribe to get job notification
            </h1>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="p-3 flex w-full rounded-md text-[#03246c] outline-1 border"
              />
              <button className="bg-[#4b418b] hover:bg-[#03246c] text-[#ffffff] rounded-md font-medium w-[200px] xs:ml-0 md:ml-4 my-6 px-6 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-[#03246c]">
              We care about the protection of your data.Read our
              <span className="text-[#16a0bc]"> Privacy Policy</span>
            </p>
          </div>
        </div>
      </Jello>
    </div>
  );
}

export default NewsLetter;
