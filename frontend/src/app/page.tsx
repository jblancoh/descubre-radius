import BannerMenu from "@/components/BannerMenu";
import BannerProvideSolutions from "@/components/BannerProvideSolutions";
import SectorExperience from "@/components/SectorExperience";
import BannerBlogArticles from "@/components/BannerBlogArticles";
import WhyRadius from "@/components/WhyRadius";
import DiscoverMaturityLevel from "@/components/DiscoverMaturityLevel";
import BannerExperts from "@/components/BannerExperts";
import Contact from "@/components/Contact";
import { Carousel } from "@/components/ui/carousel";
import CarouselHome from "@/components/CarouselHome";
import TypesSolutions from "@/components/TypesSolutions";
import UseCasesBanner from "@/components/UseCasesBanner";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CarouselHome />
      <TypesSolutions />
      <BannerMenu/>
      <BannerExperts/>
      <BannerProvideSolutions/>
      <UseCasesBanner />
      <SectorExperience /> 
      <WhyRadius />
      <DiscoverMaturityLevel />
      <BannerBlogArticles /> 
      <Contact />
    </main>
  );
}