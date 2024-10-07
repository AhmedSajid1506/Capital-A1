import React from 'react'
import plansJSON from "../utils/plans.json";
import Button from "../components/Button";
import LinkComp from "../components/LinkComp";

export default function Packages() {
  return (
    <section className="container flex justify-center flex-wrap py-10 md:pb-24">
        {plansJSON.map((plan, i) => (
          <div
            className="p-4 lg:w-1/3 md:w-1/2 w-full"
            key={i}
            data-aos="zoom-in"
          >
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden duration-300 hover:scale-105 group">
              <h4 className="text-sm tracking-widest title-font mb-1 font-medium">
                {plan.type.toUpperCase()}
              </h4>
              <h3 className="text-3xl flex items-center leading-none pb-4 mb-4 border-b border-gray-200 duration-300 group-hover:text-hover">
                <span>
                  {i === 2 ? "" : "£"}
                  {plan.price}
                </span>
                {i === 2 ? (
                  ""
                ) : (
                  <span className="text-lg ml-1 font-normal text-gray-300">
                    /mo
                  </span>
                )}
              </h3>
              <ul className="list-none overflow-x-auto overflow-y-auto h-52 mb-4">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-200 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="white"
                      className="min-h-4 min-w-4 max-h-4 max-w-4 mr-2"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>{feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact-us">
                Choose {plan.type}
                <span aria-hidden="true" className="float-right">
                  →
                </span>
              </Button>
              <p className="text-center mt-3">
              <LinkComp href={plan.pdf} target="_blank">{plan.type} Detailed Description</LinkComp>
              </p>
            </div>
          </div>
        ))}
      </section>
  )
}
