import React from "react";

const CTA = () => {
  return (
    <div className="px-5 sm:px-7 md:px-10 lg:px-20 flex items-center justify-center mb-20">
      <div className="flex flex-col items-center">
        <h3 className="text-[30px] lg:text-[40px] font-bold text-cyan-950 dark:text-white text-center leading-9">
          Ready To Build Your Community?
        </h3>
        <button className="mt-8 px-8 py-3 lg:px-10 lg:py-4 text-sm font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-400 cursor-pointer transition duration-200 ease-in-out shadow-pink-800  shadow-md">
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

export default CTA;
