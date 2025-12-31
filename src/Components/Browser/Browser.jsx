import React from "react";
import Hero from "../Hero/Hero";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import AboutMyCode from "../AboutMyCode/AboutMyCode";
import Works from "../Works/Works";
import My_Services from "../My_Services/My_Services";
import Contact from "../Contact/Contact";

export default function Browser({ onHeroReady }) {
  return (
    <Box>
      <Navbar />
      <Hero onReady={onHeroReady} />
      <AboutMyCode />
      <Works />
      <My_Services />
      <Contact />
    </Box>
  );
}
