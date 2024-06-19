import { Label } from "@/components/ui/label";
import { CategoryColors, CategoryColorsText } from "@/lib/colors";
import Link from "next/link";
import { BlogPost } from "./LastPosts";



const BriefPost = ({ post }: { post: BlogPost }) => {
  const date = post.attributes.created ? post.attributes.created.split('/') : [];
  const dateFormated = new Date(Number(date[2]), Number(date[1]) - 1, Number(date[0])).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <div className="grid grid-cols-3 min-h-80">
      <div className="col-span-1 flex justify-center items-center">
        <img src={
          post.attributes?.cover?.data?.attributes?.url
            ? post.attributes?.cover?.data?.attributes?.url
            : "https://via.placeholder.com/150"
        } alt={post.attributes?.title}
          className="md:w-80 h-80 object-cover rounded-md m-4"
        />
      </div>
      <div className="col-span-2 self-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex flex-row space-x-2">
          {post?.attributes?.categories?.data?.map((category) => {
            return <div
              key={category.attributes.name}
              className="rounded-full w-fit p-2"
              style={{
                backgroundColor: CategoryColors[category.attributes.name],
                color: CategoryColorsText[category.attributes.name]
              }}
            >
              <Label className="text-base w-auto">
                {category.attributes.name}
              </Label>
            </div>
          })}
          </div>
          <Label className="text-2xl leading-8 font-bold">
            {post.attributes?.title}
          </Label>
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
    </div>
  )
}

export default BriefPost;
