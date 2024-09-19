'use client';
import { FC, useEffect, useState } from "react";
import BriefPost from "./BriefPost";
import { BlogPost } from "./LastPosts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const getBlogData = async (): Promise<{ data: any, error: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?fields[0]=title&fields[1]=created&populate[0]=cover&populate[1]=categories&populate[2]=writer?randomSort=true&pagination[pageSize]=3`, {
      headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_KEY}`
      },
      cache: "no-store"
    });
    const result = await response.json();
    return { data: result?.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

const CarouselPost: FC = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      const {data, error} = await getBlogData();
      setData(data);
    }
    
    getData()
  }, []);
    
  return (
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
      {data && data.map((post: BlogPost) => {
        return <CarouselItem key={post?.id}>
          <BriefPost post={post} key={post.id} />
        </CarouselItem>
        })
      }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
  
}

export default CarouselPost;
