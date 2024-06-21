import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FC } from "react"

const Contact:FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <Label className="text-3xl font-bold">Contáctanos</Label>
          <p className="text-gray-600">
            Trabajemos juntos
            <br />
            Conecta con tus clientes, descubre nuevas oportunidades, y haz que tu negocio crezca ¡Tu marca es nuestro
            reto!
            <br />
            hola@descubreradius.com
            <br />
            Llámanos: +52 55 2911 2989
          </p>
          <p className="text-gray-600">O si lo prefieres</p>
          <Button variant="secondary" className="bg-[#e50914] text-white">
            Agenda una reunión virtual aquí.
          </Button>
        </div>
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Nombre" />
              <Input placeholder="Empresa" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Email" type="email" />
              <Input placeholder="Teléfono" type="tel" />
            </div>
            <Textarea placeholder="Mensaje" className="min-h-[150px]" />
            <div className="flex items-center">
              <Checkbox id="privacy-policy" />
              <label htmlFor="privacy-policy" className="ml-2 text-sm text-gray-600">
                Acepto la política de privacidad
              </label>
            </div>
            <Button className="w-full bg-red-500 text-white">Enviar</Button>
          </form>
        </div>
      </div>
    </div>
)}
  
export default Contact;
