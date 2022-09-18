import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFacebook, BsTelegram, BsYoutube } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 mx-auto px-4 md:px-10 text-black bg-[#fcd5d5]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <img src="/img.jpg" alt="" className="w-14 rounded-md" />
      </h1>
      <ul className="hidden md:flex">
        <Link
          to="/"
          className="p-4 hover:text-slate-700 hover:border-b-2 border-gray-700"
        >
          {" "}
          Home{" "}
        </Link>
        <Link
          to="/Products"
          className="p-4 hover:text-slate-700 hover:border-b-2 hover:border-gray-800"
        >
          Products
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fcd5d5] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] text-black"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <img src="img.jpg" alt="" className="w-14 rounded-md" />
        </h1>
        <Link
          to="/"
          className="block p-4 border-b border-gray-600 hover:text-slate-700 hover:border-b-2 hover:border-gray-700"
        >
          Home
        </Link>
        <Link
          to="/Products"
          className="block p-4 border-b border-gray-600 hover:text-slate-700 hover:border-b-2 hover:border-gray-700"
        >
          Procucts
        </Link>
        <div className="flex text-gray-500 p-2 gap-3 justify-center">
          <BsTelegram size={25} className="hover:text-white " />
          <BsFacebook size={25} className="hover:text-white " />
          <BsYoutube size={25} className="hover:text-white " />
          <SiGmail size={25} className="hover:text-white " />
          <FaTiktok size={25} className="hover:text-white " />
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
