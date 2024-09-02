"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationDot = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => (
  <button
    className={`h-3 w-3 rounded-full mx-1 focus:outline-none ${
      isActive ? "bg-white" : "bg-gray-400"
    }`}
    onClick={onClick}
  />
);

export function CarouselHome() {
  const images = [
    "/img/carouselhome/digitaltransfor.png",
    "/img/carouselhome/capacityeco.png",
    "/img/carouselhome/techtrends.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  const onSelect = useCallback(() => {
    if (api) {
      setCurrentIndex(api.selectedScrollSnap());
    }
  }, [api]);

  useEffect(() => {
    if (api) {
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }
  }, [api, onSelect]);

  return (
    <div className="bg-black relative">
      <Carousel setApi={setApi} className="w-full bg-black">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full">
              <Card className="m-0 p-0">
                <CardContent className="p-0">
                  <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[9%] z-10" variant="ghost" size="icon">
          <ChevronLeft className="h-20 w-20 text-white hover:text-black" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-[9%] z-10" variant="ghost" size="icon">
          <ChevronRight className="h-20 w-20 text-white hover:text-black" />
        </CarouselNext>
      </Carousel>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <PaginationDot
            key={index}
            isActive={currentIndex === index}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselHome;