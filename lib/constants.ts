// Application constants
export const APP_CONFIG = {
  name: 'Karedesk Portal',
  version: '1.0.0',
  description: 'Portal de Asistencia Digital Avanzada',
  url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  supportEmail: 'soporte@karedesk.com',
  contactEmail: 'contacto@karedesk.com'
}

// Service types and their display names
export const SERVICE_NAMES = {
  WEB_VULNERABILITY_ANALYSIS: 'Análisis de Vulnerabilidades Web',
  REMOTE_IT_SUPPORT: 'Asistencia Informática Remota',
  EXPRESS_WEB_CREATION: 'Creación de Webs Express',
  AI_CONSULTING: 'Consultoría IA'
} as const

// User roles
export const USER_ROLES = {
  CLIENT: 'Cliente',
  ADMIN: 'Administrador',
  SUPER_ADMIN: 'Super Administrador'
} as const

// Order statuses
export const ORDER_STATUSES = {
  PENDING: 'Pendiente',
  CONFIRMED: 'Confirmado',
  IN_PROGRESS: 'En Progreso',
  COMPLETED: 'Completado',
  CANCELLED: 'Cancelado',
  REFUNDED: 'Reembolsado'
} as const

// Payment statuses
export const PAYMENT_STATUSES = {
  PENDING: 'Pendiente',
  PROCESSING: 'Procesando',
  COMPLETED: 'Completado',
  FAILED: 'Fallido',
  CANCELLED: 'Cancelado',
  REFUNDED: 'Reembolsado'
} as const

// API rate limits
export const RATE_LIMITS = {
  LOGIN: { requests: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
  REGISTER: { requests: 3, windowMs: 300000 }, // 3 attempts per 5 minutes
  CONTACT: { requests: 5, windowMs: 300000 }, // 5 submissions per 5 minutes
  GENERAL: { requests: 100, windowMs: 60000 } // 100 requests per minute
}

// Validation constants
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 100,
  MESSAGE_MIN_LENGTH: 10,
  MESSAGE_MAX_LENGTH: 1000,
  PHONE_REGEX: /^[\+]?[0-9\s\-\(\)]{9,15}$/
}

// File upload limits
export const UPLOAD_LIMITS = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  MAX_FILES: 5
}

// Cache durations (in seconds)
export const CACHE_DURATIONS = {
  STATIC_CONTENT: 86400, // 24 hours
  API_RESPONSES: 300, // 5 minutes
  USER_SESSION: 604800, // 7 days
  PUBLIC_DATA: 3600 // 1 hour
}