import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { STATES } from "../State";
import { CATEGORY, WORKTIME } from "../DropdownList";

function Apply() {
  return (
    <div>
      <Navbar />
      <div className="p-3 flex md:grid md:col-span-1">
        <div></div>
        <div className="flex justify-center items-center bg-slate-200">
          <div className="block bg-white p-6 rounded-xl shadow-md shadow-slate-300">
            <form action="">
              <h2 className="">APPLICATION FORM</h2>
              {/* full name */}
              <div className=" border p-3 rounded-xl">
                <h3>Personal Information</h3>
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
                      className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
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
                      className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
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
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
                />
                {/* phone Number */}
                <label htmlFor="phone" className="text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name=""
                  id="tel"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
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
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
                  />
                </div>
                {/* State */}
                <label htmlFor="address" className="text-sm">
                  State
                </label>
                <select
                  name="State"
                  id="state"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
                >
                  {STATES.map((item, i) => {
                    return (
                      <option value="" key={item.id}>
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
                  className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
                />
              </div>
              <br />
              <div>
                <h3>Position</h3>
                <div>
                  <label htmlFor="address" className="text-sm">
                    Position you are applying for
                  </label>
                  <input
                    type="text"
                    name=""
                    id="address"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="text-sm">
                    Category
                  </label>
                  <select
                    name=""
                    id=""
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
                  >
                    {CATEGORY.map((c) => {
                      return <option key={c.id}>{c.name}</option>;
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
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm"
                  >
                    {WORKTIME.map((work) => {
                      return <option key={work.id}>{work.name}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="address" className="text-sm">
                    Upload C.V
                  </label>
                  <input
                    type="file"
                    name=""
                    id="address"
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2bg-transparent outline-blue-600 shadow-sm p-1"
                  />
                </div>
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
