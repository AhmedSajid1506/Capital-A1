"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Button from "./Button";

export default function Hero({ title }) {
  return (
    <Swiper autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
      modules={[Autoplay, EffectFade]} effect="fade" loop={true}>
      <SwiperSlide className="bg-slider1 bg-cover w-screen">
        <div className="h-[80vh] w-screen flex flex-col justify-center gap-5 bg-gray-600/40 px-6 md:px-20 relative">
          <p className="md:w-2/3 text-white text-3xl leading-[3.6rem] md:text-[3rem] font-medium font-Baskervville">
            The Future of Business Performance and Market Growth
          </p>
          <p className="md:w-2/3 text-white text-lg  font-Baskervville">
            Discover innovative solutions that drive business success and foster
            sustainable market expansion
          </p>
          <Button href="/contact-us">Booking Consultation &rarr;</Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide swiper-slide-next bg-slider2 bg-cover w-screen">
        <div className="h-[80vh] w-screen flex flex-col justify-center gap-5 bg-gray-600/40 px-6 md:px-20 relative">
          <p className="md:w-2/3 text-white text-3xl leading-[3.6rem] md:text-[3rem] font-medium font-Baskervville">
            Enhance operational efficiency and data utilisation across both B2B
            and B2C sectors
          </p>
          <p className="md:w-2/3 text-white text-lg font-Baskervville">
            Leverage our expertise to streamline operations and harness data for
            strategic growth in all market segments.
          </p>

          <Button href="/contact-us">Booking Consultation &rarr;</Button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide bg-slider3 bg-cover w-screen">
        <div className="h-[80vh] w-screen flex flex-col justify-center gap-5 bg-gray-600/40 px-6 md:px-20 relative">
          <p className="md:w-2/3 text-white text-3xl leading-[3.6rem] md:text-[3rem] font-medium font-Baskervville z-10">
            Focusing on Organic Growth and Bottom-Line Profitability
          </p>
          <p className="md:w-2/3 text-white text-lg  font-Baskervville">
            Implement effective strategies to boost natural growth and enhance
            your financial performance.
          </p>
          <Button href="/contact-us">Booking Consultation &rarr;</Button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
