"use client";

import Link from 'next/link';
import React from 'react';

interface CardProps {
  img: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ img, title, description, date, link }) => {
    return (
      <a href={link} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <p className="text-red-500">Leer artículo &rarr;</p>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
      </a>
    );
};

const BannerBlogArticles: React.FC = () => {
  const cardsData = [
    {
      img: '/path-to-image1.jpg',
      title: 'La IA Generativa vs IA Tradicional: Aplicaciones, Comparativas y Tende...',
      description: 'En el panorama actual de la inteligencia artificial (IA), la IA generativa y la IA tradicional están marcando...',
      date: 'junio 25, 2024',
      link: '/article-1',
    },
    {
      img: '/path-to-image2.jpg',
      title: 'Desbloqueando el Poder de los Datos: La Guía Definitiva para Servicio...',
      description: 'En el panorama empresarial actual, aprovechar los datos para la toma de decisiones estratégicas no es solo un...',
      date: 'junio 24, 2024',
      link: '/article-2',
    },
    {
      img: '/path-to-image3.jpg',
      title: 'Aplicaciones de la Inteligencia Artificial en la Construcción: Innova...',
      description: 'La inteligencia artificial (IA) está transformando la industria de la construcción, un sector tradicionalmen...',
      date: 'junio 21, 2024',
      link: '/article-3',
    },
    {
      img: '/path-to-image4.jpg',
      title: 'Staffing de Equipos Especializados de TI: Nearshoring y Staff Augmenta...',
      description: 'En el mundo empresarial actual, la tecnología de la información (TI) se ha convertido en un pilar fundamenta...',
      date: 'junio 20, 2024',
      link: '/article-4',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-3 text-red-500">Lo último de Radius</h1>
      <h2 className='text-lg text-center mb-6'>Noticias, eventos y artículos de interés.</h2>
      <div className="text-center mb-8">
        <Link href="/blog" className="inline-block bg-white border-2 border-gray-500 text-gray-800 px-6 py-1 rounded-full hover:bg-gray-500 hover:text-white transition-colors duration-300">
          Ir al blog
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default BannerBlogArticles;