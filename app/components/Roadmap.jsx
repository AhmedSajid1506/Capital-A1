"use client";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const processes = [
  {
    title: "Current Focus",
    txt: "Capital Æ1 is dedicated to revolutionising business intelligence and operational efficiency, initially targeting the online food delivery sector. We are committed to providing comprehensive account management services that help restaurants optimise their performance and streamline their operations.",
  },
  {
    title: "Intermediate Goals",
    txt: "Enhancing Operational Efficiency: Through tailored solutions, we are enabling restaurants to better manage their online delivery platforms and improve in-house operations. Data-Driven Insights: By leveraging advanced analytics, we provide businesses with the insights they need to make informed decisions and drive growth.",
  },
  {
    title: "Future Vision",
    txt: "Looking ahead, Capital Æ1 is developing the innovative Æther software, designed to transform business performance analysis and consumer decision-making across various industries. Æther will introduce the Non-Financial Value (NFV) metric, offering a comprehensive view of a business's overall value and daily performance.",
  },
  {
    title: "Strategic Direction",
    txt: "Expansion Across Industries: While our current focus is on the food delivery sector, our long-term vision includes extending our services to a variety of industries, leveraging the power of the Æther software. Empowering Consumers: Æther will guide consumers towards businesses that offer the best value and quality of service, enhancing their decision-making process. Innovation and Growth: We are committed to continuous innovation, ensuring that our technology remains at the forefront of business intelligence solutions.",
  },
  {
    title: "Long-Term Impact",
    txt: "Capital Æ1 aims to set new standards in business intelligence, driving operational efficiency and consumer satisfaction across diverse sectors. Our vision is to create a seamless integration of data-driven insights and advanced technology, empowering businesses to thrive in a competitive marketplace and helping consumers make better-informed choices.",
  },
];

export default function Roadmap() {
  // useEffect(() => {
  //   if (window.innerWidth > 786) {
  //     const elements = document.querySelectorAll(
  //       ".vertical-timeline-element-content"
  //     );
  //     elements.forEach((element, index) => {
  //       element.setAttribute(
  //         "data-aos",
  //         `fade-${index % 2 === 0 ? "right" : "left"}`
  //       );
  //     });
  //   }
  // }, []);
  return (
    <section className="my-20">
      <div className="container text-center px-4 mb:px-0">
        <h2 className="text-5xl font-semibold">The Path to Success</h2>
        <p className="mb-10 mt-5">
          How we collaborate with you from start to finish to drive business
          success.
        </p>
      </div>
      <VerticalTimeline animate={false}>
        {processes.map((process, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
            iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="white"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            }
          >
            <h3 className="vertical-timeline-element-title text-xl">
              {process.title}
            </h3>
            <p>{process.txt}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

// <section className="py-24 px-4 md:px-0">
//   <div className="container">
//     <h2 className="text-5xl font-semibold">The Path to Success</h2>
//     <p className="mb-10 mt-5">
//       How we collaborate with you from start to finish to drive business
//       success.
//     </p>
//   </div>
//   <ol className="w-full pb-72 pt-10 flex flex-nowrap overflow-x-auto overflow-y-hidden">
//     {processes.map((process, i) => (
//       <li
//         className="relative h-1 bg-white first:min-w-20 first:w-20 w-full min-w-64 ml-10 first:ml-0"
//         key={i}
//       >
//         <span className="absolute top-1/2 left-[calc(100%_+_1px)] bottom-0 w-10 h-10 text-center leading-10 text-xl text-black font-bold -translate-y-1/2 rounded-full bg-white">
//           0{i + 1}
//         </span>
//         <div className="absolute left-[calc(100%_+_20px)] w-60 whitespace-normal top-[calc(100%_+_32px)] text-[#e8e8e8]" data-aos="fade-down" data-aos-delay={i*300}>
//           <h3 className="text-2xl mb-2 font-bold uppercase">
//             {process.title}
//           </h3>
//           {process.txt}
//         </div>
//       </li>
//     ))}
//     <li className="relative inline-block list-none h-1 bg-white min-w-80 ml-10"></li>
//   </ol>
// </section>
