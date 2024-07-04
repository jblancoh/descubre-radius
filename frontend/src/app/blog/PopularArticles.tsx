import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { BlogPost } from "./LastPosts";
import { Label } from "@/components/ui/label";

const getPoularArticles = async (): Promise<{ data: any, error: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?fields[0]=title&fields[1]=created&populate[0]=cover&populate[2]=writer?randomSort=true&pagination[pageSize]=3`, {
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

const PopularArticles: FC = async() => {
  const { data, error } = await getPoularArticles();
  return <Card>
    <CardHeader>
      <CardTitle>
        Artículos populares
      </CardTitle>
    </CardHeader>
    <CardContent>
      {data && data.map((post: BlogPost) => {
        const date = post.attributes.created ? post.attributes.created.split('/') : [];
        const dateFormated = date.length > 0 ? new Date(Number(date[2]), Number(date[1]) - 1, Number(date[0])).toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : '';
        return <div className="grid grid-cols-3 gap-4 h-32 cursor-pointer" key={post.id}>
            <div className="col-span-1 self-center cursor-pointer">
              <img 
              src={post.attributes?.cover?.data?.attributes?.url
                ? post.attributes?.cover?.data?.attributes?.url
                : "https://placehold.co/250"}
                alt={post.attributes.title} 
                className="w-14 h-14 object-cover rounded-lg"
                />
            </div>
            <div className="col-span-2 flex flex-col justify-around cursor-pointer">
              <Label className="text-xs cursor-pointer">{post.attributes.title}</Label>
              <Label className="text-xs opacity-50 cursor-pointer">{dateFormated}</Label>
            </div>
          </div>
      })}
    </CardContent>
  </Card>
}

export default PopularArticles;