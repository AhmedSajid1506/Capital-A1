import Image from "next/image";
import React from "react";

const services = [
  "Data Analysis Solutions",
  "Operational Strategy & Management",
  "Aether Platform Insights",
  "Business Growth Consulting",
];

export default function Services() {
  return (
    <section className="py-24 px-4 md:px-0 text-center overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/service.png"
          alt="Services Background"
          fill
          sizes="100vw"
          className="w-full h-full block object-cover"
        />
      </div>
      <div className="container">
        <h2 className="text-5xl font-semibold" data-aos="fade-up">Our Services</h2>
        <p className="my-10" data-aos="fade-up">
          From advanced data analysis to operational efficiency, our services
          cover a range of innovative solutions tailored for modern businesses.
        </p>
        <div className="flex flex-wrap justify-center">
          {services.map((service, i) => (
            <div className="w-full md:w-1/2 lg:w-1/4 h-96 p-2" key={i}>
              <div className="w-full h-full bg-[#e8e8e8]/10 border border-[#e8e8e8]/5 backdrop-blur-lg flex flex-col justify-between p-10 rounded-3xl" data-aos="fade-up" data-aos-delay={i*200}>
                <h3 className="text-left text-2xl">{service}</h3>
                <p className="text-right text-4xl text-[#e8e8e8]/30">
                  0{i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Image className="absolute top-0 lg:top-1/2 right-0 animate-bounce" style={{animationDuration: "3s"}} src="/elements/1.avif" alt="Element 1" width={175} height={175} />
        <Image className="absolute bottom-0 -right-10 lg:left-1/2 animate-bounce" style={{animationDuration: "3s"}} src="/elements/2.avif" alt="Element 2" width={175} height={175} />
        <Image className="absolute bottom-20 -left-10 animate-bounce" style={{animationDuration: "3s"}} src="/elements/3.avif" alt="Element 3" width={175} height={175} />
    </section>
  );
}
