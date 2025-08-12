# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Karedesk Portal - A Next.js 14 (App Router) application for digital assistance services including web vulnerability analysis, remote IT support, express web creation, and AI consulting. Built with TypeScript, Tailwind CSS, Prisma ORM, and Stripe payment integration.

## Key Commands

### Development
```bash
npm run dev           # Start development server (port 3000)
npm run dev:hmr      # Start with HMR indicators
npm run build        # Build for production
npm run start        # Start production server
```

### Database
```bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database with initial data
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix linting issues
npm run type-check   # Run TypeScript compiler check
```

### Deployment
```bash
npm run deploy       # Deploy using shell script
npm run deploy:preview  # Deploy preview to Vercel
npm run deploy:prod  # Deploy to production
```

### Testing
To run a single test file or specific test:
```bash
# Note: No test framework is currently configured
# Add your preferred test runner (Jest, Vitest, etc.) when needed
```

## Architecture & Structure

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict mode
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS with glassmorphism effects
- **Authentication**: JWT with HTTP-only cookies
- **Payments**: Stripe integration with webhooks
- **Forms**: React Hook Form with validation

### Directory Structure
- `/app` - Next.js App Router pages and API routes
  - `/api` - Backend API endpoints (auth, payments, orders, etc.)
  - `/servicios` - Service-specific pages
  - `layout.tsx` - Root layout with ThemeProvider
- `/components` - Reusable React components
- `/contexts` - React Context providers (Theme)
- `/hooks` - Custom React hooks
- `/prisma` - Database schema and seed scripts
- `/scripts` - Deployment and setup scripts
- `/public` - Static assets

### Database Models
The application uses Prisma with PostgreSQL. Key models include:
- **User** - User accounts with roles (CLIENT, ADMIN, SUPER_ADMIN)
- **Order** - Service orders with payment tracking
- **Payment** - Payment records linked to Stripe
- **Invoice** - Generated invoices
- **Consultation** - Service consultations
- **Ticket** - Support tickets with messages
- **ServicePlan** - Service pricing plans
- **Subscription** - Recurring service subscriptions

### API Endpoints Pattern
All API routes follow the pattern `/app/api/[resource]/route.ts`:
- Authentication: `/api/auth/login`, `/api/auth/register`
- Payments: `/api/payments/create-intent`, `/api/payments/webhook`
- Orders: `/api/orders`
- User: `/api/user/profile`

### Authentication Flow
1. User registers/logs in via API routes
2. JWT token created and stored in HTTP-only cookie
3. Token includes userId, email, and role
4. Protected routes check for valid auth-token cookie

### Payment Integration
Stripe is integrated for payment processing:
- Payment intents created via `/api/payments/create-intent`
- Webhooks handle payment confirmations at `/api/payments/webhook`
- CheckoutForm component handles client-side payment UI

### Theming System
- Theme context manages dark/light mode
- Preference stored in localStorage
- CSS variables updated based on theme
- Tailwind dark: prefix for dark mode styles

### Service Types
The platform offers four main services (defined in schema.prisma):
1. WEB_VULNERABILITY_ANALYSIS
2. REMOTE_IT_SUPPORT
3. EXPRESS_WEB_CREATION
4. AI_CONSULTING

Each service has multiple pricing plans (Basic, Professional, Enterprise) with different features and billing types (MONTHLY, YEARLY, ONE_TIME).

## Environment Variables

Required environment variables (see .env.example):
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret for JWT signing
- `NEXTAUTH_SECRET` - NextAuth secret key
- `NEXTAUTH_URL` - Application URL
- `STRIPE_SECRET_KEY` - Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe public key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret

## Development Notes

### Path Aliases
The project uses `@/*` path alias configured in tsconfig.json, which maps to the project root.

### Prisma Client Generation
Prisma client is automatically generated on `npm install` via postinstall script. Manual generation can be done with `npm run db:generate`.

### Hot Module Replacement
Enhanced HMR is configured in next.config.js with polling for better development experience.

### Deployment
The project is configured for Vercel deployment with automatic GitHub integration. Database migrations run automatically on deployment.

### Spanish Localization
The application is primarily in Spanish with all user-facing content localized. Error messages, form labels, and UI text are in Spanish.