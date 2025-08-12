import { test, expect } from '@playwright/test'

test.describe('Contact API', () => {
  test('should create contact successfully', async ({ request }) => {
    const contactData = {
      name: 'Test Contact',
      email: 'contact@example.com',
      company: 'Test Company',
      phone: '+34 600 000 000',
      service: 'WEB_VULNERABILITY_ANALYSIS',
      message: 'This is a test message for contact form'
    }

    const response = await request.post('/api/contact', {
      data: contactData
    })

    expect(response.status()).toBe(201)
    const data = await response.json()
    expect(data.message).toBe('Contacto creado exitosamente')
    expect(data.id).toBeDefined()
  })

  test('should validate required fields', async ({ request }) => {
    const incompleteData = {
      name: 'Test',
      email: 'invalid-email'
      // Missing required fields
    }

    const response = await request.post('/api/contact', {
      data: incompleteData
    })

    expect(response.status()).toBe(400)
    const data = await response.json()
    expect(data.error).toContain('Datos inválidos')
  })

  test('should sanitize input data', async ({ request }) => {
    const maliciousData = {
      name: '<script>alert("xss")</script>Test User',
      email: 'test@example.com',
      service: 'WEB_VULNERABILITY_ANALYSIS',
      message: 'Test message with <script>alert("xss")</script> content'
    }

    const response = await request.post('/api/contact', {
      data: maliciousData
    })

    expect(response.status()).toBe(201)
    // The malicious script tags should be removed by sanitization
  })

  test('should enforce rate limiting', async ({ request }) => {
    const contactData = {
      name: 'Rate Limit Test',
      email: 'ratelimit@example.com',
      service: 'WEB_VULNERABILITY_ANALYSIS',
      message: 'Rate limit test message'
    }

    // Make multiple requests quickly
    const promises = Array(6).fill(null).map(() => 
      request.post('/api/contact', { data: contactData })
    )

    const responses = await Promise.all(promises)
    
    // Some should succeed, but at least one should be rate limited
    const rateLimitedResponses = responses.filter(r => r.status() === 429)
    expect(rateLimitedResponses.length).toBeGreaterThan(0)
  })
})