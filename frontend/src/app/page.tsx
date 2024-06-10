import BannerProvideSolutions from "@/components/BannerProvideSolutions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <h1>Descubre RADIUS</h1>
      <Link href="/analytics">
        <Button>
          Analytics
        </Button>
      </Link>
      <BannerProvideSolutions />
    </main>
  );
}