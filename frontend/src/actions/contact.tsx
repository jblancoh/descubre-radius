'use server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, {
    message: 'Name is required'
  }),
  email: z.string().min(1, {
    message: 'Email is required'
  }),
  message: z.string().min(1, {
    message: 'Message is required'
  }),
  phone: z.string().min(1, {
    message: 'Phone is required'
  }),
  company: z.string().min(1, {
    message: 'Company is required'
  }),
  privacyPolicy: z.enum(['on'], {
    message: 'Privacy policy is required'
  })
})

export const sendContact = async (prevState: any, data: FormData) => {
  const rawData = {
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message'),
    phone: data.get('phone'),
    company: data.get('company'),
    origin: data.get('origin'),
  }
  const validatedFields = schema.safeParse({
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message'),
    phone: data.get('phone'),
    company: data.get('company'),
    privacyPolicy: data.get('privacyPolicy')
  })
  console.log("🚀 ~ sendContact ~ rawData:", rawData)
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
        "Authorization": `Bearer ${process.env.STRAPI_API_CONTACT_KEY}`
      },
      body: JSON.stringify(rawData),
    })
    if (!response.ok) {
      throw new Error('Error sending message')
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

