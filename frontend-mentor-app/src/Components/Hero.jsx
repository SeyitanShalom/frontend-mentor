import React from "react";
import screenMockup from "../Assets/images/screen-mockups.svg";
import communities from "../Assets/images/icon-communities.svg";
import messages from "../Assets/images/icon-messages.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-5 sm:px-7 md:px-10 lg:px-20 flex flex-col items-center justify-center mt-28 text-cyan-950 dark:text-white">
      <h1 className="text-[30px] md:text-[35px] leading-10 lg:text-[40px] text-center font-bold ">
        Build The Community Your Fans Will Love
      </h1>
      <p className="mt-4 text-sm lg:text-base font-medium  w-96 max-w-120 text-center">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="mt-8 px-8 py-3 lg:px-10 lg:py-4 text-sm font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-400 cursor-pointer transition duration-200 ease-in-out shadow-pink-800  shadow-md">
        Get Started For Free
      </button>
      <img
        src={screenMockup.src}
        alt=""
        className="w-100 sm:w-120 md:w-140 lg:w-160 mt-14"
      />
      <div className="flex items-center justify-center w-lg mt-14 ">
        <div className="flex sm:w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-y-20">
          <div>
            <Image
              src={communities}
              alt=""
              width={20}
              height={20}
              className="w-6"
            />
            <h2 className="text-6xl sm:text-5xl font-bold ">1.4k+</h2>
            <p className="sm:text-xs text-gray-500 font-semibold pt-1">
              Communities Formed
            </p>
          </div>
          <div>
            <Image
              src={messages}
              alt=""
              width={20}
              height={20}
              className="w-6"
            />
            <h2 className="text-6xl sm:text-5xl font-bold ">2.7m+</h2>
            <p className="sm:text-xs text-gray-500 font-semibold pt-1">
              Messages Sent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
