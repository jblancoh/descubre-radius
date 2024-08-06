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
    <div className="w-full flex flex-col justify-center text-white bg-[#211039] py-20 lg:px-20">
      <Label
        className={`text-2xl leading-8 font-bold w-100 text-center`}
      >
        Nuestra Historia
      </Label>
      <img src="/img/linea-historia.svg" alt="Time Line" className='hidden lg:block mt-5' />
      <div className="container flex flex-col items-center my-10 lg:flex-row lg:items-start lg:-mt-6 md:px-20 lg:-ml-10">
        {timeLine.map((item, index) => {
          const { year, title, content } = item
          return (
          <div key={index} className="flex flex-1 w-full md:w-2/3 lg:flex-col lg:justify-start lg:items-center text-left py-4">
            <span className="w-4 h-4 rounded-full mx-5 px-2 bg-white" />
            <p className="text-2xl font-black mr-5">{year}</p>
            <div className="text-white/[.7] text-sm ">
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
      <img src="/img/footer-nuestra-historia.svg" alt="Time Line" className='hidden w-4/6 ml-80 lg:block' />
    </div>
  );
};

export default OurHistory;