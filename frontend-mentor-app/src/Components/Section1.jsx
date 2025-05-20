import React from "react";
import growImage from "../Assets/images/illustration-grow-together.svg";

const Section1 = () => {
  return (
    <div
      className="px-5 sm:px-7 md:px-10 lg:px-20 mt-10 bg-no-repeat bg-cover mb-20 flex justify-center items-center text-cyan-950 h-[800px]"
      style={{
        backgroundImage: "url('/images/merge-desktop-1.svg')",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        //   minHeight: "800px", // Ensures at least the SVG's height is visible
      }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full md:w-4/5  md:gap-x-10 gap-y-16 mt-16">
        <div className="flex flex-col md:justify-center items-center md:items-start w-2/3 md:w-1/2 ">
          <h3 className="font-bold text-2xl md:text-3xl  mb-3">
            Grow Together
          </h3>
          <p className="font-semibold text-sm max-w-120 text-center md:text-start">
            Generate meaningful conversations with your audience and build a
            strong loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={growImage.src} alt="" className="w-80 md:w-120" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
