import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactanos',
  openGraph: {
    title: 'Contactanos - Descubreradius',
    description: "Ponte en contacto con Radius y descubre cómo podemos ayudarte a transformar tu negocio. Nuestro equipo está listo para ofrecerte soluciones tecnológicas de alta calidad a la medida de tus necesidades.",
    images: [''],
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}