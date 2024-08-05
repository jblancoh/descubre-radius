import BannerSolutions from "@/components/BannerSolutions";
import Contact from "@/components/Contact";
import SuccesfulCases from "@/components/SuccesfulCases";
import WhyRadiusSimple from "@/components/WhyRadiusSimple";


const Page = () => {
  return (
    <div>
      <BannerSolutions type="tech"/>
      <SuccesfulCases />
      <WhyRadiusSimple type="tech" />
      <Contact />
    </div>
  )
}

export default Page;