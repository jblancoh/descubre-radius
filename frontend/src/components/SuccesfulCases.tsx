// Componente de casos de uso

import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Label } from "./ui/label";

const SuccesfulCases: FC = () => {
  return (
    <div className=" bg-tech-400 flex flex-col items-center space-y-4">
      <h2 className="font-bold text-3xl text-white mt-4">Casos de éxito</h2>
      <div className="grid grid-cols-4 gap-4 container pb-8">
        <div className="col-span-4 md:col-span-1">
          <Card className="rounded-none border-0 hover:-translate-y-1 duration-300 md:min-h-[500px] ">
            <CardHeader className="p-0">
              <img src="/img/pld-imagen.jpg" alt="pld" className="h-[200px] md:h-[145px] object-cover"/>
            </CardHeader>
            <CardContent>
              <Label className="font-bold text-xl leading-10">PLD</Label>
              <p className="text-xl md:text-sm">Solución Web ad hoc para la generación de reportes automáticos de Lavado de Dinero que son requeridos por Banco de México (Banxico) para el cumplimiento de la normativa y prevención de riesgo de la Fintech.</p>
            </CardContent>
            <CardFooter >
              <img src="/img/logo-aws.png" alt="aws" className="w-8 lg:w-12"/>
              <img src="/img/logo-html.png" alt="html" className="w-8 lg:w-12"/>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-4 md:col-span-1">
          <Card className="rounded-none border-0 hover:-translate-y-1 duration-300 md:min-h-[500px] ">
            <CardHeader className="p-0">
              <img src="/img/omnicanal-imagen.jpg" alt="omnicanal" className="h-[200px] md:h-[145px] object-cover" />
            </CardHeader>
            <CardContent>
              <Label className="font-bold text-xl leading-10">App Omnical</Label>
              <p className="text-xl md:text-sm">Desarrollo ad hoc Web y Mobile de una empresa Financiera para realizar transacciones SPEI en México de personas morales, la versión Mobile para personas físicas o transacciones "card to card". Solución escalable, omnicanal siguiendo las normativas y el cumplimiento de seguridad del dato(GRC).</p>
            </CardContent>
            <CardFooter >
              <img src="/img/logo-aws.png" alt="aws" className="w-8 lg:w-12"/>
              <img src="/img/logo-react.png" alt="react" className="w-8 lg:w-12" />
              <img src="/img/logo-angular.png" alt="angular" className="w-8 lg:w-12" />
              <img src="/img/logo-ionic.png" alt="ionic" className="w-8 lg:w-12" />
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-4 md:col-span-1">
          <Card className="rounded-none border-0 hover:-translate-y-1 duration-300 md:min-h-[500px]">
            <CardHeader className="p-0">
              <img src="/img/DPA-retail-imagen.jpg" alt="dpa-retail" className="h-[200px] md:h-[145px] object-cover" />
            </CardHeader>
            <CardContent>
              <Label className="font-bold text-xl leading-10">DPA Retail</Label>
              <p className="text-xl md:text-sm">Desarrollo para manejo y gestión deDepartamentos, Categorías, Finelines, Proveedores y Artículos productivos para tienda online o física.</p>
            </CardContent>
            <CardFooter >
              <img src="/img/logo-aws.png" alt="aws" className="w-8 lg:w-12" />
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-4 md:col-span-1">
          <Card className="rounded-none border-0 hover:-translate-y-1 duration-300 md:min-h-[500px]">
            <CardHeader className="p-0">
              <img src="/img/PMR-imagen.jpg" alt="pmr" className="h-[200px] md:h-[145px] object-cover" />
            </CardHeader>
            <CardContent>
              <Label className="font-bold text-xl leading-10">PMR</Label>
              <p className="text-xl md:text-sm">Desarrollo para manejo y gestión deDepartamentos, Categorías, Finelines, Proveedores y Artículos productivos para tienda online o física.</p>
            </CardContent>
            <CardFooter >
              <img src="/img/logo-aws.png" alt="aws" className="w-8 lg:w-12"/>
              <img src="/img/logo-spring.png" alt="spring" className="w-8 lg:w-12"/>
              <img src="/img/logo-mysql.png" alt="mysql" className="w-8 lg:w-12"/>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SuccesfulCases;
