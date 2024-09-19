import { Label } from "@/components/ui/label";
import Link from "next/link";
import PopularArticles from "../PopularArticles";
import { Metadata } from "next";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};


const fetchBlogPost = async (slug: string): Promise<{ data: any, error: any }> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate[0]=writer&populate[1]=cover`;
    
    const response = await fetch(
      url, {
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

export async function generateMetadata(
  {params}: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = params;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate[0]=cover`;

  const response = await fetch(
    url, {
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_KEY}`
    },
    cache: "no-store"
  });
  const result = await response.json();

  return {
    title: result?.data[0]?.attributes?.title,
    openGraph: {
      title: result?.data[0]?.attributes?.title,
      description: result?.data[0]?.attributes?.description,
      images: [
        {
          url: result?.data[0]?.attributes?.cover?.data?.attributes?.url,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?fields[3]=slug`;

    const response = await fetch(
      url, {
      headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_KEY}`
      },
    });
    const result = await response.json();

    const paths = result?.data.map((post: any) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    });

    return paths || [];
  } catch (error) {
    return [];
  }
}

const BlogPostPage: React.FC<BlogPostPageProps> = async ({params}) => {
 const { slug } = params;

  const post = await fetchBlogPost(slug);
  const postContent = post.data[0]?.attributes.content;
  const postWriter = post.data[0]?.attributes.writer;
  const postTitle = post.data[0]?.attributes.title;
  const postCover = post.data[0]?.attributes.cover;
  const dateString = post.data[0]?.attributes.created || '';
  const normalizedDateString = dateString.replace(/[-\\]/g, '-');
  const date = normalizedDateString.split('-');
  const dateFormated = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2])).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <div className="container mx-auto my-8 bg-white">
      <div className="text-center flex flex-col space-y-4 my-4">
        <Label className="text-3xl leading-8 font-bold">
          {postTitle}
        </Label>
        <Label className="text-sm font-normal">
          {
            `${dateFormated} `
          }
          <Link href={`/author/${postWriter?.data?.id}`}>
            {postWriter?.data?.attributes?.name}
          </Link>
        </Label>
        <img src={postCover?.data?.attributes?.url} alt={postTitle} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-3">
          <div dangerouslySetInnerHTML={{ __html: postContent }} />
        </div>
        <div className="hidden col-span-1 md:block">
          <PopularArticles />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;