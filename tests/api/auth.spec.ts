import { test, expect } from '@playwright/test'

test.describe('Authentication API', () => {
  test('should register a new user successfully', async ({ request }) => {
    const userData = {
      name: 'Test User',
      email: `test-${Date.now()}@example.com`,
      password: 'TestPassword123!',
      company: 'Test Company'
    }

    const response = await request.post('/api/auth/register', {
      data: userData
    })

    expect(response.status()).toBe(201)
    const data = await response.json()
    expect(data.message).toBe('Usuario creado exitosamente')
    expect(data.user.email).toBe(userData.email)
  })

  test('should not register user with weak password', async ({ request }) => {
    const userData = {
      name: 'Test User',
      email: `test-${Date.now()}@example.com`,
      password: '123', // Weak password
    }

    const response = await request.post('/api/auth/register', {
      data: userData
    })

    expect(response.status()).toBe(400)
    const data = await response.json()
    expect(data.error).toContain('contraseña')
  })

  test('should login with valid credentials', async ({ request }) => {
    // First register a user
    const userData = {
      name: 'Login Test User',
      email: `login-test-${Date.now()}@example.com`,
      password: 'TestPassword123!'
    }

    await request.post('/api/auth/register', { data: userData })

    // Then login
    const loginResponse = await request.post('/api/auth/login', {
      data: {
        email: userData.email,
        password: userData.password
      }
    })

    expect(loginResponse.status()).toBe(200)
    const loginData = await loginResponse.json()
    expect(loginData.message).toBe('Login exitoso')
    expect(loginData.user.email).toBe(userData.email)
  })

  test('should not login with invalid credentials', async ({ request }) => {
    const response = await request.post('/api/auth/login', {
      data: {
        email: 'nonexistent@example.com',
        password: 'wrongpassword'
      }
    })

    expect(response.status()).toBe(401)
    const data = await response.json()
    expect(data.error).toBe('Credenciales inválidas')
  })

  test('should enforce rate limiting on login', async ({ request }) => {
    const loginData = {
      email: 'test@example.com',
      password: 'wrongpassword'
    }

    // Make multiple failed login attempts
    for (let i = 0; i < 6; i++) {
      const response = await request.post('/api/auth/login', { data: loginData })
      
      if (i < 5) {
        expect(response.status()).toBe(401)
      } else {
        // 6th attempt should be rate limited
        expect(response.status()).toBe(429)
        const data = await response.json()
        expect(data.error).toContain('Demasiados intentos')
      }
    }
  })
})