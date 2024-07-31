import OurselvesBanner from "@/components/OurselvesBanner";
import RadiusToday from "@/components/RadiusToday";
import Celebrating from "@/components/Celebrating";
import TeamRadiusCarousel from "./TeamRadiusCarousel";
import WeAre from "./WeAre";
import Contact from "@/components/Contact";

const Page = () => {
  return (
    <div>
      <OurselvesBanner />
      <RadiusToday />
      <Celebrating />
      <WeAre />
      <TeamRadiusCarousel />
      <Contact />
    </div>
  )
}

export default Page;