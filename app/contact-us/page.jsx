import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

export const metadata = {
  title: "Contact Us | Capital AEther1",
  description:
    "Contact Developers Junction Tech Now! Email: info@developersjunctiontech.com, Phone No: 1234567890",
};

export default function page() {
  return (
    <>
      <Hero title="Contact Us" />
      <Contact />
    </>
  );
}
