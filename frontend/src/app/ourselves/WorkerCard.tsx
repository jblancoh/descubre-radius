import { Label } from "@/components/ui/label";

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
        }
    }
}

const WorkerCard = ({ worker }: { worker: WorkerType }) => {
  const workerName = `${worker.attributes.name || ''} ${worker.attributes.lastName || ''} ${worker.attributes.motherLastName || ''}`;
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={
        worker.attributes?.avatar?.data?.attributes?.url
          ? worker.attributes?.avatar?.data?.attributes?.url
          : "https://placehold.co/250"
      } alt={workerName}
        className="md:w-60 h-60 object-cover m-4"
      />
      <Label className="text-2xl leading-8 font-bold">
        {workerName}
      </Label>
      <Label className="text-sm font-normal">
        {
          `${worker.attributes.position || ''} `
        }
      </Label>
    </div>
  )
}

export default WorkerCard;
