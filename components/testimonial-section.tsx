import type React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  imageSrc: string;
}

interface TestimonialSectionProps {
  title: React.ReactNode;
  testimonials: Testimonial[];
}

export function TestimonialSection({
  title,
  testimonials,
}: TestimonialSectionProps) {
  return (
    <section className="md:py-16 py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center md:text-5xl text-2xl font-bold">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 md:text-lg text-xs">
              <div className="mb-4 flex items-center space-x-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={testimonial.imageSrc || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex-1 text-sm">
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 ">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
