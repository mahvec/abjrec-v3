import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillHome,
  AiFillInfoCircle,
} from "react-icons/ai";
import { MdFindInPage } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => setNav(!nav);

  const activeStyle = {
    backgroundColor: "#2D3142",
    color: "#ffffff",
    height: "45px",
    transition: "all 2s ease-in-out 0.5s",
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 text-[#03256C]">
        <h1 className="md:text-2xl xs:sm:md:text-2xl text-xl w-full text-[#03256C]  font-bold">
          <Link to="/">Abuja Recruiter</Link>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4 text-sm font-bold pr-6">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 text-sm w-[140px] bg-[#03256C] rounded-md text-white px-4 font-bold">
            <Link to="/job">Find A Job</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? " fixed left-0 top-0 w-[70%] h-screen border-r border-r-gray-300 bg-white ease-in-out duration-500 z-50 "
              : "fixed left-[-200%] z-50 ease-in-out duration-200"
          }
        >
          <h1 className="w-full xs:w-full text-[#03256C] text-3xl font-bold m-6 bg-white">
            <Link to="/" className="xs:text-xl">
              Abuja Recruiter
            </Link>
          </h1>
          <ul className="pt-10 uppercase p-4">
            <li className="p-4 border-b border-b-gray-600 text-sm">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 border-b border-b-gray-600 text-sm ">
              <Link to="/job">Find A Job</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" rounded-tl-xl rounded-tr-xl md:hidden flex fixed inset-x-0 bottom-0 z-10 bg-slate-400 shadow items-center justify-evenly h-10 text-xs font-medium">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
          className=" w-24 items-center  text-center text-[#03256C] bg-slate-400 rounded-tl-xl rounded-tr-xl h-full mt-3"
        >
          <AiFillHome className="ml-10 active:border-2 active:rounder-md" />
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/about"
          className=" w-24 items-center  text-center text-[#03256C] bg-slate-400 rounded-tl-xl rounded-tr-xl h-full mt-3"
        >
          <AiFillInfoCircle className="ml-10 active:border-2 active:rounder-md" />
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/job"
          className=" w-24 items-center  text-center text-[#03256C] bg-slate-400 rounded-tl-xl rounded-tr-xl h-full mt-3"
        >
          <MdFindInPage className="ml-10 active:border-2 active:rounder-md" />
          Find Job
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
