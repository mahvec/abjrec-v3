import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schemaIndex";
import "./App1.css";
import { states } from "../State";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Lottie from "react-lottie-player";
import FormPeople from "../../form-people.json";
import axios from "axios";

const onSubmit = async (values, actions, jobId, { setSubmitting }) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();

  axios
    .post(
      `https://zen-spence.52-41-168-181.plesk.page/api/v1/job/${jobId}/apply`,
      values
    )
    .then((response) => {
      console.log(response.data);
      setSubmitting(false);
    })
    .catch((error) => {
      console.error(error);
      setSubmitting(false);
    });
};
// remember to add handleSubmit and error to the const below
const AppForm = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const jobRole = pathname.split("/")[2].split("%20").join(" ");
  const jobId = pathname.split("/")[3];
  console.log(jobId);

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
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      stateCap: "",
      city: "",
      position: "",
      category: "",
      linkedIn: "",
      cv: null,
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

  const [selectedFile, setSelectedFile] = useState([]);
  const [fileBase64String, setFileBase64String] = useState("");

  function onFileChange(e) {
    setSelectedFile(e.target.files);
    encodedBase64(selectedFile[0]);
  }

  const encodedBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        const Base64 = reader.result;
        setFileBase64String(Base64);
      };
      reader.onerror = (error) => {
        console.log("error::: ", error);
      };
    }
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
              <div
                className="relative z-0 w-full mb-6 group "
                data-te-input-wrapper-init
              >
                <label
                  htmlFor="fullName"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Full Name
                </label>
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.fullName && touched.fullName && (
                  <p className="p-0 text-xs text-[#a62d2d] top-0">
                    {errors.fullName}
                  </p>
                )}
              </div>

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

              <div className="relative z-0 w-full mb-6 group ">
                <label
                  htmlFor="phoneNumber"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Phone Number
                </label>
                <input
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="phoneNumber"
                  type="number"
                  name="phoneNumber"
                  className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group ">
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
              </div>

              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="stateCap"
                    className="text-xs font-semibold text-gray-500"
                  >
                    State of Residence
                  </label>
                  <select
                    value={values.stateCap}
                    onChange={stateHandleOnChange}
                    onBlur={handleBlur}
                    id="stateCap"
                    name="stateCap"
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
                  {errors.stateCap && touched.stateCap && (
                    <p className="text-xs text-[#a62d2d] top-0">
                      {errors.stateCap}
                    </p>
                  )}
                </div>

                <div className="relative z-0 w-full mb-6 group ">
                  <label
                    htmlFor="city"
                    className="text-xs font-semibold text-gray-500"
                  >
                    LGA
                  </label>
                  <select
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="city"
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
                  {errors.city && touched.city && (
                    <p className="text-xs text-[#a62d2d] top-0">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative z-0 w-full mb-6 group ">
                <label
                  htmlFor="role"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Role
                </label>
                <input
                  value={jobRole}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="postion"
                  type="text"
                  name="position"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.position && touched.position && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.position}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <label
                  htmlFor="linkedIn"
                  className="text-xs font-semibold text-gray-500 focus:text-blue-600"
                >
                  Link to LinkedIn profile
                </label>
                <input
                  value={values.linkedIn}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="linkedIn"
                  type="text"
                  name="linkedIn"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />

                {errors.linkedIn && touched.linkedIn && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.linkedIn}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block mb-2 text-xs text-gray-500  "
                  htmlFor="cv"
                >
                  Upload CV here
                </label>
                <input
                  id="cv"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={onFileChange}
                  className="block w-full mb-5 text-xs text-gray-400 border  p-1 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
                />
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
