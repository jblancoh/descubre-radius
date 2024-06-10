
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface CardProps {
    title: string;
    imgSrc: string;
    description: {
      title: string;
      content: string;
    }[];
  }
  
const CardSolutions: React.FC<CardProps> = ({ title, imgSrc, description }) => {
  return (
      <Card className="w-[375px] p-1 flex flex-col h-full">
        <CardHeader className="flex flex-col items-center gap-2">
          <img 
            src={imgSrc}
            alt={title}
            width={60}
          />
          <CardTitle className="text-2xl font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 flex flex-col items-center justify-center ">
            {description.map((item, index) => (
              <TooltipProvider key={index} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <li className="border-2 rounded-3xl py-1 px-3 border-tech-600 w-fit hover:border-tech-400 cursor-pointer text-tech-600 hover:text-tech-400">
                      <Label className="text-lg font-normal leading-none cursor-pointer"> 
                        {/* 1F7D50 */}
                        {item.title}
                      </Label>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent className="w-96 bg-gray-100 p-3">
                    <p className="text-tech-600 text-sm">{item.content}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </ul>
        </CardContent>
      </Card>

  );
};
  
  export default CardSolutions;