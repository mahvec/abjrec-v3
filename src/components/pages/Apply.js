import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { STATES } from "../State";
import { CATEGORY, WORKTIME } from "../DropdownList";

function Apply() {
  return (
    <div>
      <Navbar />
      <div className="p-3 md:grid md:grid-cols-2 bg-blue-100">
        <div className="md:col-span-1 flex flex-col justify-center items-center h-fit md:h-screen">
          <div>
            <h2 className="text-2xl font-bold m-9">
              One Step Closer To Your Dream Job
            </h2>
            <p className="text-lg font-semibold m-9">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center mb-4">
          <div className="block bg-white p-6 rounded-xl shadow-md shadow-slate-300 mb-4 border">
            <form action="">
              <h2 className=" font-semibold text-lg">APPLICATION FORM</h2>

              {/* full name */}
              <div className=" border p-3 rounded-xl">
                <h3 className="m-2">Personal Information</h3>
                <div id="fullName" className="">
                  {/* first name */}
                  <div id="firstName">
                    <label htmlFor="fname" className="text-sm">
                      First Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id="fname"
                      className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                    />
                  </div>

                  {/* last name */}
                  <div id="lastName">
                    <label htmlFor="lname" className="text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id="lname"
                      className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                    />
                  </div>
                </div>

                {/* email */}
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                />

                {/* phone Number */}
                <label htmlFor="phone" className="text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name=""
                  id="tel"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                />

                {/* address */}
                <div id="address">
                  <label htmlFor="address" className="text-sm">
                    Address
                  </label>
                  <input
                    type="text"
                    name=""
                    id="address"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                  />
                </div>

                {/* State */}
                <label htmlFor="address" className="text-sm">
                  State
                </label>
                <select
                  name="State"
                  id="state"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                >
                  {STATES.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>

                {/* City */}
                <label htmlFor="address" className="text-sm">
                  City
                </label>
                <input
                  type="text"
                  name=""
                  id="address"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                />
              </div>
              <br />
              <div className="border rounded-xl p-4">
                <h3>Position</h3>
                <div>
                  <label htmlFor="address" className="text-sm">
                    Position you are applying for
                  </label>
                  <input
                    type="text"
                    name=""
                    id="address"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="text-sm">
                    Category
                  </label>
                  <select
                    name=""
                    id=""
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 mb-3 shadow-sm"
                  >
                    {CATEGORY.map((cat) => {
                      return (
                        <option value={cat.id} key={cat.id}>
                          {cat.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Employment Desired
                  </label>
                  <select
                    name=""
                    id=""
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 mb-3 shadow-sm"
                  >
                    {WORKTIME.map((work) => {
                      return (
                        <option value={work.id} key={work.id}>
                          {work.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* c.v upload */}
                <div>
                  <label htmlFor="address" className="text-sm items-end">
                    Upload C.V
                  </label>
                  <input
                    type="file"
                    name=""
                    id="address"
                    className="h-8 w-full rounded-md border border-slate-300 text-xs pl-2 bg-transparent outline-blue-600 mb-3 shadow-sm p-1"
                  />
                </div>
                <button className="bg-blue-800 w-full h-10 rounded-lg text-md font-semibold text-white hover:bg-blue-600 shadow-md p-1 px-4 relative items-end">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
