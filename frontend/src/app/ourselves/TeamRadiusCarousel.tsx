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
import WorkerCard, { WorkerType } from "@/app/ourselves/WorkerCard";
import { Label } from "@/components/ui/label";

const getWorker = async (): Promise<{ data: any, error: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/workers?populate=avatar&pagination[pageSize]=3`, {
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
      const customData = []
      const {data, error} = await getWorker();
      console.log('data >>>>>>> ', data);
      for(let i = 0; i < 10; i++) {
        customData.push(data[0]);
      }
      setData(customData);
    }
    
    getData()
  }, []);
    
  return (
    <div
      className="flex flex-col justify-center items-center bg-blue-500 pt-12 pb-20 text-white px-32"
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
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          })
        ]}
      >
        <CarouselContent>
        {data && data.map((worker: WorkerType) => {
          return <CarouselItem key={worker?.id} className="basis-80">
            <WorkerCard worker={worker} key={worker.id} />
          </CarouselItem>
          })
        }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
  
}

export default TeamRadiusCarousel;
