import React, { useState, useCallback, useEffect } from "react";
// import { BsFilterCircle } from "react-icons/bs";
// import { AiOutlineClose } from "react-icons/ai";
import Lottie from "react-lottie-player";
import Writing from "../assets/writing.json";
import Recruit from "../assets/recruiter.json";
// import { CATEGORY as CATEGORIES } from "./DropdownList";
import { Slide } from "react-awesome-reveal";
import moment from "moment/moment";
import NOresult from "../noresult.json";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import AbujaIcon from "../assets/images/abujaicon.png";

function JobInfo() {
  // const [search, setSearch] = useState("");
  const [category] = useState(null);
  // const [drop, setDrop] = useState(true);
  // const handleDrop = () => setDrop(!drop);
  // const [jobData, setJobData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const jobsPerPage = 5;

  const [state, setState] = useState({
    search: "",
    category: null,
    jobData: [],
    filteredJobs: [],
    pageNumber: 0,

    isLoading: false,
  });

  useEffect(() => {
    jobList();
  }, []);

  const jobList = async () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    console.log("LOADING::: ", state.isLoading);

    try {
      const response = await axios({
        method: "GET",
        url: "https://zen-spence.52-41-168-181.plesk.page/api/v1/jobs",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        const jobs = response.data.jobs;
        setState((prevState) => ({
          ...prevState,
          jobData: jobs,
          filteredJobs: jobs,
          isLoading: false,
        }));
      }
      console.log("RESPONSE::: ", response);
      console.log("LOADING::: ", state.isLoading);
    } catch (error) {
      let errorMessage;
      if (error.errors) {
        errorMessage = error.errors[0];
        console.log(errorMessage);
      } else {
        errorMessage = error.response.data.message;
        console.log(errorMessage);
      }
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
      console.log(error);
    }
  };

  const myJobs = () => {
    if (state.search !== "") {
      const jobs = state.jobData.filter((job) =>
        job.title.toLowerCase().includes(state.search.toLowerCase())
      );

      const offset = pageNumber * jobsPerPage;
      const currentJobs = jobs.slice(offset, offset + jobsPerPage);

      return setState((prevState) => ({
        ...prevState,
        filteredJobs: currentJobs,
      }));
    }
  };

  const handlePageClick = (selected) => {
    setState((prevState) => ({
      ...prevState,
      pageNumber: selected,
    }));
  };

  const jobVacancy = state.filteredJobs.map((job) => (
    <Slide key={job.id} delay={0.1}>
      <div className="block rounded-3xl  shadow-lg sm:max-w-md md:max-w-md lg:max-w-xl  mb-10 border-2 border-gray-200">
        <div className="grid grid-cols-5 gap-4 p-2">
          <div className=" p-1">
            <div className=" rounded-xl h-full bg-gradient-to-r flex  font-extrabold font-serif md:text-[20px] md:items-baseline lg:text-[20px] xl:text-[40px] text-[#023e8a]">
              <div className="m-auto">
                <img src={AbujaIcon} alt="" className="h-14 w-auto" />
              </div>
            </div>
          </div>
          <div className="col-span-4 mb-1">
            <p className="font-bold text-md md:text-lg lg:text-xl left uppercase text-black mr-1 ">
              {job.title}
            </p>
            <p className="text-sm font-semibold pr-1 text-[#E40066]">
              {job.role}
            </p>
            <p className="text-xs italic pr-3">Posted by: H.R</p>
          </div>
        </div>
        <div className="border-t p-2 text-xs text-black ">
          <p>{job.description}</p>
        </div>
        <div className="border-t h-fit my-2">
          <p className=" text-start text-xs px-2 text-black">
            Published: {moment(job.publishedDate).format("DD/MM/YYYY")}
          </p>
          <p className=" text-start text-xs px-2 text-black">
            Application end:
            {moment(job.applicationEndDate).format("DD/MM/YYYY")}
          </p>
        </div>
        <div className="border-t  font-semibold p-2 text-end px-4 py-2">
          <NavLink
            // to={"/formpage/" + job.title + "/" + job.id}
            to={{ pathname: `/formpage/${job.id}` }}
            state={{ job }}
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
        {/* when category dropdown is included then search and categorymust be made into grid */}
        <div className=" md:mx-10 mt-5 mb-8 xs:w-[90%] justify-center items-center max-w-[720px] ">
          <p>LOADING::: {state.isLoading ? "TRUE" : "FALSE"}</p>
          <form
            action=""
            className="md:col-span-2  h-10 border-2 rounded-lg  grid grid-cols-12 ml-5"
          >
            <span className="col-span-11">
              <input
                onChange={(e) => {
                  setState((prevState) => ({
                    ...prevState,
                    search: e.target.value,
                  }));
                }}
                onKeyUp={() => myJobs()}
                type="search"
                placeholder="Search for vacancy"
                className="h-9 w-full p-2 text-sm outline-none"
              />
            </span>
          </form>
        </div>

        {/* DROPDOWN ON MOBILE VIEW */}

        {/* <div className="relative mx-4">
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
        </div> */}
      </div>

      {/* LIST FOR JOB VACANCY */}
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 xl:grid-cols-3 mt-10">
        <div className="flex flex-col col-span-2 ml-10 md:w-3/4 xs:mx-5 md:ml-[80px]">
          {state.isLoading ? (
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

          <ReactPaginate
            pageCount={Math.ceil(state.filteredJobs.length / jobsPerPage)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center mt-8 mb-6"}
            pageClassName={
              "mx-2 p-2 rounded-lg border-2 hover:bg-blue-500 hover:text-white font-medium text-gray-500 cursor-pointer"
            }
            previousClassName={
              "mx-2 p-2 rounded-lg border-2 hover:bg-blue-500 hover:text-white font-medium text-gray-500 cursor-pointer"
            }
            nextClassName={
              "mx-2 p-2 rounded-lg border-2 hover:bg-blue-500 hover:text-white font-medium text-gray-500 cursor-pointer"
            }
            activeClassName={"bg-blue-500 text-white "}
          />
        </div>

        {/* SIDE LOTTIE */}
        <div className="flex flex-col col-span-1 xs:hidden md:block lg:w-3/4 mb-4">
          <div className="rounded-lg shadow-lg bg-white md:w-40 lg:w-50 lg:min-w-fit lg:mx-auto ml-5 border border-gray-300 mt-3 ">
            <Lottie
              loop
              animationData={Writing}
              play
              className="mx-auto my-4 md:w-fit md:h-auto"
            />
            <div className="p-6 xs:pr-3">
              <p className="font-medium text-xs text-black">
                At Abuja Recruiter, we value diversity and are committed to
                creating an inclusive workplace that welcomes individuals of all
                backgrounds. We believe that embracing diversity leads to a
                culture of creativity and collaboration, where unique
                perspectives and experiences are celebrated.
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
              <p className="font-medium text-xs text-black">
                To apply for a position at Abuja Recruiter, simply click on the
                APPLY button on your prefered job. Our recruitment team will
                review your application, and if you are selected to move forward
                in the process, you will be contacted to schedule an interview
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
