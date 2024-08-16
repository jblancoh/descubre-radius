import { Solutions } from "@/lib/data"
import CardSolutions from "./CardSolutions"
import { cn } from "@/lib/utils"

interface BannerSolutionsProps {
  type: 'tech' | 'analytics'
}

const BannerSolutions: React.FC<BannerSolutionsProps> = ({ type }) => {
  
  const solutionsData = Solutions[type]
  
  const colorClasses = {
    "tech": "bg-tech-600",
    "analytics": "bg-analytics-600",
  };
  
  return <div className={`relative w-full bg-gray-400 bg-cover bg-top pb-[130px] pt-[30px]`} 
      style={{
        backgroundImage: `url(${solutionsData?.bgImg})`
      }}
    >
      <div className={cn("absolute inset-0 bg-opacity-80", colorClasses[type])}></div>
      <p className="relative text-white flex justify-center font-bold text-3xl pt-11 my-12 ">Soluciones</p>
      <div className="relative flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-x-20 lg:gap-y-10 place-items-center">
          {
            solutionsData.cards.map((card, index) => (
              <CardSolutions
                key={index}
                title={card.title}
                imgSrc={card.imgSrc}
                description={card.description}
                type={type}
              />
            ))
          }
        </div>
      </div>
    </div>
}

export default BannerSolutions