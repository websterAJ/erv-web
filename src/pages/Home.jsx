import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/sections/Header";
import About from "@/sections/About";
import Events from "@/sections/Events";
import Gallery from "@/sections/Gallery";
import Quote from "@/sections/Quote";
import Contact from "@/sections/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Events />
      <Gallery />
      <Quote />
      <Contact />
    </>
  );
};

export default Home;
