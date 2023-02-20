import React, { useState, useCallback, useEffect } from "react";
import { BsFilterCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Lottie from "react-lottie-player";
import Writing from "../assets/writing.json";
import Recruit from "../assets/recruiter.json";
import { CATEGORY as CATEGORIES } from "./DropdownList";
import { Slide } from "react-awesome-reveal";
import { fetchJobApi } from "../components/JobApi";
import moment from "moment/moment";
import NOresult from "../noresult.json";
import { NavLink } from "react-router-dom";

function JobInfo() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(null);
  // const [data, setData] = useState([]);

  const [drop, setDrop] = useState(true);

  const handleDrop = () => setDrop(!drop);

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetchJobApi().then(({ jobs }) => setJobData(jobs));
  }, []);

  /**
   * @type {()=> {
   * title: string;
   * author: string;
   * worktime: string;
   * location: string;
   * category: string;
   * initials: string;
   * description: string;
   * }[]}
   */
  const filterJobs = useCallback(() => {
    if (search !== "") {
      return jobData.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      const jc = jobData.filter((job) => {
        return category === null
          ? true
          : job.category
              .toLowerCase()
              .includes(category?.name?.toLowerCase() ?? "");
      });
      console.log(jc);
      return jc;
    }
  }, [search, category, jobData]);

  const jobVacancy = filterJobs().map((job) => (
    <Slide key={job.title}>
      <div className="block rounded-3xl  shadow-[0_25px_20px_-15px_rgba(0,0,0,0.4)] sm:max-w-md md:max-w-md lg:max-w-xl  mb-10 border-2 border-gray-300">
        <div className="grid grid-cols-4 gap-4 p-2">
          <div className=" p-1">
            <div className=" rounded-xl h-full bg-gradient-to-r flex  font-extrabold font-serif md:text-[20px] md:items-baseline lg:text-[20px] xl:text-[40px] text-[#023e8a]">
              <p className="m-auto">INI</p>
            </div>
          </div>
          <div className="col-span-3 mb-1">
            <p className="font-bold text-md md:text-lg lg:text-xl left uppercase text-[#023e8a] mr-1 ">
              {job.title}
            </p>
            <p className="text-sm font-semibold pr-1 text-[#E40066]">
              {job.role}
            </p>
            <p className="text-xs italic pr-3">Posted by: H.R</p>
          </div>
        </div>
        <div className="border-t p-2 text-xs text-[#023e8a] ">
          <p>{job.description}</p>
        </div>
        <div className="border-t h-fit my-2">
          <p className=" text-start text-xs px-2 text-[#023e8a]">
            Published: {moment(job.publishedDate).format("DD/MM/YYYY")}
          </p>
          <p className=" text-start text-xs px-2 text-[#023e8a]">
            Application end:
            {moment(job.applicationEndDate).format("DD/MM/YYYY")}
          </p>
        </div>
        <div className="border-t  font-semibold p-2 text-end px-4 py-2">
          <NavLink
            to={"/form/" + job.title}
            className="bg-[#023e8a] px-3 py-1 rounded-xl text-white text-sm font-poppins cursor-pointer"
          >
            APPLY NOW
          </NavLink>
        </div>
      </div>
    </Slide>
  ));

  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        {/* Search bar */}

        <div className="md:grid md:grid-cols-3  md:gap-2 md:mx-10 mt-5 mb-8 xs:w-[90%] justify-center items-center max-w-[720px] ">
          <form
            action=""
            className="md:col-span-2  h-10 border-2 rounded-lg  grid grid-cols-12 ml-5"
          >
            <span className="col-span-11">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="search"
                placeholder="Search for vacancy"
                className="h-9 w-full p-2 text-sm outline-none"
              />

              {/* toggle for filter on mobile view */}
            </span>
            <span
              onClick={handleDrop}
              className="block md:hidden w-fit col-span-1 m-auto"
            >
              {!drop ? (
                <AiOutlineClose size={19} />
              ) : (
                <BsFilterCircle size={19} />
              )}
            </span>
          </form>
          <div className="xs:hidden md:block">
            {/* <p className="text-[#023e8a] text-xs mb-1 w-fit font-bold pl-5">
              Category
            </p> */}
            <select
              name=""
              id=""
              placeholder="Category"
              value={category?.id ?? ""}
              onChange={(e) => {
                setSearch("");
                setCategory(
                  CATEGORIES.find((c) => c.id === e.target.value) ??
                    CATEGORIES[0]
                );
              }}
              className="w-full h-10 border-2 rounded-lg text-sm text-gray-400 py-1 outline-none"
            >
              {CATEGORIES.map((item) => {
                return (
                  <option
                    className="rounded font-semibold px-2 text-[#023e8a]"
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* DROPDOWN ON MOBILE VIEW */}

        <div className="relative mx-4">
          <div
            className={
              !drop
                ? "fixed mx-auto bg-white z-30 w-[92%] h-[75%] bottom-[0px] flex justify  border-gray-300 rounded-2xl border ease-in-out duration-700 md:hidden "
                : "fixed z-30 bottom-[-200%] ease-in-out duration-900"
            }
          >
            <div className="relative flex flex-col w-[95%] mx-auto mt-14 z-30 border-gray-600  rounded-3xl md:hidden top-[0px]">
              <div className="bg-white w-fit p-2">
                <form></form>
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
                    className="w-full h-auto border-2 rounded-lg px-5 text-base font-bold  item-center text-[#023e8a] py-1 outline-none"
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LIST FOR JOB VACANCY */}

      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 xl:grid-cols-3 mt-10">
        <div className="flex flex-col col-span-2 ml-10 md:w-3/4 xs:mx-5 md:ml-[80px]">
          {jobVacancy.length === 0 ? (
            <div className="h-screen w-auto text-gray-500 text-xl justify-center items-center text-center">
              <Lottie
                loop
                animationData={NOresult}
                play
                className="mx-auto my-auto"
              />

              <p>Sorry, no results found</p>
            </div>
          ) : (
            jobVacancy
          )}
        </div>

        {/* SIDE LOTTIE */}

        <div className="flex flex-col col-span-1 xs:hidden sm:block lg:w-3/4 mb-4">
          <div className="rounded-lg shadow-lg bg-white md:w-40 lg:w-50 lg:min-w-fit lg:mx-auto ml-5 border border-gray-300 mt-3 ">
            <Lottie
              loop
              animationData={Writing}
              play
              className="mx-auto my-4 md:w-fit md:h-auto"
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
          <div className="rounded-lg shadow-lg bg-white md:w-40 lg:min-w-fit lg:mx-auto ml-5 border border-gray-300 mt-3 ">
            <Lottie
              loop
              animationData={Recruit}
              play
              className="mx-auto my-4 md:h-auto sm:w-fit"
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
