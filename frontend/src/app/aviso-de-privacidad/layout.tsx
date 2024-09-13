import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso de privacidad',
  openGraph: {
    title: 'Aviso de privacidad - Descubreradius',
    description: "Consulta el Aviso de Privacidad de Radius para obtener detalles sobre cómo manejamos tus datos de forma segura y transparente.",
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