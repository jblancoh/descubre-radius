import BannerSolutions from "@/components/BannerSolutions";
import SuccesfulCases from "@/components/SuccesfulCases";
import WhyRadiusSimple from "@/components/WhyRadiusSimple";


const Page = () => {
  return (
    <div>
      <BannerSolutions type="tech"/>
      <SuccesfulCases />
      <WhyRadiusSimple type="tech" />
    </div>
  )
}

export default Page;