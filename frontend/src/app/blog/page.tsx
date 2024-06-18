import { FC } from "react";
import LastPosts, { BlogPost } from "./LastPosts";
import BriefPost from "./BriefPost";


const getBlogData = async (): Promise<{ data: any, error: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?fields[0]=title&fields[1]=created&populate[0]=cover&populate[1]=categories&populate[2]=writer?randomSort=true&pagination[pageSize]=3`, {
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

const Page:FC = async() => {
  const { data, error } = await getBlogData();
  return (
    <div className="container mx-auto p-4">
      {
        data && data.map((post: BlogPost) => {
          return <div key={post?.id}>
             <BriefPost post={post} key={post.id} />
          </div>
        })
      }
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