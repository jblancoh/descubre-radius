'use client';
import { sendContact } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef, forwardRef } from "react";
import { useFormState } from "react-dom";
import {
  CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import Link from "next/link";

const initialState = {
  name: '',
  email: '',
  message: '',
  phone: '',
  company: '',
  privacyPolicy: false
};

const ContactusMaster = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => {
  const [state, formAction] = useFormState(sendContact, initialState);
  const { inputValue, handlePhoneValueChange, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'mx',
      value: state.phone,
      countries: defaultCountries,
    });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="bg-black-200 w-full" ref={ref}>
      <div className="container p-8">
        <div className="flex justify-center">
          <div className="w-full max-w-[700px] p-8 bg-white rounded-lg">
          <h2 className="text-2xl font-bold text-gray-600 text-center mb-6">
  Save your spot!
</h2>
<p className="text-1xl font-bold text-gray-500 text-center mb-4">
  You will receive date and location for this masterclass very soon.
</p>

            <form ref={formRef} className="space-y-4" action={async (formData: FormData) => {
              formAction(formData);
              if (state.errors) return toast.error('Error sending message');
              toast.success('Message sent successfully');
              formRef.current?.reset();
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Input placeholder="Name" name="name" className="text-black" />
                  <p aria-live="polite" className="text-red-500">
                    {state?.errors?.name}
                  </p>
                </div>
                <div className="flex flex-col">
                  <Input placeholder="Company" name="company" className="text-black" />
                  <p aria-live="polite" className="text-red-500">
                    {state?.errors?.company}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Input placeholder="Email" type="email" name="email" className="text-black" />
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
                        {defaultCountries.map((c) => {
                          const country = parseCountry(c);
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
                        })}
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Phone"
                      type="tel"
                      name="phone"
                      value={inputValue}
                      onChange={handlePhoneValueChange}
                      className="border-l-0 rounded-l-none w-full text-black"
                    />
                  </div>
                  <p aria-live="polite" className="text-red-500">
                    {state?.errors?.phone}
                  </p>
                </div>
              </div>
              <Textarea placeholder="Message" className="min-h-[150px] text-black" name="message" />
              <p aria-live="polite" className="text-red-500">
                {state?.errors?.message}
              </p>
              <div className="flex items-center">
                <Checkbox
                  id="privacy-policy"
                  name="privacyPolicy"
                  className="text-red-500"
                />
                <label htmlFor="privacy-policy" className="ml-2 text-sm font-normal text-red-500">
                  I accept the <Button asChild variant={"link"}><Link href="/privacy-policy" className="pl-0" target="_blank">privacy policy</Link></Button>
                </label>
              </div>
              <p aria-live="polite" className="text-red-500">
                {state?.errors?.privacyPolicy}
              </p>
              <Button className="w-full bg-red-500 text-white" type="submit" disabled={state.isLoading}>
                {state.isLoading ? 'Sending...' : 'Send'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

ContactusMaster.displayName = 'ContactusMaster';

export default ContactusMaster;
