import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Radius",
    template: "%s | Descubreradius",
  },
  openGraph: {
    description: "Descubre Radius, una consultora líder en transformación digital que ofrece soluciones tecnológicas y estratégicas holísticas e innovadoras. Conócenos, Radius te puede llevar al futuro.",
    images: [''],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/*<NavBar />*/}
        {children}
        {/* {<Footer /> */}
       {/* <Toaster />*/}
      </body>
    </html>
  );
}
