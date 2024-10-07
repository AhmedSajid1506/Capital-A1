"use client"
import Link from "next/link";
import React from "react";

export default function LinkComp({ href, target = "_self", children }) {
  return <Link href={href} className="hover:text-indigo-500 duration-300" target={target}>{children}</Link>;
}
