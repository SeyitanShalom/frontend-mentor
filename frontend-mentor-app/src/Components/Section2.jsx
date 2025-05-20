import React from "react";
import convoImage from "../Assets/images/illustration-flowing-conversation.svg";
import Image from "next/image";
const Section2 = () => {
  return (
    <div className="px-5 sm:px-7 md:px-10 lg:px-20 w-full flex items-center justify-center mb-20 text-cyan-950 ">
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-4/5  md:gap-x-10 gap-y-16 ">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={convoImage.src} alt="" className="w-80 md:w-120" />
        </div>
        <div className="flex flex-col md:justify-center items-center md:items-start w-9/10 md:w-1/2">
          <h3 className="font-bold text-2xl md:text-3xl mb-3">
            Flowing Conversations
          </h3>
          <p className="font-semibold text-sm max-w-120 text-center md:text-start">
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
