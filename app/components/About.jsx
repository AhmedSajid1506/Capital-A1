"use client"
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <section className="container px-5 mx-auto text-center flex flex-wrap my-10 md:mb-0">
      <ScrollAnimation animateIn="fadeInLeft" duration={0.5}>
        
      <p className="text-4xl my-20">Capital Æ1 is your partner in navigating the digital marketplace. Specialising in managing online businesses and third-party delivery participants to achieve unparalleled success. Our expertise is designed to simplify the complexities of online operations, providing you with the tools and insights needed to excel in a competitive environment. Join us on this transformative journey towards excellence. Uncover the true essence of success with the innovative solutions brought to you by Æ1. Your business deserves the best, and we deliver nothing short of exceptional.</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" duration={0.5}>
      <p className="text-4xl my-20">Æ1 is more than just a management firm. We will soon introduce a new way of business performance & market growth, offering not only support and insights but also a vision for the future—a future where businesses are empowered to make informed decisions not just inside their operations but in a marketplace of customers that value transparency and satisfaction. CAPITAL Æ1 will present a new era of evaluating businesses through ÆTHER—a software designed to deliver an accumulated evaluation of a business&apos;s operational health, market placement, and potential for growth. It generates a unique metric that captures your business&apos;s true value, extending beyond just financial figures, by analysing a blend of operational and market performance indicators.</p>
      </ScrollAnimation>
    </section>
  );
}