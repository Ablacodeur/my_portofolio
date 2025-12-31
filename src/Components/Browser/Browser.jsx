import React from "react";
import Hero from "../Hero/Hero";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import AboutMyCode from "../AboutMyCode/AboutMyCode";
import Works from "../Works/Works";
import My_Services from "../My_Services/My_Services";
import Contact from "../Contact/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


export default function Browser({ onHeroReady }) {

  gsap.registerPlugin(ScrollTrigger);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  
  return (
    <Box>
      <Navbar />

      <Box ref={heroRef}>
        <Hero onReady={onHeroReady} />
      </Box>

      <Box ref={aboutRef}>
        <AboutMyCode />
      </Box>
      <Works />
      <My_Services />
      <Contact />
    </Box>
  );
}
