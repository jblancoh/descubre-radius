'use client'
import { sendContact } from "@/actions/contact"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FC, useRef } from "react"
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { toast } from "sonner"

const initialState = {
  name: '',
  email: '',
  message: '',
  phone: '',
  company: '',
  privacyPolicy: false
}

const Page:FC = () => {
  const [state, formAction] = useFormState(sendContact, initialState)
  const { inputValue, handlePhoneValueChange, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'mx',
      value: state.phone,
      countries: defaultCountries,
    });
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div className="container mx-auto p-8">
      <div className="mx-auto p-8 space-y-12">
        <div className="grid grid-cols-1 gap-8">
          <Label className="text-red-500 text-3xl font-bold">Contacto</Label>
          <div className="relative h-[400px] flex items-center justify-center">
            <img
              src="/img/bg/contact.png"
              alt="Contacto"
              className="absolute top-0 left-0 object-cover h-full w-full filter brightness-75"
            />
            <div className="z-10 text-center">
              <span className="text-white text-2xl md:text-4xl font-bold">
                Descubre nuevos horizontes para tu empresa
              </span>
              <br />
              <br />
              <span className="text-white text-xl md:text-3xl">
                Aprovecha al máximo las nuevas tecnologías
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-red-500">Escríbenos</h2>
            <p className="">
              Queremos conocer tus necesidades y objetivos: déjanos tus datos y nos pondremos en contacto lo antes posible.
            </p>
            <p>Llámanos: +52 55 2911 2989</p>
          </div>
          <div>
            <form ref={formRef} className="space-y-4" action={async (formData: FormData) => {
                await formAction(formData)
                if (state.errors) {
                  toast.error('Error al enviar mensaje')
                  return
                }
                toast.success('Mensaje enviado correctamente')
                formRef.current?.reset()
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            )}
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
              <Textarea placeholder="Mensaje" className="min-h-[150px]" name="message"/>
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
              <Button className="w-full bg-red-500 text-white" type="submit" >Enviar</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page