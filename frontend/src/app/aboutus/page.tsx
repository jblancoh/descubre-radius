import OurselvesBanner from "@/components/OurselvesBanner";
import RadiusToday from "@/components/RadiusToday";
import Celebrating from "@/components/Celebrating";
import BannerBrands from "@/components/BannerBrands";
import TeamRadiusCarousel from "./TeamRadiusCarousel";
import OurValues from "./OurValues";
import WeAre from "./WeAre";
import Contact from "@/components/Contact";

const Page = () => {
  return (
    <div>
      <OurselvesBanner />
      <RadiusToday />
      <Celebrating />
 <BannerBrands />
      <OurValues />
      <WeAre />
      <TeamRadiusCarousel />
      <Contact />
    </div>
  )
}

export default Page;