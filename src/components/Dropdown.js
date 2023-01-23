import React from "react";
// import { useState } from "react";
// import {
//   AiOutlineCaretDown,
//   AiOutlineCaretUp,
//   AiOutlineDown,
// } from "react-icons/ai";
// import DropMenu from "./DropMenu";
import { CATEGORY, LOCATION, WORKTIME } from "./DropdownList";

function Dropdown() {
  return (
    <div className="max-w-[1440px] mx-auto xs:hidden md:block">
      <div className="relative flex flex-col sm:w-[63%] lg:w-[670px] h-auto border ml-20 my-5 rounded-lg">
        <div className="pt-2 px-2">
          <select
            name=""
            id=""
            className="w-full h-14 border-2 rounded-lg px-5 text-base font-bold  item-center text-[#023e8a] py-1 outline-none"
          >
            {CATEGORY.map((item) => {
              return (
                <option className="rounded font-semibold px-2" key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="pt-1 px-2">
          <select
            name=""
            id=""
            className="w-full h-14 border-2 rounded-lg px-5 text-base font-bold item-center text-[#023e8a] py-1 outline-none"
          >
            {WORKTIME.map((item) => {
              return (
                <option className="rounded font-semibold px-2" key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="pt-1 px-2 pb-2">
          <select
            name=""
            id=""
            className="w-full h-14 border-2 rounded-lg px-5 text-base font-bold item-center text-[#023e8a] py-1 outline-none"
          >
            {LOCATION.map((item) => {
              return (
                <option className="rounded font-semibold px-2" key={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
