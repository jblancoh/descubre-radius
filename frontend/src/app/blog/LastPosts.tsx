import { Label } from "@/components/ui/label";
import { CategoryColors, CategoryColorsText } from "@/lib/colors";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { FC } from "react";

export type BlogPost = {
  id: string;
  attributes: {
    title: string;
    description: string;
    created: string;
    slug?: string;
    writer: {
      data: {
        id: string;
        attributes: {
          name: string;
        }
      }
    }
    cover: {
      data: {
        attributes: {
          url: string;
        }
      };
    }
    categories: {
      data: {
        id: string;
        attributes: {
          name: string;
        }
      }[];
    }
  };
}


const getBlogData = async (): Promise<{ data: any, error: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?sort=id&fields[0]=title&fields[1]=description&fields[2]=created&fields[3]=slug&populate[0]=cover&populate[1]=categories&populate[2]=writer`, {
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

const LastPosts:FC = async() => {
  const { data, error } = await getBlogData();
  return (
    <>
      <Label className="text-3xl text-red-500 font-bold">Ultimos artículos</Label>
      {data && data.map((post: BlogPost) => {
        const dateString = post.attributes.created ? post.attributes.created : '';
        const normalizedDateString = dateString.replace(/[-\\]/g, '-'); // Reemplaza tanto '-' como '\' con '-'
        const date = normalizedDateString.split('-');
        const dateFormated = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2])).toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
        return <div key={post.id}>
          <div className="flex flex-row min-h-64 my-4">
            <img src={
              post.attributes?.cover?.data?.attributes?.url
                ? post.attributes?.cover?.data?.attributes?.url
                : "https://placehold.co/250"
            } alt={post.attributes?.title}
              className="w-40 h-40 object-cover rounded-md m-4 sm:w-48"
            />
            <div className="flex flex-col justify-center space-y-4">
              <Link href={`/blog/${post.attributes.slug}`} className="cursor-pointer">
                <div className="flex flex-row space-x-2 cursor-pointer">
                  {post?.attributes?.categories?.data?.map((category) => {
                    return <div
                      key={category.attributes.name}
                      className="rounded-full w-fit p-2"
                      style={{
                        backgroundColor: CategoryColors[category.attributes.name],
                        color: CategoryColorsText[category.attributes.name]
                      }}
                    >
                      <Label className="text-sm w-auto">
                        {category.attributes.name}
                      </Label>
                    </div>
                  })}
                </div>
                <div className="flex flex-col space-y-1">
                  <Label className="text-xl leading-8 font-bold cursor-pointer">
                    {post.attributes?.title}
                  </Label>
                  <Label className="text-base font-normal cursor-pointer">
                    {post.attributes.description}
                  </Label>
                </div>
              </Link>
              <Label className="text-sm font-normal">
                {
                  `${post.attributes.created && dateFormated || ''} `
                }
                <Link href={`/author/${post?.attributes?.writer?.data?.id}`}>
                  {post.attributes?.writer?.data?.attributes?.name}
                </Link>
              </Label>
            </div>
          </div>
          <Separator />
        </div>
      }
      )}
    </>
  )
}

export default LastPosts;
