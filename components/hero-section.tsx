import type React from "react";
import Image from "next/image";

interface HeroSectionProps {
  title: React.ReactNode;
  description: string;
  additionalText?: string;
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({
  title,
  description,
  additionalText,
  imageSrc,
  imageAlt,
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
