import React from "react";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Packages from "../components/Packages";

export default function Page() {
  return (
    <>
      <Hero title="Services" />
      <Packages />
      <CTA />
    </>
  );
}
