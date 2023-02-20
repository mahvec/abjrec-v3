import React from "react";

const Item = ({ Links, title }) => {
  return (
    <div>
      <ul>
        <h1 className="mb-1 font-bold font- text-[#03256C] py-3">{title}</h1>
        {Links.map((link) => (
          <li key={link.name} className="py-0.5">
            <a
              className="text-[#03256C] hover:text-[#06BEE1] duration-300 text-xs cursor-pointer"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
