import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: React.ReactNode;
  description: string;
  additionalText?: string;
  additionalText2?: string;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonLink?: string;
}

export function HeroSection({
  title,
  description,
  additionalText,
  additionalText2,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  return (
    <section className="relative pt-[20px] bg-[#000E54] text-white md:py-24 overflow-x-hidden overflow-y-hidden md:rounded-br-[8rem]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-3xl leading-tight font-semibold md:text-5xl/[1.5]">
              {title}
            </h1>
            <p className="mb-6 md:text-lg font-semibold">{description}</p>
            {additionalText && (
              <p className="mb-6 md:text-lg">{additionalText}</p>
            )}
            {additionalText2 && (
              <p className="mb-6 md:text-lg">{additionalText2}</p>
            )}
            {buttonText && buttonLink && (
            <div className="hidden md:block">
              <Link href={buttonLink} className="flex items-center">
                <Button className="rounded-full px-4 bg-gradient-to-r from-cyan-300 to-sky-500 text-[#000E54] hover:bg-blue-600 md:text-[16px] text-xs">
                  <Image
                    src="/WA.png"
                    alt="WhatsApp"
                    width={24.24530029296875}
                    height={19}
                    className="mx-auto"
                  />
                  {buttonText}
                </Button>
              </Link>
            </div>)}
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={535}
              height={535}
              className="md:absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
