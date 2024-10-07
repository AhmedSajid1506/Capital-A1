"use client"
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "./Button";

export default function Intro() {
  return (
    <section className="container px-5 mx-auto text-center flex flex-wrap my-20 md:mb-0">
      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
        
      <p className="text-4xl">Our upcoming operation, Æther, is an advanced software platform developed by Capital Æ1, designed to revolutionise the understanding of a business's performance and its impact on consumer purchasing behaviour. This technology introduces a new algorithmic metric called Non-Financial Value (NFV), which comprises various operational metrics and market data points. The NFV metric provides an index of a business's overall and daily performance, influencing both operational strategies and consumer decision-making. By emphasising transparency and value, Æther aims to help businesses maximise profitability, minimise costs, and maintain consumer trust and engagement.</p>
      </ScrollAnimation>
      <div className="mx-auto mt-16">
      <Button href="/">Learn More</Button>
      </div>
    </section>
  );
}