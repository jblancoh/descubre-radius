import BannerSolutions from "@/components/BannerSolutions";
import Contact from "@/components/Contact";
import WhyRadiusSimple from "@/components/WhyRadiusSimple";
import ConsulticyAndAdvisory from "./ConsulticyAndAdvisory";
import BannerFrameworks from "@/components/BannerFrameworks";

const Page = () => {
  return (
    <div>
      <BannerSolutions type="analytics" />
      <ConsulticyAndAdvisory />
      <WhyRadiusSimple type="analytics" />
      <BannerFrameworks type="analytics" />
      <Contact />
    </div>
  )
}

export default Page;