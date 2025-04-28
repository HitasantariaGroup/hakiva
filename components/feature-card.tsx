import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FeatureCardProps {
  title: string;
  description?: string;
  bgColor?: string;
  row?: string;
  srcImage: string;
}

export function FeatureCard({
  title,
  description,
  bgColor = "bg-white",
  row,
  srcImage,
}: FeatureCardProps) {
  return (
    <Card className={`md:p-6 p-3 shadow-lg ${bgColor} ${row}`}>
      <Image
        src={srcImage}
        alt=""
        width={45}
        height={45}
        className="mx-auto pb-[10px] row-span-2"
      />
      <h3 className="text-lg font-semibold md:text-lg text-sm col-end-3">
        {title}
      </h3>
      <p className="text-gray-600 col-end-3 md:text-lg text-sm">
        {description}
      </p>
    </Card>
  );
}
