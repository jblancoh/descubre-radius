import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Empresa de desarrollo de software en México',
  description: 'En Radius Tech somos una empresa de desarrollo de software en México con más de 10 años de experiencia: te ayudamos a transformar tu negocio.',
  openGraph: {
    title: 'Empresa de desarrollo de software en México - Descubreradius',
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}