'use client';
import { FC, useRef } from 'react';
import useTransition from '@/hooks/useTransition';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Applications: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { applicableYStyle } = useTransition(bannerRef);

  return (
    <div
      ref={bannerRef}
      className='bg-analytics-500 text-white flex flex-col items-center justify-center p-36'
    >
      <h1 className='text-3xl font-bold mb-4'>Aplicativos que hemos realizado</h1>
      <div className="container mx-auto flex justify-between">
      <Card className="w-1/4 flex flex-col h-full">
        <CardHeader className="flex flex-col items-center gap-2">
          <img 
            src={'/img/bg-analytics.jpg'}
            alt={'title'}
            width={60}
          />
          <CardTitle className="text-2xl font-bold">
            {'title'}
          </CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="w-1/4 flex flex-col h-full">
        <CardHeader className="flex flex-col items-center gap-2">
          <img 
            src={'/img/bg-analytics.jpg'}
            alt={'title'}
            width={60}
          />
          <CardTitle className="text-2xl font-bold">
            {'title'}
          </CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="w-1/4 flex flex-col h-full">
        <CardHeader className="flex flex-col items-center gap-2">
          <img 
            src={'/img/bg-analytics.jpg'}
            alt={'title'}
            width={60}
          />
          <CardTitle className="text-2xl font-bold">
            {'title'}
          </CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      <Card className="w-1/4 flex flex-col h-full">
        <CardHeader className="flex flex-col items-center gap-2">
          <img 
            src={'/img/bg-analytics.jpg'}
            alt={'title'}
            width={60}
          />
          <CardTitle className="text-2xl font-bold">
            {'title'}
          </CardTitle>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default Applications;