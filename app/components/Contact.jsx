import React from "react";
import LinkComp from "../components/LinkComp";

export default function Contact() {
  return (
    <section className="container isolate relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
        <div className="pt-24 pb-20 sm:pt-32 lg:py-48 px-6 lg:px-8 relative lg:static">
          <div className="mx-auto lg:mx-0 px-5 md:px-0">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mt-6 text-lg leading-8">
              Get in touch with us! Whether you have questions, need support, or
              want to discuss your project, we&apos;re here to help. Reach out
              and let&apos;s connect.
            </p>
            <dl className="mt-10 text-base leading-7 space-y-4">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </dt>
                <dd>
                  <LinkComp href="tel:+1234567890">+12 3456 7890</LinkComp>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </dt>
                <dd>
                  <LinkComp href="mailto:info@devjunctiontech.com">
                    capital@gmail.com
                  </LinkComp>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="pt-20 pb-24 sm:pb-32 lg:py-48 px-6 lg:px-8 border-l border-white/15"
        >
          <div className="mx-auto lg:mr-0">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-black shadow-sm ring-1 ring-inset ring-white/15 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-black shadow-sm ring-1 ring-inset ring-white/15 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-black shadow-sm ring-1 ring-inset ring-white/15 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
