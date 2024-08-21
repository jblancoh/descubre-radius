'use client';
import { FC, useRef, useState } from 'react';
import useTransition from '@/hooks/useTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const rolesList = [
  {
    area: 'Arquitectura IT',
    isShowed: true,
    roles: [
      'Cloud Operations',
      'Analista & Ingeniero de BI',
      'DB Administrator',
      'IT Operations',
      'DevOps & DevSecOps',
      'Product Implementation',
      'Inegration Developer',
      'Product Monitoring',
      'BI',
      'Product Support Engineer',
      'KPIs y Dashboard',
    ]
  },
  {
    area: 'GRC',
    isShowed: false,
    roles: [
      'Gobierno del Datos',
      'Riesgo del Datos',
      'Cumplimiento y normativa del datos'
    ]
  },
  {
    area: 'Software Development',
    isShowed: false,
    roles: [
      'Fullstack Developer',
      'Software Architect',
      'Backend Developer',
      'Solutions Architect',
      'Front End Developer',
    ]
  },
  {
    area: 'QA Engineering',
    isShowed: false,
    roles: [
      'QA Engineers',
      'Test Analyst',
      'Test Automation Engineer',
    ]
  },
  {
    area: 'Web & Mobile Technologies',
    isShowed: false,
    roles: [
      'Web Developer',
      'Hybrid Mobile Developer',
      'UX / UI Designer',
      'Full Stack Developer',
    ]
  },
  {
    area: 'Project Management',
    isShowed: false,
    roles: [
      'IT Project Manager',
      'Product Owner',
      'Scrum Master',
    ]
  },
  {
    area: 'Creative Services',
    isShowed: false,
    roles: [
      'Digital Graphic Designer',
      'Reportes Adhoc',
      'Motion Graphic Animators',
      'Servicios de Omnicanalidad UX /UI',
      'Multimedia Graphic Designer',
      'Servicios creativos de Marketing',
      'Soluciones Adhoc con tu Tecnología',
    ]
  }
]

const Roles: FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { applicableYStyle, customTransitionStyles } = useTransition(bannerRef);

  const [roles, setRoles] = useState(rolesList);

  const toggleRoles = (index: number) => {
    const newRoles = roles.map((role, i) => {
      return {
        ...role,
        isShowed: i === index
      }
    });

    setRoles(newRoles);
  }

  return (
    <div ref={bannerRef} className="flex flex-col px-5 py-10 bg-tech-500 text-white">
      <div className="flex flex-1 flex-col justify-center items-start">
        <h1 className={`font-bold text-3xl text-center  ${applicableYStyle}`} style={customTransitionStyles} >Roles que podemos cubrir</h1>
      </div>
      <div className="flex flex-1 flex-col justify-center items-start">
        <Accordion type="single" collapsible defaultValue='item-1' className='w-full'>
          {roles.map(({ area, roles }, index) => (
            <AccordionItem key={index} value={`item-${index+1}`} className='border-2 rounded-lg w-full py-1 px-5 my-5'>
              <AccordionTrigger>
                <h2 className="font-bold text-2xl">{area}</h2>
              </AccordionTrigger>
              <AccordionContent>
                {roles.map((role, index) => (
                  <div key={index} className="text-lg flex items-start my-1">
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