import BannerMenu from "@/components/BannerMenu";
import BannerProvideSolutions from "@/components/BannerProvideSolutions";
import SectorExperience from "@/components/SectorExperience";
import BannerBlogArticles from "@/components/BannerBlogArticles";
import WhyRadius from "@/components/WhyRadius";

import { Button } from "@/components/ui/button";
import DiscoverMaturityLevel from "@/components/DiscoverMaturityLevel";
import Link from "next/link";


import BannerExperts from "@/components/BannerExperts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BannerMenu/>
      <BannerExperts/>
      <BannerProvideSolutions/>
      <SectorExperience /> 
      <DiscoverMaturityLevel />
      <BannerBlogArticles /> 
      <WhyRadius />
    </main>
  );
}