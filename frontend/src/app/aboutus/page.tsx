import OurselvesBanner from "@/components/OurselvesBanner";
import RadiusToday from "@/components/RadiusToday";
import Celebrating from "@/components/Celebrating";
import TeamRadiusCarousel from "./TeamRadiusCarousel";
import WeAre from "./WeAre";

const Page = () => {
  return (
    <div>
      <OurselvesBanner />
      <RadiusToday />
      <Celebrating />
      <WeAre />
      <TeamRadiusCarousel />
    </div>
  )
}

export default Page;