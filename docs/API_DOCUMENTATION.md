# API Documentation - Karedesk Portal

## Base URL
- **Development**: `http://localhost:3000/api`
- **Production**: `https://carpeta-sin-titulo-101.vercel.app/api`

## Authentication

All protected endpoints require authentication via HTTP-only cookies set during login.

### Headers
```
Cookie: auth-token=<jwt-token>
```

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- **Login**: 5 attempts per 5 minutes
- **Register**: 3 attempts per 5 minutes  
- **Contact**: 5 submissions per 5 minutes
- **General**: 100 requests per minute

## Endpoints

### Authentication

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "name": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "password": "string (required, min 8 chars, must contain uppercase, lowercase, number)",
  "company": "string (optional, max 100 chars)"
}
```

**Response:**
```json
{
  "message": "Usuario creado exitosamente",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "company": "string|null",
    "role": "CLIENT",
    "createdAt": "datetime"
  }
}
```

#### POST `/api/auth/login`
Authenticate user and create session.

**Request Body:**
```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

**Response:**
```json
{
  "message": "Login exitoso",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "company": "string|null",
    "role": "string"
  }
}
```

#### POST `/api/auth/logout`
End user session and clear authentication cookie.

**Response:**
```json
{
  "message": "Logout exitoso"
}
```

### User Management

#### GET `/api/user/profile`
Get current user profile information.

**Authentication:** Required

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "company": "string|null",
  "phone": "string|null",
  "address": "string|null",
  "city": "string|null",
  "country": "string",
  "postalCode": "string|null",
  "taxId": "string|null",
  "role": "string",
  "createdAt": "datetime",
  "lastLogin": "datetime|null"
}
```

#### PUT `/api/user/profile`
Update user profile information.

**Authentication:** Required

**Request Body:**
```json
{
  "name": "string (optional, 2-100 chars)",
  "company": "string (optional, max 100 chars)",
  "phone": "string (optional, valid phone)",
  "address": "string (optional, max 200 chars)",
  "city": "string (optional, max 100 chars)",
  "country": "string (optional, max 100 chars)",
  "postalCode": "string (optional, max 20 chars)",
  "taxId": "string (optional, max 50 chars)"
}
```

### Orders

#### GET `/api/orders`
Get user's orders.

**Authentication:** Required

**Response:**
```json
[
  {
    "id": "string",
    "service": "string",
    "plan": "string",
    "amount": "number",
    "currency": "string",
    "status": "string",
    "createdAt": "datetime",
    "payments": [],
    "invoice": {}
  }
]
```

#### POST `/api/orders`
Create a new order.

**Authentication:** Required

**Request Body:**
```json
{
  "service": "WEB_VULNERABILITY_ANALYSIS|REMOTE_IT_SUPPORT|EXPRESS_WEB_CREATION|AI_CONSULTING",
  "plan": "string (required)",
  "amount": "number (required, positive)",
  "currency": "string (default: EUR)",
  "description": "string (optional)",
  "metadata": "object (optional)"
}
```

### Payments

#### POST `/api/payments/create-intent`
Create Stripe payment intent for order.

**Authentication:** Required

**Request Body:**
```json
{
  "service": "string (required)",
  "plan": "string (required)",
  "amount": "number (required)",
  "currency": "string (default: EUR)",
  "description": "string (optional)"
}
```

**Response:**
```json
{
  "clientSecret": "string",
  "orderId": "string",
  "amount": "number",
  "currency": "string"
}
```

#### POST `/api/payments/webhook`
Stripe webhook endpoint for payment confirmations.

**Headers:**
```
stripe-signature: <webhook-signature>
```

### Contact

#### POST `/api/contact`
Submit contact form.

**Request Body:**
```json
{
  "name": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "company": "string (optional, max 100 chars)",
  "phone": "string (optional, valid phone)",
  "service": "WEB_VULNERABILITY_ANALYSIS|REMOTE_IT_SUPPORT|EXPRESS_WEB_CREATION|AI_CONSULTING",
  "message": "string (required, 10-1000 chars)"
}
```

#### GET `/api/contact`
Get all contact submissions (Admin only).

**Authentication:** Required (Admin)

### Service Plans

#### GET `/api/service-plans`
Get available service plans.

**Query Parameters:**
- `service`: Filter by service type (optional)

**Response:**
```json
[
  {
    "id": "string",
    "service": "string",
    "name": "string",
    "price": "number",
    "currency": "string",
    "billing": "MONTHLY|YEARLY|ONE_TIME",
    "features": ["string"],
    "description": "string|null"
  }
]
```

### Admin Endpoints

#### GET `/api/admin/dashboard`
Get admin dashboard statistics.

**Authentication:** Required (Admin)

**Response:**
```json
{
  "totalUsers": "number",
  "totalOrders": "number",
  "totalRevenue": "number",
  "pendingContacts": "number",
  "recentOrders": [],
  "recentContacts": []
}
```

#### GET `/api/analytics`
Get detailed analytics data.

**Authentication:** Required (Admin)

**Query Parameters:**
- `period`: Number of days to analyze (default: 30)

### Health Check

#### GET `/api/health`
Check application and database health.

**Response:**
```json
{
  "status": "healthy|unhealthy",
  "timestamp": "datetime",
  "version": "string",
  "environment": "string",
  "database": "connected|disconnected",
  "uptime": "number"
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "error": "string (error message)"
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `409` - Conflict (duplicate resource)
- `429` - Too Many Requests (rate limited)
- `500` - Internal Server Error

## Security

### Input Validation
- All inputs are validated using Zod schemas
- Malicious content is sanitized
- SQL injection protection via Prisma ORM

### Authentication
- JWT tokens with 7-day expiration
- HTTP-only cookies for token storage
- Secure cookie settings in production

### Rate Limiting
- IP-based rate limiting on sensitive endpoints
- Configurable limits per endpoint type

### CORS
- Configured for production domain
- Restricted origins in production

### Headers
- Security headers implemented
- CSP (Content Security Policy) configured
- XSS protection enabled