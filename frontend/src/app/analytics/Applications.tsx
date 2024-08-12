'use client';
import { FC, useRef } from 'react';
import useTransition from '@/hooks/useTransition';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ApplicationList = [
    {
      title: 'Automatización de Reportería',
      imgSrc: '/img/1-AutomatizacionReporteria-Analytics.jpg',
    },
    {
      title: 'Alertamiento y diagnóstico Automatizado',
      imgSrc: '/img/2-AlertamientoYdiagnostico-Analytics.jpg',
    },
    {
      title: 'Monitoreo de desempeño de eventos',
      imgSrc: '/img/3-MonitoreoEventos-Analytics.jpg',
    },
    {
      title: 'Modelo de rotación',
      imgSrc: '/img/4-ModeloRotacion-Analytics.jpg',
    },
]

const Applications: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { applicableYStyle } = useTransition(bannerRef);

  return (
    <div
      ref={bannerRef}
      className='bg-analytics-500 text-white flex flex-col items-center justify-center py-20 px-5'
    >
      <h1 className='text-3xl font-bold mb-16'>Aplicativos que hemos realizado</h1>
      <div className="container lg:px-32 flex flex-row justify-evenly lg:justify-between flex-wrap">
        {ApplicationList.map((app, index) => (
          <Card className="w-60 flex flex-col justify-start bg-analytics-500 border-2 border-b-8 border-b-analytics-400 rounded-none shadow-none h-80 my-5">
            <CardHeader className="flex flex-col items-center p-0">
              <img 
                src={app.imgSrc}
                alt={app.title}
                className='w-full'
              />
            </CardHeader>
            <CardContent className="p-6 flex flex-1 flex-col justify-center">
              <p className="text-white text-center">
                {app.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Applications;