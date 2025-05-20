import CTA from "@/Components/CTA";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Section1 from "@/Components/Section1";
import Section2 from "@/Components/Section2";
import Section3 from "@/Components/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <CTA />
      <Footer />
    </div>
  );
}
