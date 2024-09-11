import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analytics',
  openGraph: {
    title: 'Analytics - Descubreradius',
    description: "Descubre cómo en Radius potenciamos tu negocio con soluciones avanzadas en Data y Analítica, transformando datos en insights accionables para impulsar decisiones estratégicas y crecimiento sostenible.",
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