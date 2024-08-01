"use client"
import { FC, useRef } from "react";
import useTransition from "@/hooks/useTransition";
import { Label } from "@/components/ui/label";

const valuesList = [
  'Fe',
  'Confiabilidad',
  'Integridad',
  'Adaptabilidad',
  'Excelencia',
  'Innovación',
  'Liderazgo'
]

const OurValues : FC = () => {
  const bannerRef = useRef(null);
  const {applicableYStyle, customTransitionStyles} = useTransition(bannerRef);

  return (
    <div
      className="flex flex-col justify-center items-center bg-[#211039] py-20 lg:px-80 px-10 md:px-48 text-white"
      ref={bannerRef}
    >
      <Label
        className={`text-2xl leading-8 font-bold w-100 text-center ${applicableYStyle}`}
        style={customTransitionStyles}
      >
        Nuestros Valores
      </Label>
      <div className="flex flex-row justify-center flex-wrap my-10 gap-x-8">
        {valuesList.map((value, index) => (
          <div
            key={index}
            className={`bg-red-500 px-8 py-6 my-5 ${applicableYStyle}`}
            style={customTransitionStyles}
          >
            <Label className="text-sm font-bold px-2">
              {value}
            </Label>
          </div>
        ))}
      </div>
    </div>)
}

export default OurValues;