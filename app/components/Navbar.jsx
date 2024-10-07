"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const closeMenu = () => {
    setMobileMenu(false);
  };
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center px-6 md:px-20 py-3 bg-[#000000] sticky top-0 z-50">
        <div className="hidden md:flex gap-4">
          <a
            className="hidden md:block text-white capitalize  text-lg"
            href="/"
          >
            about us
          </a>
          <a
            className="hidden md:block text-white capitalize  text-lg"
            href="/"
          >
            services
          </a>
          <a
            className="hidden md:block text-white capitalize  text-lg"
            href="/"
          >
            aether
          </a>
        </div>
        <div>
          <Image src="/logo.webp" width={400} height={400} alt="Logo" />
        </div>
        <div className="flex justify-end">
          <Button href="/contact-us">Contact Us</Button>
        </div>
      </div>
      <ul
        className={`lg:hidden flex justify-center items-center flex-col inset-0 fixed bg-[#080911]/80 backdrop-blur-sm space-y-5 duration-500 ${
          mobileMenu ? "opacity-100 z-40" : "opacity-0 -z-10"
        }`}
      >
        {links.map((link) => (
          <li
            className="text-white font-medium text-3xl duration-300"
            key={link.name}
          >
            <Link href={link.href}>
              <span onClick={closeMenu}>{link.name}</span>
            </Link>
          </li>
        ))}
        <Button href="/contact-us">
          <span onClick={closeMenu}>Contact Us</span>
        </Button>
      </ul>
    </>
  );
}
