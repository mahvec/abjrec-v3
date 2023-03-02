import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schemaIndex";
import * as yup from "yup";
import "./App1.css";
import { states } from "../State";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Lottie from "react-lottie-player";
import FormPeople from "../../form-people.json";
import axios from "axios";

const AppForm = () => {
  // const onSubmit = async (values, actions, jobId, { setSubmitting }) => {
  //   console.log(values);
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   actions.resetForm();

  //   const formData = new FormData();
  //   formData.append("name", values.name);
  //   formData.append("email", values.email);
  //   formData.append("phone", values.phone);
  //   formData.append("cover_letter", values.cover_letter);
  //   formData.append("state", values.state);
  //   formData.append("local_government", values.local_government);
  //   formData.append("resume", values.resume);
  //   formData.append("linkedin_profile", values.linkedin_profile);
  //   formData.append("nin", values.nin);
  //   axios
  //     .post(
  //       `https://zen-spence.52-41-168-181.plesk.page/api/v1/job/${jobId}/apply`,
  //       formData
  //     )
  //     .then((response) => {
  //       console.log(formData);
  //       setSubmitting(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setSubmitting(false);
  //     });
  // };

  const onSubmit = (values, action) => {
    console.log(values);
    console.log(action);
  };

  const { pathname } = useLocation();
  const jobRole = pathname.split("/")[2].split("%20").join(" ");
  const jobId = pathname.split("/")[3];

  const [jobhi, setJobhi] = useState("");
  function handleChanger(e) {
    setJobhi(e.target.value);
  }
  // console.log(jobhi);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      cover_letter: "",
      state: "",
      local_government: "",
      resume: null,
      linkedin_profile: "",
      nin: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const [, setState] = useState();
  const [lga, setLga] = useState([]);

  function handleState(event) {
    setState(event.target.value);
    setLga(
      states.find(({ state }) => state.name === event.target.value).state.locals
    );
  }

  function stateHandleOnChange(event) {
    handleChange(event);
    handleState(event);
  }

  const uploadPdf = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const Base64 = await convertBase64(file);
    console.log(Base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="p-3 md:grid md:grid-cols-2 max-w-[1440px] mx-auto ">
        <div className="md:col-span-1 h-fit md:h-full justify items-center">
          <div className=" text-center my-auto h-fit pt-14">
            <p className="text-xl md:text-3xl overflow-hidden p-0 pt-20 font-bold uppercase text-[#b9332f]">
              One Step Closer To Your Dream Job
            </p>
          </div>
          <div className="h-fit mx-auto my-auto overflow-hidden pt-10 justify-center items-center ">
            <Lottie
              loop
              animationData={FormPeople}
              play
              className="w-2/4 mx-auto md:block xs:hidden p-0 m-0  h-auto"
            />
          </div>
        </div>

        {/* APPLICATION FORM */}
        <div className="mb-4 flex flex-col justify-center items-center">
          <p className="text-[#03256C] text-md uppercase font-semibold">
            Fill In Your Details
          </p>
          <div className="w-full p-4">
            <form onSubmit={handleSubmit} autoComplete="off" className="p-3">
              {/* FULL NAME */}
              <div
                className="relative z-0 w-full mb-6 group "
                data-te-input-wrapper-init
              >
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Full Name
                </label>
                <input
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="name"
                  type="text"
                  name="name"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.name && touched.name && (
                  <p className="p-0 text-xs text-[#a62d2d] top-0">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="relative z-0 w-full mb-6 group ">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  type="email"
                  name="email"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.email && touched.email && (
                  <p className="text-xs text-[#a62d2d] top-0">{errors.email}</p>
                )}
              </div>

              {/* PHONE NUMBER */}
              <div className="relative z-0 w-full mb-6 group ">
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Phone Number
                </label>
                <input
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="phone"
                  type="number"
                  name="phone"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.phone && touched.phone && (
                  <p className="text-xs text-[#a62d2d] top-0">{errors.phone}</p>
                )}
              </div>

              {/* ADDRESS */}
              {/* <div className="relative z-0 w-full mb-6 group ">
                <label
                  htmlFor="address"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Residential Address
                </label>
                <input
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="address"
                  type="text"
                  name="address"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.address && touched.address && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.address}
                  </p>
                )}
              </div> */}

              {/* ROLE */}
              <div className="relative z-0 w-full mb-6 group ">
                <label
                  htmlFor="role"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Role
                </label>
                <input
                  key={jobId}
                  value={jobRole}
                  onChange={handleChanger}
                  onBlur={handleBlur}
                  id="cover_letter"
                  type="text"
                  name="cover_letter"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.cover_letter && touched.cover_letter && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.cover_letter}
                  </p>
                )}
              </div>

              {/* STATE & LOCAL_GOVERNMENT */}
              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="stateCap"
                    className="text-xs font-semibold text-gray-500"
                  >
                    State of Residence
                  </label>
                  <select
                    value={values.state}
                    onChange={stateHandleOnChange}
                    onBlur={handleBlur}
                    id="state"
                    name="state"
                    placeholder="State of Residence"
                    className="w-full text-sm border-0 border-b-2 capitalize border-gray-300 focus:ring-0 focus:border-blue-600 focus:outline-none bg-transparent"
                  >
                    {states.map(({ state }) => {
                      return (
                        <option value={state.name} key={state.id} className="">
                          {state.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.state && touched.state && (
                    <p className="text-xs text-[#a62d2d] top-0">
                      {errors.state}
                    </p>
                  )}
                </div>

                <div className="relative z-0 w-full mb-6 group ">
                  <label
                    htmlFor="capital"
                    className="text-xs font-semibold text-gray-500"
                  >
                    LGA
                  </label>
                  <select
                    value={values.local_government}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="local_government"
                    className="w-full text-sm border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-blue-600 focus:outline-none bg-transparent"
                  >
                    {lga.map((lg) => {
                      return (
                        <option value={lg.name} key={lg.id}>
                          {lg.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.local_government && touched.local_government && (
                    <p className="text-xs text-[#a62d2d] top-0">
                      {errors.local_government}
                    </p>
                  )}
                </div>
              </div>

              {/* RESUME */}
              <div>
                <label
                  className="block mb-2 text-xs text-gray-500  "
                  htmlFor="resume"
                >
                  Upload CV here
                </label>
                <input
                  id="resume"
                  type="file"
                  accept=".pdf"
                  required
                  // onChange={onFileChange}
                  onChange={(e) => {
                    uploadPdf(e);
                  }}
                  className="block w-full mb-5 text-xs text-gray-400 border  p-1 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
                />
              </div>

              {/* //linked in // */}
              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="linkedin_profile"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Link to LinkedIn profile
                </label>
                <input
                  value={values.linkedin_profile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="linkedin_profile"
                  type="text"
                  name="linkedin_profile"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.linkedin_profile && touched.linkedin_profile && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.linkedin_profile}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group ">
                <label
                  htmlFor="nin"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  NIN
                </label>
                <input
                  value={values.nin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="nin"
                  type="number"
                  name="nin"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.nin && touched.nin && (
                  <p className="text-xs text-[#a62d2d] top-0">{errors.nin}</p>
                )}
              </div>

              <Link to="/success">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="bg-blue-800 w-full mt-2 h-10 rounded-lg text-md font-semibold text-white hover:bg-blue-600 shadow-md p-1 px-4 relative items-end"
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppForm;
