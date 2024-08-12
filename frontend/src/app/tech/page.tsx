import BannerSolutions from "@/components/BannerSolutions";
import Contact from "@/components/Contact";
import SuccesfulCases from "@/components/SuccesfulCases";
import WhyRadiusSimple from "@/components/WhyRadiusSimple";
import BannerFrameworks from "@/components/BannerFrameworks";
import BannerService from "@/components/BannerService";


const Page = () => {
  return (
    <div>
      <BannerService type="tech"/>
      <BannerSolutions type="tech"/>
      <SuccesfulCases />
      <WhyRadiusSimple type="tech" />
      <BannerFrameworks type="tech" />
      <Contact />
    </div>
  )
}

export default Page;