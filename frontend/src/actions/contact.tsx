'use server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, {
    message: 'El nombre es requerido'
  }),
  email: z.string().min(1, {
    message: 'El email es requerido'
  }),
  message: z.string().min(1, {
    message: 'El mensaje es requerido'
  }),
  phone: z.string().min(1, {
    message: 'El teléfono es requerido'
  }),
  company: z.string().min(1, {
    message: 'La empresa es requerida'
  }),
  privacyPolicy: z.enum(['on'], {
    message: 'La política de privacidad es requerida'
  })
})

export const sendContact = async (prevState: any, data: FormData) => {
  const rawData = {
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message'),
    phone: data.get('phone'),
    company: data.get('company'),
  }
  const validatedFields = schema.safeParse({
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message'),
    phone: data.get('phone'),
    company: data.get('company'),
    privacyPolicy: data.get('privacyPolicy')
  })
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_CONTACT_KEY}`
      },
      body: JSON.stringify(rawData),
    })
    if (!response.ok) {
      throw new Error('Error enviando mensaje de contacto')
    }
    return response.json()
  } catch (error: any) {
    return {
      errors: {
        message: error?.message,
      }
    }
  }
}

