import BannerMenu from "@/components/BannerMenu";
import BannerProvideSolutions from "@/components/BannerProvideSolutions";
import SectorExperience from "@/components/SectorExperience";
import { Button } from "@/components/ui/button";
import Link from "next/link";


import BannerExperts from "@/components/BannerExperts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <BannerMenu/>
      <h1>Descubre RADIUS</h1>
      <Link href="/analytics">
        <Button>
          Analytics
        </Button>
      </Link>
      <BannerExperts/>
      <BannerProvideSolutions/>
      {/* <SectorExperience />  */}

    </main>
  );
}