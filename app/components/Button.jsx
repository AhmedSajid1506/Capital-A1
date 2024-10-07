import Link from "next/link";
import React from "react";

export default function Button({ href, children }) {
  return (
    <div className=" bg-slate-50/5 border border-slate-800 p-2 rounded-lg">
      <Link
        href={href}
        className="block text-white px-6 py-2 rounded-lg capitalize bg-gradient-to-r from-[#000203] to-[#042839] hover:to-[#000203] hover:from-[#042839]"
      >
        {children}
      </Link>
    </div>
  );
}
