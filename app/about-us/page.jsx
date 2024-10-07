import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FAQ from "../components/FAQ";

export default function page() {
  return (
    <>
      <Hero title="About Us" />
      <About />
      <FAQ />
    </>
  );
}
