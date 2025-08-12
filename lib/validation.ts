import { z } from 'zod'

// User validation schemas
export const registerSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  company: z.string().max(100).optional(),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'La contraseña debe contener al menos una mayúscula, una minúscula y un número')
})

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'La contraseña es obligatoria')
})

// Contact form validation
export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  company: z.string().max(100).optional(),
  phone: z.string().regex(/^[\+]?[0-9\s\-\(\)]{9,15}$/, 'Teléfono inválido').optional(),
  service: z.enum(['WEB_VULNERABILITY_ANALYSIS', 'REMOTE_IT_SUPPORT', 'EXPRESS_WEB_CREATION', 'AI_CONSULTING']),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres').max(1000)
})

// Order validation
export const orderSchema = z.object({
  service: z.enum(['WEB_VULNERABILITY_ANALYSIS', 'REMOTE_IT_SUPPORT', 'EXPRESS_WEB_CREATION', 'AI_CONSULTING']),
  plan: z.string().min(1, 'El plan es obligatorio'),
  amount: z.number().positive('El monto debe ser positivo'),
  currency: z.string().default('EUR'),
  description: z.string().optional(),
  metadata: z.record(z.any()).optional()
})

// Profile update validation
export const profileUpdateSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  company: z.string().max(100).optional(),
  phone: z.string().regex(/^[\+]?[0-9\s\-\(\)]{9,15}$/).optional(),
  address: z.string().max(200).optional(),
  city: z.string().max(100).optional(),
  country: z.string().max(100).optional(),
  postalCode: z.string().max(20).optional(),
  taxId: z.string().max(50).optional()
})

export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data)
  if (!result.success) {
    const errors = result.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ')
    throw new Error(`Datos inválidos: ${errors}`)
  }
  return result.data
}