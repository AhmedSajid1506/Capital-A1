"use client";
import TypewriterComponent from "typewriter-effect";

export default function Heading({ title }) {
  return (
    <div className="mt-10 md:mt-32 text-center">
      <TypewriterComponent
        options={{
          strings: [title],
          autoStart: true,
          loop: true,
          wrapperClassName: "text-6xl leading-tight font-bold",
          cursorClassName: "text-6xl font-bold",
        }}
      />
    </div>
  );
}
