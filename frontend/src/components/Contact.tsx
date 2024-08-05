'use client'
import { sendContact } from "@/actions/contact"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FC, useRef } from "react"
import { useFormState } from "react-dom"
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const initialState = {
  name: '',
  email: '',
  message: '',
  phone: '',
  company: '',
  privacyPolicy: false
}

const Contact:FC = () => {
  const [state, formAction] = useFormState(sendContact, initialState)
  const { inputValue, handlePhoneValueChange, country, setCountry } =
  usePhoneInput({
    defaultCountry: 'mx',
    value: state.phone,
    countries: defaultCountries,
  });
  
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div className="bg-gray-200 w-full">
      <div className="container p-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <Label className="text-3xl font-bold">Contáctanos</Label>
            <p className="text-gray-600">
              Trabajemos juntos
              <br />
              Conecta con tus clientes, descubre nuevas oportunidades, y haz que tu negocio crezca ¡Tu marca es nuestro
              reto!
              <br />
              Llámanos: +52 55 2911 2989
            </p>
            {/* <p className="text-gray-600">O si lo prefieres</p>
            <Button variant="secondary" className="bg-[#e50914] text-white">
              Agenda una reunión virtual aquí.
            </Button> */}
          </div>
          <div>
            <form ref={formRef} className="space-y-4" action={async (formData: FormData) => {
              formAction(formData)
              if (state.errors) return toast.error('Error al enviar mensaje')
              toast.success('Mensaje enviado correctamente')
              formRef.current?.reset()
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Input placeholder="Nombre" name="name" />
                  <p aria-live="polite" className="text-red-500">
                    {state?.errors?.name}
                  </p>
                </div>
                <div className="flex flex-col">
                  <Input placeholder="Empresa" name="company" />
                  <p aria-live="polite" className="text-red-500">
                    {state?.errors?.company}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Input placeholder="Email" type="email" name="email" />
                  <p aria-live="polite" className="text-red-500">
                    {state?.errors?.email}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <Select
                      onValueChange={(value) => {
                        setCountry(value as CountryIso2);
                      }}
                    >
                      <SelectTrigger
                        className="flex items-center px-4 max-w-20 border-r-0 rounded-r-none"
                      >
                        <FlagImage
                          iso2={country.iso2}
                          className="w-6 h-6"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {
                          defaultCountries.map((c) => {
                            const country = parseCountry(c)
                            return (
                              <SelectItem
                                key={country.iso2}
                                value={country.iso2}
                                className="flex items-center"
                              >
                                <div className="flex flex-row">
                                  <FlagImage
                                    iso2={country.iso2}
                                    className="w-6 h-6"
                                  />
                                  <span className="ml-2">{country.name}</span>
                                  <span className="ml-2">+{country.dialCode}</span>

                                </div>
                              </SelectItem>
                            )
                          }
                          )
                        }
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Teléfono"
                      type="tel"
                      name="phone"
                      value={inputValue}
                      onChange={handlePhoneValueChange}
                      className="border-l-0 rounded-l-none w-full"
                    />
                  </div>
                  <p aria-live="polite" className="text-red-500">
                    {state?.errors?.phone}
                  </p>
                </div>
              </div>
              <Textarea placeholder="Mensaje" className="min-h-[150px]" name="message" />
              <p aria-live="polite" className="text-red-500">
                {state?.errors?.message}
              </p>
              <div className="flex items-center">
                <Checkbox
                  id="privacy-policy"
                  name="privacyPolicy"
                />
                <label htmlFor="privacy-policy" className="ml-2 text-sm font-normal">
                  Acepto la <Button asChild variant={"link"} ><Link href="/aviso-de-privacidad" className="pl-0" target="_blank">política de privacidad</Link></Button>
                </label>
              </div>
              <p aria-live="polite" className="text-red-500">
                {state?.errors?.privacyPolicy}
              </p>
              <Button className="w-full bg-red-500 text-white" type="submit" disabled={state.isLoading}>
                {
                  state.isLoading ? 'Enviando...' : 'Enviar'
                }
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
)}
  
export default Contact;
