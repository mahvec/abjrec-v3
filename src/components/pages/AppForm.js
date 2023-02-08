import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schemaIndex";
import "./App1.css";
import { states } from "../State";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { number, string } from "yup";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(values);
  actions.resetForm();
};

// remember to add handleSubmit and error tothe const below
const AppForm = () => {
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
      fullName: string,
      email: string,
      phoneNumber: number,
      address: string,
      stateCap: string,
      city: string,
      position: string,
      category: string,
      linkedIn: string,
      cv: string,
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const [state, setState] = useState();
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

  return (
    <div>
      <Navbar />
      <div className="p-3 md:grid md:grid-cols-2 max-w-[1440px] mx-auto">
        <div className="md:col-span-1 flex flex-col justify-center items-center h-fit md:h-screen">
          <div>
            <h2 className="text-3xl overflow-hidden font-bold m-10 uppercase text-[#03256C]">
              One Step Closer To Your Dream Job
            </h2>
            <p className="text-lg font-semibold mx-9 my-14 text-[#03256C]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        {/* APPLICATION FORM */}
        <div className="flex flex-col justify-center  items-center mb-4">
          <p className="text-[#03256C] ">Fill In Your Details</p>
          <div className="w-5/6 p-4">
            <form
              app
              onSubmit={handleSubmit}
              autoComplete="off"
              className=" w-full"
            >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="block py-2.5  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_fullName"
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
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                  type="number"
                  name="phoneNumber"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phoneNumber"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                    className="text-xs font-semibold text-[#03256C]"
                  >
                    STATE
                  </label>
                  <select
                    value={values.stateCap}
                    onChange={stateHandleOnChange}
                    onBlur={handleBlur}
                    id="stateCap"
                    name="stateCap"
                    className=" w-full text-xs mb-2 pl-2 bg-transparent  border-0 border-b-2 shadow-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                    {states.map(({ state }) => {
                      return (
                        <option value={state.name} key={state.id}>
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
                    className="text-xs font-semibold text-[#03256C]"
                  >
                    LGA
                  </label>
                  <select
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="city"
                    className="w-full text-xs mb-2 pl-2 bg-transparent  border-0 border-b-2 shadow-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                  value={values.position}
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
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Link to LinkedIn profile
                </label>
                {errors.linkedIn && touched.linkedIn && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.linkedIn}
                  </p>
                )}
              </div>

              {/* <div>
                  <label
                    htmlFor="C.V"
                    className="text-xs font-semibold text-[#03256C]"
                  >
                    Upload C.V
                  </label>
                  <input
                    value={values.cv}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="cv"
                    type="file"
                    placeholder=""
                    accept=".pdf, .doc, .docx, .txt, .jpg, .psd, .html"
                    className="h-8 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600  shadow-sm"
                    required
                  />
                </div> */}

              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="small_size"
                >
                  Small file input
                </label>
                <input
                  value={values.cv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="cv"
                  type="file"
                  placeholder=""
                  accept=".pdf, .doc, .docx, .txt, .jpg, .psd, .html"
                  required
                  class="block w-full mb-5 text-xs text-gray-400 border  p-1 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
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
