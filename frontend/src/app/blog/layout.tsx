import React, { FC } from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog - Descubreradius',
    description: "Explora el blog de Radius para obtener insights estratégicos sobre Data y Analítica, Tecnología, Innovación y más. Descubre cómo estas tendencias pueden transformar tu negocio y mantenerte a la vanguardia.",
    images: [''],
  },
}
const Layout = ({ children,}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;