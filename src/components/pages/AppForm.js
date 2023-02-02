import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schemaIndex";
import "./App1.css";
import { STATES } from "../State";
import { CATEGORY } from "../DropdownList";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

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
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      stateCap: "",
      city: "",
      position: "",
      category: "",
      linkedIn: "",
      cv: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div>
      <Navbar />
      <div className="p-3 md:grid md:grid-cols-2 ">
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
          <div className="block p-6 rounded-xl  bg-gradient-to-r from-pink-50 to-cyan-50 shadow-lg shadow-slate-300 mb-4 border">
            <form app onSubmit={handleSubmit} autoComplete="off">
              <h2 className=" font-semibold text-lg font-poppins ml-2 text-[#03256C]">
                APPLICATION FORM
              </h2>
              <div className=" border p-3 rounded-xl m-1 bg-white">
                <label
                  htmlFor="fullName"
                  className="text-xs font-semibold text-[#03256C]"
                >
                  Full Name
                </label>
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="fullName"
                  type="text"
                  placeholder="Enter full name"
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600 shadow-sm"
                />
                {errors.fullName && touched.fullName && (
                  <p className="p-0 text-xs text-[#a62d2d] top-0">
                    {errors.fullName}
                  </p>
                )}

                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-[#03256C]"
                >
                  Email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2 bg-transparent outline-blue-600 shadow-sm"
                />
                {errors.email && touched.email && (
                  <p className="text-xs text-[#a62d2d] top-0">{errors.email}</p>
                )}

                <label
                  htmlFor="phoneNumber"
                  className="text-xs font-semibold text-[#03256C]"
                >
                  Phone Number
                </label>
                <input
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="phoneNumber"
                  type="number"
                  placeholder=""
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600 shadow-sm"
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.phoneNumber}
                  </p>
                )}

                <label
                  htmlFor="address "
                  className="text-xs font-semibold text-[#03256C]"
                >
                  Address
                </label>
                <input
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="address"
                  type="text"
                  placeholder="Address"
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600  shadow-sm"
                />
                {errors.address && touched.address && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.address}
                  </p>
                )}

                <label
                  htmlFor="address "
                  className="text-xs font-semibold text-[#03256C]"
                >
                  State
                </label>
                <select
                  value={values.stateCap}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="stateCap"
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600  shadow-sm"
                >
                  {STATES.map((item) => {
                    return (
                      <option value={item.name} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {errors.stateCap && touched.stateCap && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.stateCap}
                  </p>
                )}

                <label
                  htmlFor="city"
                  className="text-xs font-semibold text-[#03256C]"
                >
                  City/Town
                </label>
                <input
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="city"
                  type="text"
                  placeholder="City/Town you live in"
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600  shadow-sm"
                />
                {errors.city && touched.city && (
                  <p className="text-xs text-[#a62d2d] top-0">{errors.city}</p>
                )}

                <label
                  htmlFor="position"
                  className="text-xs font-semibold text-[#03256C]"
                >
                  Postion You're Applying For
                </label>
                <input
                  value={values.position}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="position"
                  type="text"
                  placeholder=""
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600  shadow-sm"
                />
                {errors.city && touched.city && (
                  <p className="text-xs text-[#a62d2d] top-0">{errors.city}</p>
                )}

                <label
                  htmlFor="address "
                  className="text-xs font-semibold text-[#03256C]"
                >
                  Category
                </label>
                <select
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="category"
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600  shadow-sm"
                >
                  {CATEGORY.map((item) => {
                    return (
                      <option value={item.name} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                {errors.category && touched.category && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.category}
                  </p>
                )}

                <label
                  htmlFor="linkedIn"
                  className="text-xs font-semibold text-[#03256C]"
                >
                  Link to LinkedIn Profile
                </label>
                <input
                  value={values.linkedIn}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="linkedIn"
                  type="text"
                  placeholder=""
                  className="h-7 p-1 w-full rounded-md border border-slate-300 text-xs mb-2 pl-2bg-transparent outline-blue-600  shadow-sm"
                />
                {errors.linkedIn && touched.linkedIn && (
                  <p className="text-xs text-[#a62d2d] top-0">
                    {errors.linkedIn}
                  </p>
                )}

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
