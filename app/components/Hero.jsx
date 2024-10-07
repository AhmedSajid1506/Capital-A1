"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero({ title }) {
  return (
    <Swiper autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay, EffectFade]} effect="fade" loop={true}>
      <SwiperSlide className="bg-slider1 bg-cover w-screen">
        <div className="h-screen w-screen flex flex-col justify-center gap-5 bg-gray-600/40 px-6 md:px-20 relative">
          <p className="md:w-1/2 text-white text-3xl leading-[3.6rem] md:text-[3rem] font-medium font-Baskervville">
            The Future of Business Performance and Market Growth
          </p>
          <p className="md:w-1/2 text-white text-lg  font-Baskervville">
            Discover innovative solutions that drive business success and foster
            sustainable market expansion
          </p>
          <span className="md:w-1/5 cursor-pointer text-white text-lg font-Baskervville flex items-center gap-6 group">
            Booking Consultation
            <span className="relative">
              <span className=" absolute top-[-5px] left-[-40px] w-12 h-12 rounded-full border border-slate-300 transform group-hover:translate-x-[50px] group-hover:border-elephant-950 transition-transform duration-300 ease-in-out"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right text-elephant-950"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </span>
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide swiper-slide-next bg-slider2 bg-cover w-screen">
        <div className="h-screen w-screen flex flex-col justify-center gap-5 bg-gray-600/40 px-6 md:px-20 relative">
          <p className="md:w-1/2 text-white text-3xl leading-[3.6rem] md:text-[3rem] font-medium font-Baskervville">
            Enhance operational efficiency and data utilisation across both B2B
            and B2C sectors
          </p>
          <p className="md:w-1/2 text-white text-lg font-Baskervville">
            Leverage our expertise to streamline operations and harness data for
            strategic growth in all market segments.
          </p>
          <span className="md:w-1/5 cursor-pointer text-white text-lg font-Baskervville flex items-center gap-6 group">
            Booking Consultation
            <span className="relative">
              <span className=" absolute top-[-5px] left-[-40px] w-12 h-12 rounded-full border border-slate-300 transform group-hover:translate-x-[50px] group-hover:border-elephant-950 transition-transform duration-300 ease-in-out"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right text-elephant-950"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </span>
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide bg-slider3 bg-cover w-screen">
        <div className="h-screen w-screen flex flex-col justify-center gap-5 bg-gray-600/40 px-6 md:px-20 relative">
          <p className="md:w-1/2 text-white text-3xl leading-[3.6rem] md:text-[3rem] font-medium font-Baskervville z-10">
            Focusing on Organic Growth and Bottom-Line Profitability
          </p>
          <p className="md:w-1/2 text-white text-lg  font-Baskervville">
            Implement effective strategies to boost natural growth and enhance
            your financial performance.
          </p>
          <span className="md:w-1/5 cursor-pointer text-white text-lg font-Baskervville flex items-center gap-6 group">
            Booking Consultation
            <span className="relative">
              <span className=" absolute top-[-5px] left-[-40px] w-12 h-12 rounded-full border border-slate-300 transform group-hover:translate-x-[50px] group-hover:border-elephant-950 transition-transform duration-300 ease-in-out"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-move-right text-elephant-950"
              >
                <path d="M18 8L22 12L18 16"></path>
                <path d="M2 12H22"></path>
              </svg>
            </span>
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
