'use client';
import { Label } from "@/components/ui/label";
import { CategoryColors, CategoryColorsText } from "@/lib/colors";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { FC, use, useState, useCallback, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
 
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
          bgColor: string;
          textColor: string;
        }
      }[];
    }
  };
}


const getBlogData = async (currentPage: number = 1): Promise<{ data: any, pagination: any, error: any }> => {
  try {
    const fieldSelection = 'fields[0]=title&fields[1]=description&fields[2]=created&fields[3]=slug&populate[0]=cover&populate[1]=categories&populate[2]=writer';
    const pagination = `pagination[page]=${currentPage}&pagination[pageSize]=10`;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?sort=id&${fieldSelection}&${pagination}`, {
      headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_KEY}`
      },
      cache: "no-store"
    });
    const result = await response.json();
    return { data: result?.data, pagination: result?.meta?.pagination, error: null };
  } catch (error) {
    return { data: null, pagination: null, error };
  }
}

const setStepper = (currentPage?: number, totalPages?: number): (number|undefined)[] => {
  if (!currentPage || !totalPages) return [];
  const pagesToShow = currentPage > 3 && (currentPage >= totalPages - 2 )
    ? [totalPages - 2, totalPages - 1, totalPages]
    : [currentPage, currentPage + 1, currentPage + 2];
  const stepper = pagesToShow.map((page) => {
    if (page <= totalPages) {
      return page;
    }
  });
  return stepper;
}

const LastPosts:FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [data, setData] = useState<BlogPost[]>([]);
  useEffect(() => {
    getBlogData(currentPage).then((response) => {
      setData(response.data);
      setPageCount(response.pagination.pageCount);
    });
  }, [currentPage]);
  const stepper = setStepper(currentPage, pageCount);

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
                        backgroundColor: category.attributes.bgColor || CategoryColors[category.attributes.name],
                        color: category.attributes.textColor || CategoryColorsText[category.attributes.name]
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
      <Pagination className="mt-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage - 1 <= 0}/>
          </PaginationItem>
          {stepper.map((page) => {
            if (!page) return;
            const isActive = currentPage === page;
            return (
              <PaginationItem key={page}>
                <PaginationLink 
                  onClick={() => setCurrentPage(page)}
                  isActive={isActive}
                  aria-disabled={isActive}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          {stepper.findLast((page) => page) !== pageCount && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage + 1 > pageCount}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default LastPosts;
