import React from "react";
import logo from "../Assets/images/logo2.svg";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="px-5 sm:px-7 md:px-10 lg:px-20 w-full mt-20 bg-no-repeat bg-cover flex justify-center items-center text-white "
      style={{
        backgroundImage: "url('/images/bg-footer-top-desktop.svg')",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        minHeight: "650px", // Ensures at least the SVG's height is visible
      }}
    >
      <div className="w-full md:w-4/5 flex flex-col-reverse md:flex-row items-center justify-between gap-x-5 gap-y-20 translate-y-10">
        <div className=" md:w-1/2  ">
          <img src={logo.src} alt="" className="w-36 md:w-40 " />
          <p className="text-xs my-5 max-w-4/5 md:max-w-3/4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
            itaque error iure, perspiciatis dolore placeat fuga minima inventore
            cum tempora rerum dolorum quos facilis nostrum natus eaque sapiente
            earum accusamus.
          </p>
          <div className="text-xs mb-2 flex items-center gap-x-2.5">
            <FaPhoneVolume />
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="text-xs  mb-2 flex items-center gap-x-2.5">
            <MdOutlineEmail className="text-sm translate-y-0.5" />
            <p>example@huddle.com</p>
          </div>
          <div className="mt-10 flex gap-x-2.5 text-xl">
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaXTwitter />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h6 className="font-bold text-sm mb-2">NEWSLETTER</h6>
          <p className="text-xs max-w-4/5 md:max-w-2/3">
            To receive tips on how to grow your community, sign up to our weekly
            newsletter. We'll never send you spam or pass on your email address
          </p>
          <div className="mt-5 flex items-center gap-x-5">
            <input
              type="text"
              className="bg-white outline-none text-cyan-950 text-xs px-2 py-1.5 rounded-sm w-full md:w-1/2 font-semibold"
            />
            <button className="bg-pink-500 rounded-sm px-4 py-1.5 text-xs">
              Subsicribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
