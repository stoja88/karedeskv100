import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

export interface AuthUser {
  userId: string
  email: string
  role: string
}

export function verifyToken(token: string): AuthUser {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role
    }
  } catch (error) {
    throw new Error('Token inválido')
  }
}

export function getAuthUser(request: NextRequest): AuthUser {
  const token = request.cookies.get('auth-token')?.value
  
  if (!token) {
    throw new Error('Token requerido')
  }

  return verifyToken(token)
}

export function createToken(user: { id: string; email: string; role: string }): string {
  return jwt.sign(
    { 
      userId: user.id, 
      email: user.email, 
      role: user.role 
    },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )
}