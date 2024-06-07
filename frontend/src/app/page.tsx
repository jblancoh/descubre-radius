'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";

export default function Home() {
  
  const handleClick = () => {
    toast.success("Hello, world!")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
     <h1>Descubre RADIUS</h1>
      <Button
        onClick={handleClick}
        variant="outline"
      >
          Comenzar
      </Button>
      <div className="w-full bg-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
          <Card className="w-[298px] h-[316px] p-6 col-span-1">
            <CardHeader>
              <div className="flex flex-row items-center gap-1">
                <ChevronRight />
                <Label className="text-base font-normal">Analytics</Label>
              </div>
              <div className="flex flex-row items-center gap-4">
                <img 
                  src="/img/data-solutions.png"
                  alt="Data Solutions"
                  width={60}
                />
                <CardTitle className="text-xl font-bold">
                  Data Solutions
                </CardTitle>
                
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                <li
                  className="flex flex-row items-center gap-1"
                >
                  <ChevronRight />
                  <Label className="text-base font-normal">
                    Data Management
                  </Label>
                </li>
                <li
                  className="flex flex-row items-center gap-1"
                >
                  <ChevronRight />
                  <Label className="text-base font-normal">
                    Data Governance
                  </Label>
                </li>
                <li
                  className="flex flex-row items-center gap-1"
                >
                  <ChevronRight />
                  <Label className="text-base font-normal">
                    Data Architecture
                  </Label>
                </li>
                <li
                  className="flex flex-row items-center gap-1"
                >
                  <ChevronRight />
                  <Label className="text-base font-normal">
                    Data Warehousing
                  </Label>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
)