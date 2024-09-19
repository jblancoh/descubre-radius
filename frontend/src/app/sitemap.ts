import type { MetadataRoute } from 'next'

const getAllPosts = async () => {
  const fieldSelection = 'fields[2]=created&fields[3]=slug';
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/api/posts?sort=id&' + fieldSelection, {
    headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_KEY}`
    },
  });
  const result = await response.json();
  return result?.data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://descubreradius.com'

  const response =await getAllPosts();
  
  const posts = response.map((post: any) => {
    return {
      url: `${baseUrl}/blog/${post.attributes.slug}`,
      lastModified: post.attributes.created,
      changeFrequency: 'weekly',
      priority: 0.5,
    }
  })

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/empresa-de-desarrollo-de-software-en-mexico`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/aviso-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    {
      url: `${baseUrl}/tech`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/analytics`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...posts
  ]
}