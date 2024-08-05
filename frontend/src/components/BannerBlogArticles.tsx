import { BlogPost } from '@/app/blog/LastPosts';
import Link from 'next/link';
import React from 'react';

const getLastArticles = async (): Promise<{ data: any, error: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?fields[0]=title&fields[1]=created&fields[2]=description&fields[3]=slug&populate[0]=cover&populate[2]=writer?randomSort=true&pagination[pageSize]=4`, {
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

const Card: React.FC<BlogPost> = (post) => {
  const dateString = post.attributes.created ? post.attributes.created : '';
  const normalizedDateString = dateString.replace(/[-\\]/g, '-'); // Reemplaza tanto '-' como '\' con '-'
  const date = normalizedDateString.split('-');
  const dateFormated = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2])).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <Link href={`/blog/${post?.attributes?.slug}` || ''}
      className="flex flex-col justify-between bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div
        className="h-48 bg-cover bg-center rounded-t-lg flex justify-center items-center"
      >
        <img
          src={post.attributes?.cover?.data?.attributes?.url
            ? post.attributes?.cover?.data?.attributes?.url
            : "https://placehold.co/200"}
          alt={post.attributes.title}
          className="h-48 object-cover rounded-lg"
        />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold">{post.attributes.title}</h2>
        <p className="text-gray-600 mt-2">{post.attributes.description}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mt-4">
          <p className="text-red-500">Leer artículo &rarr;</p>
          <p className="text-gray-500">{dateFormated}</p>
        </div>
      </div>
    </Link>
  );
};

const BannerBlogArticles: React.FC = async () => {
  const { data, error } = await getLastArticles();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-3 text-red-500">Lo último de Radius</h1>
      <h2 className='text-lg text-center mb-6'>Noticias, eventos y artículos de interés.</h2>
      <div className="text-center mb-8">
        <Link href="/blog" className="inline-block bg-white border-2 border-gray-500 text-gray-800 px-6 py-1 rounded-full hover:bg-gray-500 hover:text-white transition-colors duration-300">
          Ir al blog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.map((card: BlogPost) => (
          <Card key={card?.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default BannerBlogArticles;