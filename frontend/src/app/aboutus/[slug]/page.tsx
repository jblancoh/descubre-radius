import { Label } from "@/components/ui/label";
import Link from "next/link";

type WorkerPageProps = {
  params: {
    slug: string;
  };
};

const fetchWorker = async (slug: string): Promise<{ data: any, error: any }> => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/workers?filters[slug][$eq]=${slug}&populate=profilePicture`;
    
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
  const workerLongName = `${worker.data[0]?.attributes.name} ${worker.data[0]?.attributes.lastName}`;
  const workerProfilePicture = worker.data[0]?.attributes.profilePicture;
  const workerContent = worker.data[0]?.attributes.content;
  
  return (
    <div className="container mx-auto my-12 bg-white">
      <div className="text-center flex flex-col space-y-4 my-10 justify-around items-center">
        <img
          className="z-10 w-80"
          src={workerProfilePicture?.data?.attributes?.url}
          alt={workerLongName}
        />
        {/* Next component is for the blue line behinde the worker photo */}
        <div className="bg-slate-800 h-28 w-7/12 absolute bottom-64 z-0 bg-primary" />
        <Label className="text-3xl leading-8 font-bold text-white bg-red-500 py-8  w-4/6 absolute top-96 z-20">
          {workerLongName}
        </Label>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="my-14 mx-24">
          {workerContent && (<div dangerouslySetInnerHTML={{ __html: workerContent }} />)}
        </div>
      </div>
    </div>
  );
};

export default WorkerPage;