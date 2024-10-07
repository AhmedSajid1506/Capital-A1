import Link from "next/link";
import React from "react";

export default function Button({ href, children }) {
  return (
      <Link
        href={href}
        className="w-max text-nowrap rounded-full border border-[#f5f5f5] bg-[#f5f5f5] hover:bg-transparent px-4 py-2 text-sm leading-5 font-semibold text-black hover:text-white duration-300"
      >
        {children}
      </Link>
  );
}
