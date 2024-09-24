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
  metadataBase: new URL("http://localhost:3000"), // Cambia esto a la URL de producción cuando sea necesario
  title: {
    default: "Radius",
    template: "%s | Descubreradius",
  },
  description: "Digital transformation consulting firm, offering customized services to deliver value to your business from the idea through to a full-scale solution.",
  openGraph: {
    description: "Digital transformation consulting firm, offering customized services to deliver value to your business from the idea through to a full-scale solution.",
    images: ['/img/favicon.ico'], // Ruta del favicon
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/img/favicon.ico'], // Ruta del favicon
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
