import { Label } from "@/components/ui/label";
import Link from "next/link";

type WorkerPageProps = {
  params: {
    slug: string;
  };
};

const fetchWorker = async (slug: string): Promise<{ data: any, error: any }> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/worker?filters[slug][$eq]=${slug}&populate=profilePicture`;
    
    const response = await fetch(
      url, {
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

const WorkerPage: React.FC<WorkerPageProps> = async ({params}) => {
 const { slug } = params;

  const worker = await fetchWorker(slug);
  const workerFullName = `${worker.data[0]?.attributes.name} ${worker.data[0]?.attributes.lastName} ${worker.data[0]?.attributes.motherLastName}`;
  const workerProfilePicture = worker.data[0]?.attributes.profilePicture;
  const workerContent = worker.data[0]?.attributes.content;
  
  return (
    <div className="container mx-auto my-8 bg-white">
      <div className="text-center flex flex-col space-y-4 my-4">
        <Label className="text-3xl leading-8 font-bold">
          {workerFullName}
        </Label>
        <img src={workerProfilePicture?.data?.attributes?.url} alt={workerFullName} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-3">
          <div dangerouslySetInnerHTML={{ __html: workerContent }} />
        </div>
      </div>
    </div>
  );
};

export default WorkerPage;