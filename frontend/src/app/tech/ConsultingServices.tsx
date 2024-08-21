import { Label } from "@/components/ui/label";
import { ConsultingServicesData } from "@/lib/data";

const ConsultingServices = () => {
  return (
    <div className="text-center py-8 gap-6" style={{ backgroundImage: "url('img/bg/Tech-consulting-services.png')"}}>
      <div className="pb-8">
        <Label className="font-bold text-3xl">Consulting Services</Label>
      </div>
      <div className="grid grid-cols-3 gap-4 container mx-auto">
        {
          ConsultingServicesData.map((service, index) => (
            <div className="bg-white rounded-full md:rounded-full grid place-items-center mb-6 col-span-3 md:col-span-3 lg:col-span-1" key={index}>
              <div className="bg-tech-400 rounded-xl w-3/4 relative bottom-3 text-balance">
                <Label className="text-xs text-white py-4">{service?.title}</Label>
              </div>
              <div className="pb-6 px-8 md:px-4 text-balance">
                <Label className="text-base font-light">{service?.description}</Label>
              </div>
              </div>
          ))
        }
        </div>
    </div>
  );
}

export default ConsultingServices;