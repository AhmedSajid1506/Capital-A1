import Image from "next/image";
import Button from "./components/Button";
import Services from "./components/Services";
import AetherPlatform from "./components/AetherPlatform";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import About from "./components/About";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <>
    <div className="bg-black border-t border-gray-700 overflow-x-hidden w-full py-4">
        <div className="whitespace-nowrap animate-[scroll_20s_linear_infinite] overflow-x-hidden w-max">
          <span className="text-lg">
            {" "}
            — Forming a public market powered by ÆTHER — Brand&apos;s NFV
            performance metric to be showcased on this number board
          </span>
          <span className="text-lg">
            {" "}
            — Forming a public market powered by ÆTHER — Brand&apos;s NFV
            performance metric to be showcased on this number board
          </span>
          <span className="text-lg">
            {" "}
            — Forming a public market powered by ÆTHER — Brand&apos;s NFV
            performance metric to be showcased on this number board
          </span>
        </div>
      </div>
      <Hero />
      <Heading title={"Welcome to Capital Æ1"} />
      <About />
      <h2
        className="text-5xl text-center mt-10 md:mt-20 leading-tight font-bold"
        data-aos="fade-up"
      >
        —Æ1— Packages
      </h2>
      <Packages />
      <Services />
      <AetherPlatform />
      <Roadmap />
      <Testimonials />
      <section className="py-40 md:h-screen flex items-center justify-center w-full relative px-4 md:px-0 text-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/soon.jpg"
            alt="Coming Soon Section Background"
            fill
            sizes="100vw"
            className="w-full h-full block object-cover"
          />
        </div>
        <div className="container">
          <h3
            className="text-5xl md:text-7xl leading-tight font-bold"
            data-aos="zoom-in"
          >
            Coming Soon
          </h3>
          <p className="text-xl md:text-3xl mt-8" data-aos="zoom-in">
            CAPITAL Æ1 partnered with tech startup, Magescale, in a
            collaboration set to bring forth, ÆTHER, in the near future.
          </p>
        </div>
      </section>
      <FAQ />
      <CTA />
      <h2
        className="text-5xl text-center mt-10 md:mt-20 leading-tight font-bold"
        data-aos="fade-up"
      >
        Contact Us
      </h2>
      <Contact />
    </>
  );
}
