import React from 'react'
import Lottie from "react-lottie-player";
import Writing from "../assets/writing.json";
import Recruit from "../assets/recruiter.json";
import {JOB} from "../components/JobDescription"

function Joblist(search) {
  return (
    <div className='max-w-[1440px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 mt-10'>
      <div className='flex flex-col xl:col-span-2 ml-10 md:w-3/4 xs:mx-5 md:ml-[80px]'>
        <div className="">
          {
            JOB.filter((job) => {
              return search.toLowerCase() === ''
              ? job
              : job.title.toLowerCase().includes(search);

            }).map((job, i) => {
              return (
                <div key={i} className="block rounded-xl  shadow-xl sm:max-w-md md:max-w-md lg:max-w-xl  mb-10 border border-gray-300 ">
                  <div className="py-2 px-2 border-b border-gray-300 text-[#023e8a] pl:4 md:pl-8">
                    <h3 className="py-1 font-bold text-md md:text-2xl left uppercase">
                      {job.title}
                    </h3>
                    <p className="xs:text-sm md:text-base font-medium">
                      <span className="italic">Posted by:</span>{job.author}
                    </p>

                    <span className="bg-gray-300 rounded italic text-[0.6rem] px-1 font-medium ">
                      {job.mode}
                    </span>
                    <span className="bg-gray-300 rounded italic text-[0.6rem] px-1 font-medium mx-2">
                      {job.location}
                    </span>
                    <p className="text-xs">
                      Job Category: <span className="italic">{job.category}</span>
                    </p>
                  </div>
                  <p className="text-[0.6rem] block text-end border-b border-gray-300 px-1 text-[#023e8a] ">
                    2 days ago
                  </p>
                  <div>
                    <p className="xs:text-xs md:pl-8 p-4 text-[#023e8a]">
                      {job.description}
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="flex flex-col xl:mr-20 xs:hidden sm:block xl:max-w-fit">
          <div className="rounded-lg shadow-lg bg-white md:w-80 lg:min-w-fit lg:mx-10 ml-5 border border-gray-300 mt-3 ">
            <Lottie
              loop
              animationData={Writing}
              play
              className="mx-auto my-4 md:w-300px md:h-auto sm:w-80 sm:h-48"
            />
            <div className="p-6 xs:pr-3">
              <h5 className="text-sm font-bold text-[#023e8a] ">
                LOREM IPSUM IS MY PLACE OF WORK
              </h5>
              <p className="font-medium text-xs text-[#0077b6]">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg bg-white md:w-[316px] lg:min-w-fit lg:mx-10 ml-5 border border-gray-300 mt-3 ">
            <Lottie
              loop
              animationData={Recruit}
              play
              className="mx-auto my-4 md:scale-50 md:h-auto sm:w-80 sm:h-48"
            />
            <div className="p-6 xs:pr-3">
              <h5 className="text-sm font-bold text-[#023e8a] ">
                LOREM IPSUM IS MY PLACE OF WORK
              </h5>
              <p className="font-medium text-xs text-[#0077b6]">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Joblist