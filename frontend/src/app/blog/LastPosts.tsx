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
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?sort=id&fields[0]=title&fields[1]=description&fields[2]=created&populate[0]=cover&populate[1]=categories&populate[2]=writer`, {
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
    <div className="col-span-1 md:col-span-2">
      <Label className="text-3xl text-red-500 font-bold">Ultimos artículos</Label>
      {data && data.map((post: BlogPost) => {
        const date = post.attributes.created ? post.attributes.created.split('/') : [];
        const dateFormated = new Date(Number(date[2]), Number(date[1]) - 1, Number(date[0])).toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        return <>
          <div key={post.id} className="flex flex-row min-h-64 my-4">
            <img src={
              post.attributes?.cover?.data?.attributes?.url
                ? `${process.env.NEXT_PUBLIC_API_URL}${post.attributes?.cover?.data?.attributes?.url}`
                : "https://via.placeholder.com/150"
            } alt={post.attributes?.title}
              className="w-40 h-40 object-cover rounded-md m-4 sm:w-48"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex flex-row space-x-2">
                {post?.attributes?.categories?.data?.map((category) => {
                  return <div
                    key={category.attributes.name}
                    className="rounded-md w-fit p-2"
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
              <Label className="text-xl leading-8 font-bold">
                {post.attributes?.title}
              </Label>
              <Label className="text-base font-normal">
                {post.attributes.description}
              </Label>
              <Label className="text-sm font-normal">
                {
                  `${dateFormated} `
                }
                <Link href={`/author/${post?.attributes?.writer?.data?.id}`}>
                  {post.attributes?.writer?.data?.attributes?.name}
                </Link>
              </Label>
            </div>
          </div>
          <Separator />
        </>
      }
      )}
    </div>
  )
}

export default LastPosts;
