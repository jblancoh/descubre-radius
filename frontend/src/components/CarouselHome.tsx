import * as React from "react";
 
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react"
 
export function CarouselHome() {
  const images = [ 
    "/img/carouselhome/digitaltransfor.png",
    "/img/carouselhome/capacityeco.png",
    "/img/carouselhome/techtrends.png"
  ];

  return (
    <div className="bg-black">
    <Carousel className="w-full bg-black">
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
      <CarouselPrevious className="absolute left-[9%] z-10" variant='ghost' size='icon'>
        <ChevronLeft className="h-20 w-20 text-white hover:text-black" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-[9%] z-10" variant='ghost' size='icon'>
        <ChevronRight className="h-20 w-20 text-white hover:text-black" /> 
      </CarouselNext>
    </Carousel>
    </div>
  )
}

export default CarouselHome;