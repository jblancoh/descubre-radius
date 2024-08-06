'use client';
import { FC, useRef } from 'react';
import useTransition from "@/hooks/useTransition";
import { Label } from '@/components/ui/label';

const timeLine = [
  {
    year: 2013,
    title: null,
    content: ['Servicios de Martketing Digital'],
  },
  {
    year: 2015,
    title: 'Proyectos enfocados en:',
    content: ['Desarrollo de Software', 'Diseño UX-UI'],
  },
  {
    year: 2019,
    title: 'Proyectos que involucran:',
    content: ['IT Staff Augmentation', 'Desarrollo de Software'],
  },
  {
    year: 2020,
    title: 'Enfoque en:',
    content: ['IT Staff Augmentation', 'Equipos: UX-Ui, Gestion de Proyectos, Data Anal[itica'],
  },
  {
    year: 2023,
    title: null,
    content: [
      'Proyectos de TI complejos',
      'Machine Learning',
      'Cultura Analítica',
      'Desarrollo de Software a la medida con equipos interdisciplinarios'
    ],
  }
]

const OurHistory: FC = () => {
  const bannerRef = useRef(null);
  const {applicableYStyle, customTransitionStyles} = useTransition(bannerRef);
  return (
    <div className="w-full flex flex-col justify-center text-white bg-[#211039] py-20">
      <Label
        className={`text-2xl leading-8 font-bold w-100 text-center`}
      >
        Nuestra Historia
      </Label>
      <div className="container p-10 lg:flex lg:border-t-2">
        {timeLine.map((item, index) => {
          const { year, title, content } = item
          return (
          <div key={index} className="flex text-justify p-4">
            <span className="w-4 h-4 rounded-full mx-5 bg-white" />
            <p className="text-2xl font-black mr-5">{year}</p>
            <div className="text-white/[.7] text-sm mx-5">
              <p className="-ml-4">{title}</p>
              <ul className='list-disc'>
                {content.map((itemContent, index) => (
                  <li className="">{itemContent}</li>
                ))}
              </ul>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};

export default OurHistory;