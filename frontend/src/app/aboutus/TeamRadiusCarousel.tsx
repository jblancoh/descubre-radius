'use client';
import { FC, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import WorkerCard, { WorkerType } from "@/app/aboutus/WorkerCard";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react"

const getWorker = async (): Promise<{ data: any, error: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/workers?filters[status][$eq]=true&populate=avatar`, {
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
      },
      cache: "no-store"
    });
    const result = await response.json();
    return { data: result?.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

const TeamRadiusCarousel: FC = () => {
  const [data, setData] = useState<WorkerType[]>([]);
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      const {data, error} = await getWorker();
      setData(data);
    }
    
    getData()
  }, []);
    
  return (
    <div
      className="flex flex-col justify-center items-center bg-red-500 pt-12 pb-20 text-white px-32"
    >
      <Label className="text-2xl leading-8 font-bold">
        Equipo Radius
      </Label>
      <Label className="text-sm font-normal">
      Somos un gran equipo interdisciplinario, creativos y apasionados por la tecnología.
      </Label>
      <Carousel
        opts={{
          loop: true,
          align: 'start'
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          })
        ]}
        className="container mx-auto mt-5"
      >
        <CarouselContent>
        {data && data.map((worker: WorkerType, index) => {
          return <CarouselItem key={index} className="basis-1/4 mr-">
            <WorkerCard worker={worker} key={index} />
          </CarouselItem>
          })
        }
        </CarouselContent>
        <CarouselPrevious variant='ghost' size='icon'>
          <ChevronLeft className="h-20 w-20" />
        </CarouselPrevious>
        <CarouselNext variant='ghost' size='icon'>
          <ChevronRight className="h-10 w-10" />
        </CarouselNext>
      </Carousel>
    </div>
  )
  
}

export default TeamRadiusCarousel;
