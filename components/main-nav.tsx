"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HAKI" },
    { href: "/pirt", label: "PIRT" },
    { href: "/oss", label: "OSS" },
    { href: "/halal", label: "Halal" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000E54] text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logoHakiva.png"
              alt="Logo Hakiva"
              width={24.24530029296875}
              height={19}
              className="mx-auto"
            />
            <span className="text-xl font-bold ml-[10px]">Hakiva</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#0EBCF7] font-bold" // Active link style
                  : "text-white hover:text-blue-200" // Inactive link style
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/" className="flex items-center">
            <Button className="rounded-full px-4 bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 md:text-[16px] text-xs">
              <Image
                src="/WA.png"
                alt="WhatsApp"
                width={24.24530029296875}
                height={19}
                className="mx-auto"
              />
              Konsultasi Sekarang
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#0EBCF7] focus:outline-none"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#000E54] text-center shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-[#0EBCF7] font-bold" // Active link style
                    : "text-white hover:text-blue-200" // Inactive link style
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link href="/">
                <Button className="w-full item-center rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 text-[16px]">
                  <Image
                    src="/WA.png"
                    alt="WhatsApp"
                    width={24.24530029296875}
                    height={19}
                  />
                  Konsultasi Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
