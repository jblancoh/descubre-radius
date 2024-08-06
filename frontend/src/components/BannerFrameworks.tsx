'use client';
import useTransition from "@/hooks/useTransition";
import { cn, frameworks } from "@/lib/utils";
import { useRef } from "react";

interface BannerFrameworksProps {
  type: 'analytics' | 'tech'
}

const BannerFrameworks = ({ type }: BannerFrameworksProps) => {
  const bannerRef = useRef(null);

  const { applicableYStyle, customTransitionStyles } = useTransition(bannerRef);

  const gridCols = {
    "tech": "grid-cols-8",
    "analytics": "grid-cols-6",
  };

  return (
    <div
      className={cn("bg-white py-16 px-8", applicableYStyle)}
      style={customTransitionStyles}
      ref={bannerRef}
    >
      <div className="container mx-auto">
        <h1 className="font-bold text-3xl text-center text-balance">
          Algunos frameworks que usamos
        </h1>
      </div>
      <div className="container mx-auto px-4 lg:max-w-5xl pt-16">
        <div className={cn("grid  gap-12 place-items-center", gridCols[type])}>
          {frameworks[type].map((framework) => (
            <img key={framework.alt} src={framework.src} alt={framework.alt} className="h-16 col-span-2 md:col-span-1" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerFrameworks;