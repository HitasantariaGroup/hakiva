"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NavSection() {

  const navLinks = [
    { href: "/pt-cv", label: "PT/CV" },
    { href: "/haki", label: "HAKI" },
    { href: "/pirt", label: "PIRT" },
    { href: "/oss", label: "OSS" },
    { href: "/halal", label: "HALAL" },
  ];


  return (
    <div className= "grid grid-cols-1  justify-items-center md:flex flex-row -mt-4 justify-center gap-8 flex-wrap items-center bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] py-10" >
        {navLinks.map((link) => (
            <Link href={link.href} key={link.href} >
                <Button
                    className= "text-lg font-bold bg-[#000E54] text-white px-20 py-10 "
                    >
                    {link.label}
                </Button>
            </Link>
          ))}
    </div>
  );
}
