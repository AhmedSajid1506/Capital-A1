import Image from "next/image";
import React from "react";

const features = [
  {
    title: "NFV Algorithm",
    txt: "Understand customer purchasing behaviors in real-time.",
  },
  { title: "Data Management", txt: "Secure and efficient data handling." },
  { title: "Market Insights", txt: "Access deep market analytics." },
];

export default function AetherPlatform() {
  return (
    <section className="py-24 px-4 md:px-0 overflow-hidden">
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/features-bg.avif"
          alt="Features Background"
          fill
          sizes="100vw"
          className="w-full h-full block object-cover"
        />
      </div> */}
      <div className="container">
        <h2 className="text-5xl font-semibold">The Aether Platform</h2>
        <p className="mb-10 mt-5">
          Utilize our advanced AI-powered platform to revolutionize your
          business decisions and growth strategy.
        </p>
        <div className="flex flex-wrap justify-center">
          {features.map((feature) => (
            <div
              className="w-full px-5 md:p-8 border-t last:border-b border-[#e8e8e8]/10 relative overflow-hidden group" data-aos="fade-up"
              key={feature.title}
            >
              <div className="absolute inset-0 -z-10 -left-full opacity-0 group-hover:left-0 group-hover:opacity-100 duration-700">
                <Image
                  src="/platform.png"
                  alt="Features Background"
                  fill
                  sizes="100vw"
                  className="w-full h-full block object-cover"
                />
              </div>
              <div className="w-full flex flex-wrap items-center justify-between py-5 md:p-10 rounded-3xl">
                <h3 className="text-2xl">{feature.title}</h3>
                <p className="text-[#e8e8e8]/50 mt-5 md:mt-0">{feature.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
