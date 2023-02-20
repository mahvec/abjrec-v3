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

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

// remember to add handleSubmit and error tothe const below
const AppForm = () => {
  const { pathname } = useLocation();
  const jobRole = pathname.split("/")[2].split("%20").join(" ");

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
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
    console.log(e.target.files[0].size);
    console.log(e.target.files[0].type);
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

  encodedBase64(selectedFile[0]);

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
        <div className="flex flex-col justify-center  items-center mb-4">
          <p className="text-[#03256C] text-md uppercase font-semibold">
            Fill In Your Details
          </p>
          <div className="w-5/6 p-4">
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className=" w-full border rounded-xl p-3"
            >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="block py-2.5 my-2 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="fullName"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Enter Your Full Name
                </label>
                {errors.fullName && touched.fullName && (
                  <p className="p-0 text-xs text-[#a62d2d] top-0">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group ">
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  type="email"
                  name="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email address
                </label>
                {errors.email && touched.email && (
                  <p className="text-xs text-[#a62d2d] top-0">{errors.email}</p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group ">
                <input
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phoneNumber"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Phone number (080-****-****)
                </label>
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group ">
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
                <label
                  htmlFor="address"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Residential Address
                </label>
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
                    className="w-full text-sm border-0 border-b-2 text-center capitalize border-gray-300 focus:ring-0 focus:border-blue-600 focus:outline-none bg-transparent"
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
                <label
                  htmlFor="position"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Role
                </label>
                {errors.position && touched.position && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.position}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group">
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
                <label
                  htmlFor="linkedIn"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Link to LinkedIn profile
                </label>
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
                  onClick={(event) => {
                    event.preventDefault();
                    encodedBase64(selectedFile[0]);
                    console.log(fileBase64String);
                  }}
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

// w-[90%] text-xs mb-2 pl-2 bg-transparent  border-0 border-b-2 shadow-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer
