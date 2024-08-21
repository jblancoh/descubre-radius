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
    description: "Somos una consultora tecnológica, orgullosamente mexicana, que ha desarrollado distintas verticales de negocio para apoyar la transformación digital de la mano de nuestros clientes.",
    images: [''],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
