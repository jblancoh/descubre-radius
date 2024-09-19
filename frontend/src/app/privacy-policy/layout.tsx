import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy-Policy',
  openGraph: {
    title: 'Privacy Policy - Radius Us',
    description: "Consult the Radius Privacy Notice for details on how we handle your data securely and transparently.",
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