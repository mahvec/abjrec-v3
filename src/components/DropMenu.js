import React from 'react'

function DropMenu({ Drops, title}) {
  return (
    <div>
      <ul>
        <li>{title}</li>
        {Drops.map((drop) => (
          <li
            key={drop.name}
            className="p-2 m-0 text-sm hover:bg-sky-600 hover:text-white"
          >
            {drop.name}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default DropMenu