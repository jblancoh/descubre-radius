import BannerSolutions from "@/components/BannerSolutions";
import Contact from "@/components/Contact";
import WhyRadiusSimple from "@/components/WhyRadiusSimple";
import ConsulticyAndAdvisory from "./ConsulticyAndAdvisory";

const Page = () => {
  return (
    <div>
      <BannerSolutions type="analytics" />
      <ConsulticyAndAdvisory />
      <WhyRadiusSimple type="analytics" />
      <Contact />
    </div>
  )
}

export default Page;