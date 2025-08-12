import { test, expect } from '@playwright/test'

test.describe('Complete User Flow', () => {
  test('user can register, login, and access dashboard', async ({ page }) => {
    const userEmail = `e2e-test-${Date.now()}@example.com`
    const userData = {
      name: 'E2E Test User',
      email: userEmail,
      password: 'TestPassword123!',
      company: 'Test Company'
    }

    // 1. Go to register page
    await page.goto('/register')
    await expect(page.getByRole('heading', { name: /crear cuenta/i })).toBeVisible()

    // 2. Fill registration form
    await page.fill('input[name="name"]', userData.name)
    await page.fill('input[name="email"]', userData.email)
    await page.fill('input[name="company"]', userData.company)
    await page.fill('input[name="password"]', userData.password)
    await page.fill('input[name="confirmPassword"]', userData.password)
    await page.check('input[type="checkbox"]') // Terms checkbox

    // 3. Submit registration
    await page.click('button[type="submit"]')
    
    // Wait for success message or redirect
    await expect(page.getByText(/cuenta creada exitosamente/i)).toBeVisible({ timeout: 10000 })

    // 4. Go to login page
    await page.goto('/login')
    
    // 5. Login with new credentials
    await page.fill('input[name="email"]', userData.email)
    await page.fill('input[name="password"]', userData.password)
    await page.click('button[type="submit"]')

    // 6. Should redirect to dashboard
    await expect(page).toHaveURL('/dashboard')
    await expect(page.getByText(/bienvenido/i)).toBeVisible()

    // 7. Verify user data in dashboard
    await expect(page.getByText(userData.name)).toBeVisible()
    await expect(page.getByText(userData.email)).toBeVisible()
  })

  test('user can submit contact form', async ({ page }) => {
    await page.goto('/')
    
    // Scroll to contact form
    await page.click('a[href="#contacto"]')
    
    // Fill contact form
    await page.fill('input[name="name"]', 'Contact Test User')
    await page.fill('input[name="email"]', 'contact-test@example.com')
    await page.fill('input[name="company"]', 'Test Company')
    await page.selectOption('select[name="service"]', 'WEB_VULNERABILITY_ANALYSIS')
    await page.fill('textarea[name="message"]', 'This is a test message for the contact form')

    // Submit form
    await page.click('button[type="submit"]')

    // Verify success message
    await expect(page.getByText(/mensaje enviado correctamente/i)).toBeVisible({ timeout: 10000 })
  })

  test('protected routes redirect to login', async ({ page }) => {
    // Try to access dashboard without authentication
    await page.goto('/dashboard')
    
    // Should redirect to login
    await expect(page).toHaveURL('/login')
    await expect(page.getByRole('heading', { name: /acceso cliente/i })).toBeVisible()
  })
})