import React, { useState } from "react";
import Link from "next/link";


export const Navbar = () => {
  console.log("navbar");

  const [activeItem, setActiveItem] = useState(1);



  // array of objects for nav items
  const navItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/" },
    { id: 3, label: "Events", path: "/" },
    { id: 4, label: "Help", path: "#footer" },
  ];
  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  return (
    <div className="flex justify-between bg-black  z-50 ">
      <div className="flex justify-start">
       
          <img href="/" src="/logo.svg" className="h-32 w-40" alt="" />
        
      </div>
      <div className="flex m-0">
      <div className="  hidden lg:flex">
      

        <ul className="flex justify-center items-center px-0 ">
          {navItems.map((item) => (
           <li key={item.id} className="text-lg mx-8">
           <Link href={item.path}
                
                  className={`${
                    activeItem === item.id ? "bg-[#FB771B]" : ""
                  } text-white px-4 rounded-lg py-2`}
                  onClick={() => handleItemClick(item.id)}
                >

                  {item.label}
                </Link>
                
              
         </li>
          ))}
        </ul>
      </div>
      <div className="z-50 flex justify-end items-center text-white">
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 "
          >
           {navItems.map((item) => (
           <li key={item.id} className="text-lg">
           <Link href={item.path}
                
                  className={`${
                    activeItem === item.id ? "bg-[#FB771B]" : ""
                  } text-white px-4 rounded-lg py-2`}
                  onClick={() => handleItemClick(item.id)}
                >

                  {item.label}
                </Link>
                
              
         </li>
          ))}
          
          </ul>
        </div>
      </div>

      </div>
      
    </div>
  );
};
