import React from "react";
import Item from "./Item";
import { COMPANY, FEATURED, SOCIAL, CONTACT } from "./Menus";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-2 min-h-full bg-gradient-to-b pb-4 from-[#1768ac] to-[#031d56] md:bg-[#03256C] rounded-t-xl">
      {/* <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                
            </h1>
        </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-1 px-0 py-6 text-sm">
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={FEATURED} title="FEATURED" />
        <Item Links={SOCIAL} title="SOCIAL" />
        <Item Links={CONTACT} title="CONTACT" />
      </div>
    </footer>
  );
}

export default Footer;
