'use client';
import { Label } from "@/components/ui/label";
import { WeSolveNeedsData } from "@/lib/data";
import { useState } from "react";

const WeSolveNeeds = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-tech-400 text-center py-8 gap-6">
      <div className="pb-8">
        <Label className="font-bold text-3xl text-white">Resolvemos necesidades de:</Label>
      </div>
      <div className="grid grid-cols-5 container mx-auto">
        <div className="col-span-1">
          {WeSolveNeedsData.map((service, index) => (
            <div className={`${active === index ? 'bg-white' : 'bg-tech-800'} text-balance`} key={index} onClick={() => setActive(index)}>
              <Label className={`text-xs ${active === index ? 'text-tech-800' : 'text-white'} py-4`}>{service?.title}</Label>
            </div>
          ))
          }
        </div>
        <div className="col-span-4 bg-white grid place-items-center text-balance">
          <Label className="text-base font-bold text-tech-800">
            {WeSolveNeedsData[active]?.title}
          </Label>
          <Label className="text-base font-light text-tech-800">{WeSolveNeedsData[active]?.description}</Label>
          {
            (WeSolveNeedsData[active]?.list) &&
            <ul>
              {WeSolveNeedsData[active]?.list.map((item, index) => (
                <li key={index} className="text-base text-left font-light text-tech-800 list-disc">{item}</li>
              ))}
            </ul>

          }
        </div>
      </div>
    </div>
  );
}

export default WeSolveNeeds;