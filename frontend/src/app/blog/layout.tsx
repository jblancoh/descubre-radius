import React, { FC } from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog - Descubreradius',
    description: "Somos una consultora tecnológica, orgullosamente mexicana, que ha desarrollado distintas verticales de negocio para apoyar la transformación digital de la mano de nuestros clientes.",
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