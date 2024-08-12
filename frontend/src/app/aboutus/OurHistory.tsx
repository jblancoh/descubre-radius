'use client';
import { FC, useRef } from 'react';
import useTransition from "@/hooks/useTransition";
import { Label } from '@/components/ui/label';
import { timeLine } from '@/lib/utils';

const OurHistory: FC = () => {
  const bannerRef = useRef(null);
  const {applicableYStyle, customTransitionStyles} = useTransition(bannerRef);

  return (
    <div ref={bannerRef} className="w-full flex flex-col justify-center text-white bg-[#211039] py-20 lg:px-20">
      <Label
        className={`text-2xl leading-8 font-bold w-100 text-center ${applicableYStyle}`}
        style={customTransitionStyles}
      >
        Nuestra Historia
      </Label>
      <img src="/img/linea-historia.svg" alt="Time Line" className='hidden lg:block mt-5' />
      <div className="container flex flex-col items-center my-10 lg:flex-row lg:items-start lg:-mt-6 md:px-20 lg:-ml-10">
        {timeLine.map((item, index) => {
          const { year, title, content } = item
          const extraMilliseconds = 0.5 * index
          const customListTransitionStyles = { transition: `opacity ${1.5 + extraMilliseconds}s, transform ${1.5 + extraMilliseconds}s` }
          return (
          <div
            key={index}
            className={`flex flex-1 w-full md:w-2/3 lg:flex-col lg:justify-start lg:items-center text-left py-4 ${applicableYStyle}`}
            style={customListTransitionStyles}
          >
            <span className="w-4 h-4 rounded-full mx-5 px-2 bg-white" />
            <p className="text-2xl font-black mr-5">{year}</p>
            <div className="text-white/[.7] text-sm ml-5">
              <p className="-ml-4">{title}</p>
              <ul className='list-disc'>
                {content.map((itemContent, index) => (
                  <li key={index}>{itemContent}</li>
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