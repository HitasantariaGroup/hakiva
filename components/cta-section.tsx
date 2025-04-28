import type React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  price?: {
    original: string;
    discounted: string;
  };
}

export function CTASection({
  title,
  description,
  buttonText,
  price,
}: CTASectionProps) {
  return (
    <section className="md:mb-[5rem] justify-center py-16 text-white">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="text-center md:p-16 p-5 bg-[#000E54] rounded-[2rem]">
          <h2 className="mb-6 md:text-5xl text-xl font-bold">{title}</h2>
          <p className="md:text-lg text-xs mb-8 mx-auto max-w-2xl">
            {description}
          </p>

          {price && (
            <div className="mb-6">
              <h3 className="md:text-3xl text-xl font-bold md:mb-4 mb-2">
                Harga Special
              </h3>
              <p className="md:text-3xl text-xl line-through md:mb-4 mb-2">
                {price.original}
              </p>
              <p className="md:text-5xl text-3xl font-bold text-[#FFD745]">
                {price.discounted}
              </p>
            </div>
          )}

          <Link href="/">
            <Button className="item-center rounded-full px-4 bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 md:text-lg text-xs">
              <Image
                src="/WA.png"
                alt="WhatsApp"
                width={24.24530029296875}
                height={19}
              />
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
