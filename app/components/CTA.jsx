import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="flex items-center justify-center flex-col h-screen w-full relative text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cta.png"
          alt="Call To Action Background"
          fill
          sizes="100vw"
          className="w-full h-full block object-cover"
        />
      </div>
      <h1 className="text-8xl md:text-9xl font-bold">Get in Touch</h1>
      <p className="my-5 md:my-10">
      Contact us today to discover how we can help elevate your business.
      </p>
      <Button href="/contact-us">Contact Now</Button>
        <Image className="absolute -bottom-20 lg:-bottom-10 left-0 lg:left-1/4 animate-bounce" style={{animationDuration: "3s"}} src="/elements/4.avif" alt="Element 4" width={200} height={200} />
        </section>
  );
}
