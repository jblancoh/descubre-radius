'use client';
import { FC, useRef } from 'react';
import useTransition from '@/hooks/useTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { Roles as roles } from '@/lib/data';

const Roles: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { applicableYStyle, customTransitionStyles } = useTransition(bannerRef);

  return (
    <div ref={bannerRef} className="flex flex-col px-10 py-10 bg-tech-500 text-white lg:flex-row lg:items-start 2xl:px-60">
      <div className={`flex flex-1 flex-col justify-evenly items-center p-5 lg:items-start ${applicableYStyle}`} style={customTransitionStyles}>
        <h1 className="font-bold text-3xl text-center w-full my-5 md:w-2/5 lg:text-left" >Roles que podemos cubrir</h1>
        <div className="hidden lg:flex flex-col justify-between items-start">
          <img src="/img/Tech-roles.jpg" alt="Tech roles" className="w-5/6 my-10" />
          <p className='text-lg'>¿Buscas un perfil en específico?</p>
          <a href="/tech/#contact-form">
            <Button variant="ghost" size="lg" className='border-2 border-white rounded-3xl text-lg my-5 hover:text-tech-500'>Contáctanos</Button>
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-start">
        <Accordion type="single" collapsible defaultValue='item-1' className='w-full'>
          {roles.map(({ area, roles }, index) => (
            <AccordionItem
              key={index}
              value={`item-${index+1}`}
              className={`border-2 rounded-lg w-full px-5 my-5 ${applicableYStyle}`}
              style={customTransitionStyles}
            >
              <AccordionTrigger>
                <h2 className="font-bold text-xl">{area}</h2>
              </AccordionTrigger>
              <AccordionContent className='md:grid md:grid-cols-2' >
                {roles.map((role, index) => (
                  <div key={index} className="text-lg flex items-start">
                    <img src="/img/bullet-blue.svg" alt="bullet" className="w-2 mr-3 mt-2" />
                    <span className='text-xl'>{role}</span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Roles