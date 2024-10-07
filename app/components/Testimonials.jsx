"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const carousels = [
  {
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non tempore voluptatibus ipsa nesciunt delectus eum quas molestiae placeat exercitationem alias pariatur obcaecati corrupti eligendi, libero id, odio atque perspiciatis assumenda laboriosam! Nobis nihil esse necessitatibus quasi vel corporis totam, vitae sapiente dolorum ad vero est nam maiores nostrum voluptate consectetur quisquam consequuntur pariatur iure ea dolorem? Et, delectus nihil asperiores labore illum hic in corporis perferendis, quia eligendi nostrum ad maxime. Quia excepturi, ratione id sunt minus accusantium quod voluptatem asperiores architecto delectus ducimus voluptas sit reprehenderit vel blanditiis veritatis dignissimos numquam saepe rerum atque quas dolor! Consequatur, maiores.",
    img: "placeholder.png",
    name: "Emily Lorem",
    role: "Marketing Manager",
  },
  {
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non tempore voluptatibus ipsa nesciunt delectus eum quas molestiae placeat exercitationem alias pariatur obcaecati corrupti eligendi, libero id, odio atque perspiciatis assumenda laboriosam! Nobis nihil esse necessitatibus quasi vel corporis totam, vitae sapiente dolorum ad vero est nam maiores nostrum voluptate consectetur quisquam consequuntur pariatur iure ea dolorem? Et, delectus nihil asperiores labore illum hic in corporis perferendis, quia eligendi nostrum ad maxime. Quia excepturi, ratione id sunt minus accusantium quod voluptatem asperiores architecto delectus ducimus voluptas sit reprehenderit vel blanditiis veritatis dignissimos numquam saepe rerum atque quas dolor! Consequatur, maiores.",
    img: "placeholder.png",
    name: "Emily Patel",
    role: "Marketing Manager",
  },
  {
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde non tempore voluptatibus ipsa nesciunt delectus eum quas molestiae placeat exercitationem alias pariatur obcaecati corrupti eligendi, libero id, odio atque perspiciatis assumenda laboriosam! Nobis nihil esse necessitatibus quasi vel corporis totam, vitae sapiente dolorum ad vero est nam maiores nostrum voluptate consectetur quisquam consequuntur pariatur iure ea dolorem? Et, delectus nihil asperiores labore illum hic in corporis perferendis, quia eligendi nostrum ad maxime. Quia excepturi, ratione id sunt minus accusantium quod voluptatem asperiores architecto delectus ducimus voluptas sit reprehenderit vel blanditiis veritatis dignissimos numquam saepe rerum atque quas dolor! Consequatur, maiores.",
    img: "placeholder.png",
    name: "Lorem Patel",
    role: "Marketing Manager",
  }
];

export default function Testimonials() {
  return (
    <section className="container text-center mb-10">
      <h2 className="text-5xl font-semibold">
        Testimonials
      </h2>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {carousels.map((carousel) => (
            <CarouselItem key={carousel.name}>
              <div className="max-w-4xl mx-auto grid items-center justify-center p-6">
                <div className="grid gap-3 lg:gap-5">
                  <p className="text-lg lg:text-xl">
                    &ldquo;{carousel.txt}&ldquo;
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="rounded-full overflow-hidden w-10 h-10">
                      <Image
                        src={`/${carousel.img}`}
                        width="40"
                        height="40"
                        alt="Profile"
                        className="object-cover w-full h-full aspect-square"
                      />
                    </div>
                    <div className="text-sm font-semibold text-left">
                      <div>{carousel.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {carousel.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent hidden md:flex left-0" />
        <CarouselNext className="bg-transparent hidden md:flex right-0" />
      </Carousel>
    </section>
  );
}
