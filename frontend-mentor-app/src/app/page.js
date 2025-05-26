"use client";
import CTA from "@/Components/CTA";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Section1 from "@/Components/Section1";
import Section2 from "@/Components/Section2";
import Section3 from "@/Components/Section3";
import Image from "next/image";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"} relative`}>
      <div className="overflow-x-hidden bg-white dark:bg-cyan-950">
        <Navbar />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <CTA />
        <Footer />
      </div>
      {/* <button className="">{darkMode ? "LHT" : "DRK"}</button> */}
      <button
        className=" fixed right-10 bottom-20 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-800 dark:hover:bg-pink-400 dark:hover:text-white transition-all duration-300 ease-in-out z-50 shadow-lg cursor-pointer"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <FaSun className=" text-2xl" />
        ) : (
          <FaMoon className=" text-2xl" />
        )}
      </button>
    </div>
  );
}
