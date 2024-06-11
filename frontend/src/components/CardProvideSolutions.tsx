
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";



const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
)



interface CardProps {
    label: string;
    title: string;
    imgSrc: string;
    description: string[];
  }
  
const CardSolutions: React.FC<CardProps> = ({ label, title, imgSrc, description }) => {
  return (
      <Card className="w-[375px] p-1 flex flex-col h-full">
        <CardHeader>
          <div className="flex flex-row items-center gap-1">
            <ChevronRight />
            <Label className="text-base font-normal">{label}</Label>
          </div>
          <div className="flex flex-row items-center gap-4">
            <img 
              src={imgSrc}
              alt={title}
              width={60}
            />
            <CardTitle className="text-xl font-bold">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {description.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="flex items-center pt-[2px]"> 
                  <ChevronRight />
                </div>
                <Label className="text-base font-normal leading-none"> 
                  {item}
                </Label>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

  );
};
  
  export default CardSolutions;