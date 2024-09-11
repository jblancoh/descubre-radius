import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech',
  openGraph: {
    title: 'Tech - Descubreradius',
    description: "En Radius, impulsamos la transformación digital de tu negocio con soluciones tecnológicas a medida, desde desarrollo de software hasta infraestructura avanzada, garantizando innovación y eficiencia.",
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