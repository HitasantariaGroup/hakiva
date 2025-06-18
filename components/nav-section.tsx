"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function NavSection() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "PT/CV" },
    { href: "/haki", label: "HAKI" },
    { href: "/pirt", label: "PIRT" },
    { href: "/oss", label: "OSS" },
    { href: "/halal", label: "HALAL" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className= "flex flex-row -mt-4 justify-center gap-8 items-center bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] py-10" >
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
