import React from "react";
import usersImage from "../Assets/images/illustration-your-users.svg";

const Section3 = () => {
  return (
    <div
      className="px-5 sm:px-7 md:px-10 lg:px-20  mb-10 bg-no-repeat flex justify-center items-center text-cyan-950"
      style={{
        backgroundImage: "url('/images/merge-desktop-2.svg')",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        minHeight: "750px", // Ensures at least the SVG's height is visible
      }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full md:w-4/5  md:gap-x-10 gap-y-16 -mt-16">
        <div className="flex flex-col md:justify-center items-center md:items-start w-2/3 md:w-1/2 ">
          <h3 className="font-bold text-2xl md:text-3xl  mb-3">Your Users</h3>
          <p className="font-semibold text-sm max-w-120 text-center md:text-start">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={usersImage.src} alt="" className="w-80 md:w-120" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
