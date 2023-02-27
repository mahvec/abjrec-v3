import React from "react";
import Item from "./Item";
import { COMPANY, FEATURED, SOCIAL, CONTACT } from "./Menus";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-2 min-h-full bg-gradient-to-b xs:pb-4 md:pb-0 bg-slate-100">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-0 sm:px-1 px-0 py-1 text-xs">
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={FEATURED} title="FEATURED" />
        <Item Links={SOCIAL} title="SOCIAL" />
        <Item Links={CONTACT} title="CONTACT" />
      </div>
    </footer>
  );
}

export default Footer;
