
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
import { cn } from "@/lib/utils";

interface CardProps {
    title: string;
    imgSrc: string;
    description: {
      title: string;
      content: string;
    }[];
    type: 'tech' | 'analytics';
  }
  
const CardSolutions: React.FC<CardProps> = ({ title, imgSrc, description, type }) => {
  
  const colorClasses = {
    "tech": {
      border: 'border-tech-400',
      hoverBorder: 'hover:border-tech-400 hover:bg-tech-400',
      text: 'text-tech-400',
    },
    "analytics": {
      border: 'border-analytics-500',
      hoverBorder: 'hover:border-analytics-500 hover:bg-analytics-500',
      text: 'text-analytics-500',
    },
  };
  
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
                    <li className={cn("border-2 rounded-3xl py-1 px-3 w-fit cursor-pointer hover:text-white", colorClasses[type].border, colorClasses[type].hoverBorder, colorClasses[type].text)} >
                      <Label className="text-lg font-normal leading-none cursor-pointer"> 
                        {item.title}
                      </Label>
                    </li>
                  </TooltipTrigger>
                  {
                    item.content && (
                      <TooltipContent className="w-96 bg-gray-100 p-3">
                        <p className={cn("text-sm", colorClasses[type].text)}>
                          {item.content}
                        </p>
                      </TooltipContent>
                    )
                  }
                </Tooltip>
              </TooltipProvider>
            ))}
          </ul>
        </CardContent>
      </Card>

  );
};
  
  export default CardSolutions;