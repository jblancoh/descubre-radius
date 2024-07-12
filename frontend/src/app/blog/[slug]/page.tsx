import { useEffect } from 'react';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

const BlogPostPage: React.FC<BlogPostPageProps> = ({params}) => {
 const { slug } = params;

  useEffect(() => {
    // Fetch blog post data based on the slug
    // You can make an API call here or fetch data from a database
    // Example: fetchBlogPost(slug);
    console.log("🚀 ~ slug:", slug)
  }, [slug]);

  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>Slug: {slug}</p>
      {/* Render the blog post content here */}
    </div>
  );
};

export default BlogPostPage;