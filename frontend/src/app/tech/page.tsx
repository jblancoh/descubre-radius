import BannerSolutions from "@/components/BannerSolutions";
import Contact from "@/components/Contact";
import SuccesfulCases from "@/components/SuccesfulCases";
import WhyRadiusSimple from "@/components/WhyRadiusSimple";
import BannerFrameworks from "@/components/BannerFrameworks";
import BannerService from "@/components/BannerService";
import Roles from './Roles';
import ConsultingServices from "./ConsultingServices";
import WeSolveNeeds from "./WeSolveNeeds";


const Page = () => {
  return (
    <div>
      <BannerService type="tech"/>
      <BannerSolutions type="tech"/>
      <WeSolveNeeds />
      <ConsultingServices />
      <BannerFrameworks type="tech" />
      <Roles />
      <SuccesfulCases />
      <WhyRadiusSimple type="tech" />
      <Contact />
    </div>
  )
}

export default Page;