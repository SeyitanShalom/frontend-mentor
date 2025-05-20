import React from "react";
import Image from "next/image";
import logo from "../Assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="px-5 sm:px-7 md:px-10 lg:px-20 flex justify-between items-center mt-5  md:mt-7 lg:mt-10">
      <Image
        src={logo}
        alt="Logo"
        className="w-28 sm:w-32 md:w-36 lg:w-40 "
        width={100}
        height={100}
      />
      <button className="text-pink-500 border-2 border-pink-500 rounded-full text-xs px-3 py-0.5 lg:px-6 lg:py-2 hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out cursor-pointer shadow-pink-500  shadow-md">
        Try it Free
      </button>
    </div>
  );
};

export default Navbar;
