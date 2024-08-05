import { Label } from "@/components/ui/label";
import Link from "next/link";

export type WorkerType = {
    id: string;
    attributes: {
        name: string;
        lastName: string;
        motherLastName: string;
        position: string;
        avatar: {
          data: {
            attributes: {
              url: string;
            }
          };
        },
        slug: string;
    }
}

const WorkerCard = ({ worker }: { worker: WorkerType }) => {
  const workerName = `${worker.attributes.name || ''} ${worker.attributes.lastName || ''} ${worker.attributes.motherLastName || ''}`;
  return (
    <Link href={`/aboutus/${worker.attributes.slug}`} className="cursor-pointer" target="_blank" >
      <div className="flex flex-col justify-center items-center">
        <img src={
          worker.attributes?.avatar?.data?.attributes?.url
            ? worker.attributes?.avatar?.data?.attributes?.url
            : "https://placehold.co/250"
        } alt={workerName}
          className="md:w-60 h-60 object-cover m-4"
        />
        <Label className="text-xl leading-8 font-bold cursor-pointer">
          {workerName}
        </Label>
        <Label className="text-sm font-normal cursor-pointer">
          {
            `${worker.attributes.position || ''} `
          }
        </Label>
      </div>
    </Link>
  )
}

export default WorkerCard;
