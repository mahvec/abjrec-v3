import React, { useState, useCallback } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Lottie from "react-lottie-player";
import Writing from "../assets/writing.json";
import Recruit from "../assets/recruiter.json";
import { JOB } from "../components/JobDescription";
import { CATEGORY as CATEGORIES, LOCATION, WORKTIME } from "./DropdownList";
// import ColorBg from "../assets/images/job-card.jpg"

function JobInfo() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  const [worktime, setWorktime] = useState(null);
  const [location, setLocation] = useState(null);
  console.log(search);

  const [drop, setDrop] = useState(true);

  const handleDrop = () => setDrop(!drop);

  /**
   * @type {()=> {
   * title: string;
   * author: string;
   * worktime: string;
   * location: string;
   * category: string;
   * description: string;
   * }[]}
   */
  const jobs = useCallback(() => {
    if (search !== "") {
      return JOB.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      const jc = JOB.filter((job) => {
        console.log(job.category, category?.name);
        return category === null
          ? true
          : job.category
              .toLowerCase()
              .includes(category?.name?.toLowerCase() ?? "");
      });
      console.log("jc", JOB.length, jc.length);
      const jt = jc.filter((job) => {
        return worktime === null
          ? true
          : job.worktime
              .toLowerCase()
              .includes(worktime?.name?.toLowerCase() ?? "");
      });
      console.log("jt", jc.length, jt.length);
      const jl = jt.filter((job) => {
        return location === null
          ? true
          : job.location
              .toLowerCase()
              .includes(location?.name?.toLowerCase() ?? "");
      });
      console.log("jl", jt.length, jl.length);
      return jl;
    }
  }, [search, category, worktime, location]);

  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        {/* Search bar */}

        <div className="flex justify-center xs:justify-start">
          <form
            action=""
            className="border md:max-w-2xl md:mx-20 xs:ml-5 sm:ml-5 xs:w-[68%] sm:w-[63%] lg:w-[670px] rounded md:p-2 xs:p-2 h-15"
          >
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search for vacancy"
              className="h-[35px] w-full text-sm pl-2 outline-none focus:border"
            />
          </form>

          {/* toggle for filter on mobile view */}

          <div onClick={handleDrop} className="block md:hidden ml-4 mt-2">
            {!drop ? (
              <AiOutlineClose size={20} />
            ) : (
              <RxDropdownMenu size={25} />
            )}
          </div>
        </div>

        {/* DROPDOWN ON MOBILE VIEW */}

        <div className="relative ">
          <div
            className={
              !drop
                ? "fixed bg-gray-300 z-30 w-full h-[75%] bottom-[0px] right-0 left border-gray-600 bg-opacity-90 ease-in-out duration-700 md:hidden"
                : "fixed bottom-[-200%] ease-in-out duration-700"
            }
          >
            <div className="relative flex flex-col w-[75%] mx-auto h-auto border z-30 border-gray-400 my-5 rounded-lg md:hidden top-[100px]">
              <div className="pt-2 px-2 mb-3">
                <p className="text-[#023e8a] text-xs mb-1 w-fit font-bold pl-5">
                  Category
                </p>
                <select
                  name=""
                  id=""
                  value={category?.id ?? ""}
                  onChange={(e) => {
                    setSearch("");
                    setCategory(
                      CATEGORIES.find((c) => c.id === e.target.value) ??
                        CATEGORIES[0]
                    );
                  }}
                  className="w-full h-10 border-2 rounded-lg px-5 text-base font-bold  item-center text-[#023e8a] py-1 outline-none"
                >
                  {CATEGORIES.map((item) => {
                    return (
                      <option
                        className="rounded font-semibold px-2"
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="pt-1 px-2 mb-3">
                <p className="text-[#023e8a] text-xs mb-1 w-fit font-bold pl-5">
                  Worktime
                </p>
                <select
                  name=""
                  id=""
                  value={worktime?.id ?? ""}
                  onChange={(e) => {
                    setSearch("");
                    setWorktime(
                      WORKTIME.find((w) => w.id === e.target.value) ??
                        WORKTIME[0]
                    );
                  }}
                  className="w-full h-10 border-2 rounded-lg px-5 text-base font-bold item-center text-[#023e8a] py-1 outline-none"
                >
                  {WORKTIME.map((item) => {
                    return (
                      <option
                        className="rounded font-semibold px-2"
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="pt-1 px-2 pb-2 mb-3">
                <p className="text-[#023e8a] text-xs mb-1 w-fit font-bold pl-5">
                  Location
                </p>
                <select
                  name=""
                  id=""
                  value={location?.id ?? ""}
                  onChange={(e) => {
                    setSearch("");
                    setLocation(
                      LOCATION.find((l) => l.id === e.target.value) ??
                        LOCATION[0]
                    );
                  }}
                  className="w-full h-10 border-2 rounded-lg px-5 text-base font-bold item-center text-[#023e8a] py-1 outline-none"
                >
                  {LOCATION.map((item) => {
                    return (
                      <option
                        className="rounded font-semibold px-2"
                        key={item.id}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* DROPDOWN ON DESKTOP VIEW */}

        <div className="max-w-[1440px] mx-auto xs:hidden md:block">
          <div className="relative flex flex-col sm:w-[63%] lg:w-[670px] h-auto border ml-20 my-5 rounded-lg">
            <div className="pt-2 px-2">
              <p className="text-[#023e8a] text-xs mb-1 w-fit font-bold pl-5">
                Category
              </p>
              <select
                name=""
                id=""
                value={category?.id ?? ""}
                onChange={(e) => {
                  setSearch("");
                  setCategory(
                    CATEGORIES.find((c) => c.id === e.target.value) ??
                      CATEGORIES[0]
                  );
                }}
                className="w-full h-14 border-2 rounded-lg px-5 text-base font-bold  item-center text-[#023e8a] py-1 outline-none"
              >
                {CATEGORIES.map((item) => {
                  return (
                    <option
                      className="rounded font-semibold px-2"
                      key={item.id}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pt-1 px-2">
              <p className="text-[#023e8a] text-xs mb-1 w-fit font-bold pl-5">
                Worktime
              </p>
              <select
                name=""
                id=""
                value={worktime?.id ?? ""}
                onChange={(e) => {
                  setSearch("");
                  setWorktime(
                    WORKTIME.find((w) => w.id === e.target.value) ?? WORKTIME[0]
                  );
                }}
                className="w-full h-14 border-2 rounded-lg px-5 text-base font-bold item-center text-[#023e8a] py-1 outline-none"
              >
                {WORKTIME.map((item) => {
                  return (
                    <option
                      className="rounded font-semibold px-2"
                      key={item.id}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pt-1 px-2 pb-2">
              <p className="text-[#023e8a] text-xs mb-1 w-fit font-bold pl-5">
                Location
              </p>
              <select
                name=""
                id=""
                value={location?.id ?? ""}
                onChange={(e) => {
                  setSearch("");
                  setLocation(
                    LOCATION.find((l) => l.id === e.target.value) ?? LOCATION[0]
                  );
                }}
                className="w-full h-14 border-2 rounded-lg px-5 text-base font-bold item-center text-[#023e8a] py-1 outline-none"
              >
                {LOCATION.map((item) => {
                  return (
                    <option
                      className="rounded font-semibold px-2"
                      key={item.id}
                      vaule={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* LIST FOR JOB VACANCY */}

      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 mt-10">
        <div className="flex flex-col xl:col-span-2 ml-10 md:w-3/4 xs:mx-5 md:ml-[80px]">
          <div className="">
            {jobs().map((job, i) => {
              return (
                <div
                  key={i}
                  className="block rounded-xl  shadow-xl sm:max-w-md md:max-w-md lg:max-w-xl  mb-10 border border-gray-300 "
                >
                  <div className="py-2 px-2 border-b border-gray-300 text-[#023e8a] pl:4 md:pl-8">
                    <h3 className="py-1 font-bold text-md md:text-2xl left uppercase">
                      {job.title}
                    </h3>
                    <p className="xs:text-sm md:text-base font-medium">
                      <span className="italic">Posted by:</span>
                      {job.author}
                    </p>

                    <span className="bg-gray-300 rounded italic text-[0.6rem] px-1 font-medium ">
                      {job.worktime}
                    </span>
                    <span className="bg-gray-300 rounded italic text-[0.6rem] px-1 font-medium mx-2">
                      {job.location}
                    </span>
                    <p className="text-xs">
                      Job Category:
                      <span className="italic">{job.category}</span>
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
            })}

          <div className="block rounded-xl  shadow-xl sm:max-w-md md:max-w-md lg:max-w-xl  mb-10 border border-gray-300">
                  <div className="grid grid-cols-4 gap-4 h-20">
                      <div className="">
                      <div className="rounded-xl border h-16 m-1 bg-gradient-to-r from-cyan-200 to-fuchsia-200">
                        
                      </div>
                      </div>
                      <div className="col-span-3 ">
                        <p>JOB TITLE</p>
                        <span>Posted by: H-R</span>
                        <span>Category</span>
                        <div>
                        <span>full-time</span>
                        <span>location</span>
                      </div>
                      </div>
                    </div>
                    <div className="border-t p-4 text-base font-medium">
                    <p>If you need to use a one-off background-image value that does not make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.</p>
                  </div>
                  <div className="border-t ">
                    <p className="text-end text-xs font-normal px-3">5 days ago</p>
                  </div>
                  </div> 
                       
          </div>
          
        </div>

        {/* SIDE LOTTIE */}

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
    </div>
  );
}

export default JobInfo;

// const totalResultFilter = (Jobs) => {
//   return (

//   );
// };

// const filteredJobs = JOB.filter(
//   JOB.title.toLowercase.includes(search.toLowerCase) &&
//     JOB.category.toLowerCase.includes(category.toLowerCase) &&
//     JOB.location.toLowerCase.includes(location.toLowerCase) &&
//     JOB.worktime.toLowercase.includes(worktime.toLowerCase)
// );

// const filteredJobs = JOB.filter((data)=> {data.title == "hjh"});
// console.log(filteredJobs);
