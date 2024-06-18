import { FC } from "react";
import LastPosts from "./LastPosts";
import CarouselPost from "./CarouselPost";

const Page:FC = async() => {
  return (
    <div className="container mx-auto p-4">
      <CarouselPost />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <LastPosts />
        <div className="col-span-1">
          Artículos populares
        </div>
      </div>
    </div>
  );
}

export default Page;