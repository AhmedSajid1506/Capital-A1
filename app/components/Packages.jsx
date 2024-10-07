import Image from "next/image";
import React from "react";
import Button from "./Button";

const packages = [
  {
    title: "Basic",
    features: [
      "Online Administration",
      "Basic Reporting",
      "Menu Optimisation"
    ]
  },
  {
    title: "Premium",
    features: [
      "Advanced Reporting",
      "Consultation Services",
      "Marketing Insights"
    ]
  },
  {
    title: "Efficiency",
    features: [
      "Comprehensive Support",
      "Kitchen Efficiency",
      "In-Depth Performance Analysis"
    ]
  },
  {
    title: "Custom",
    features: [
      "Tailored Solution"
    ]
  },
];

export default function Packages() {
  return (
    <section className="py-24 px-4 md:px-0 text-center relative">
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
        <h2 className="text-5xl font-semibold mb-20" data-aos="fade-up">—Æ1— Packages</h2>
        <div className="flex flex-wrap justify-center">
          {packages.map((pack, i) => (
            <div className="w-full md:w-1/2 lg:w-1/4 h-96 p-2" key={i}>
              <div className="w-full h-full bg-[#e8e8e8]/10 border border-[#e8e8e8]/5 backdrop-blur-lg flex flex-col p-10 justify-between rounded-3xl" data-aos="fade-up" data-aos-delay={i * 200}>
                <div>
                  <h3 className="text-left text-2xl">{pack.title}</h3>
                  <ul className="text-left mt-7 list-disc pl-5">
                    {pack.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Button href="/services">Find Out More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image className="absolute top-0 lg:top-1/2 right-0 animate-bounce" style={{ animationDuration: "3s" }} src="/elements/1.avif" alt="Element 1" width={175} height={175} />
      <Image className="absolute -bottom-20 -right-10 lg:left-1/2 animate-bounce" style={{ animationDuration: "3s" }} src="/elements/2.avif" alt="Element 2" width={175} height={175} />
      <Image className="absolute bottom-20 -left-10 animate-bounce" style={{ animationDuration: "3s" }} src="/elements/3.avif" alt="Element 3" width={175} height={175} />
    </section>
  );
}
