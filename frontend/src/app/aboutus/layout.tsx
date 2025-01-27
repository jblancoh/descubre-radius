import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  openGraph: {
    title: 'Nosotros - Descubreradius',
    description: "Somos una consultora tecnológica, orgullosamente mexicana, que ha desarrollado distintas verticales de negocio para apoyar la transformación digital de la mano de nuestros clientes.",
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