import React from "react";

const Item = ({ Links, title }) => {
  return (
    <div>
      <ul>
        <h1 className="mb-1 font-semibold font- text-white pb-6">{title}</h1>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-[#ffffff] hover:text-[#06BEE1] duration-300 text-sm cursor-pointer"
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
