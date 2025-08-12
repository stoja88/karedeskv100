# Karedesk - Portal de Asistencia Digital Avanzada

Portal ultramoderno para Karedesk, especializado en servicios de asistencia digital avanzada incluyendo análisis de vulnerabilidades web, asistencia informática remota, creación de webs express y consultoría IA.

## ✨ Características Principales

- **🎨 Diseño Dual**: Modo oscuro y claro con transiciones suaves
- **🚀 Animaciones Avanzadas**: Efectos glassmorphism, micro-interacciones y animaciones fluidas
- **📱 Responsive Premium**: Adaptación perfecta a todos los dispositivos
- **🔐 Autenticación Completa**: Sistema de login/registro seguro con JWT
- **💾 Base de Datos Robusta**: PostgreSQL con Prisma ORM
- **📋 Formularios Inteligentes**: Validación en tiempo real y UX optimizada
- **🔍 SEO Optimizado**: Meta tags, estructura semántica y rendimiento
- **⚡ HMR Avanzado**: Hot Module Replacement con indicadores visuales
- **🌐 Deploy Ready**: Configurado para Vercel con un solo click

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS con modo oscuro/claro, Framer Motion
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Autenticación**: JWT, bcryptjs, HTTP-only cookies
- **Formularios**: React Hook Form con validación avanzada
- **Iconos**: Lucide React (500+ iconos)
- **Temas**: Context API para gestión de temas
- **Deploy**: Vercel optimizado con Edge Functions

## 💳 **Sistema de Pagos Completo**

### Integración con Stripe
- **Pagos seguros** con Stripe Elements
- **Múltiples métodos** de pago (tarjetas, transferencias)
- **Facturación automática** con IVA incluido
- **Webhooks** para confirmación de pagos
- **Dashboard de pedidos** para clientes

### Base de Datos Expandida
- **Gestión de usuarios** completa con perfiles
- **Sistema de pedidos** y seguimiento
- **Facturas automáticas** con numeración
- **Auditoría completa** de todas las acciones
- **Tickets de soporte** integrados

### Funcionalidades de E-commerce
- **Checkout seguro** con validación completa
- **Planes de servicios** configurables
- **Suscripciones** mensuales y anuales
- **Gestión de inventario** de servicios
- **Reportes de ventas** y métricas

## 🎨 Características de Diseño

### Modo Dual (Oscuro/Claro)
- **Transiciones suaves** entre temas
- **Persistencia** en localStorage
- **Detección automática** de preferencias del sistema
- **Paleta de colores** adaptada para cada modo

### Animaciones y Efectos
- **Glassmorphism** con backdrop-filter
- **Micro-interacciones** en botones y tarjetas
- **Animaciones de entrada** con Framer Motion
- **Efectos de hover** avanzados
- **Indicadores de carga** personalizados

### Componentes Mejorados
- **Tarjetas de servicios** con efectos 3D
- **Navegación inteligente** con dropdowns animados
- **Formularios premium** con validación visual
- **Footer interactivo** con efectos de hover
- **Dashboard de cliente** completo
- **Checkout process** optimizado

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd karedesk-portal
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Base de Datos con Supabase** (Recomendado)
```bash
# Opción 1: Script automatizado
./scripts/setup-supabase.sh

# Opción 2: Manual - Sigue la guía completa
# Ver: SUPABASE_SETUP_GUIDE.md
```

4. **Configurar variables de entorno locales**
```bash
cp .env.example .env.local
```

Edita el archivo `.env.local` con tus configuraciones:
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST].supabase.co:5432/postgres"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="your-jwt-secret-here"
```

5. **Configurar la base de datos** (Solo si no usaste el script)
```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

6. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🚀 Deploy en Vercel

### Configuración Automática (Ya configurado)
- ✅ **URL Producción**: https://carpeta-sin-titulo-101.vercel.app
- ✅ **GitHub Repo**: https://github.com/stoja88/carpeta-sin-t-tulo-101
- ✅ **Variables de entorno**: Configuradas en GitHub Secrets y Vercel

### Si necesitas reconfigurar:

1. **Conectar con Vercel**
   - Importa el proyecto en Vercel
   - Conecta tu repositorio de GitHub

2. **Configurar variables de entorno**
   ```bash
   # Usar el script automatizado
   ./scripts/setup-supabase.sh
   
   # O configurar manualmente:
   vercel env add DATABASE_URL production --force
   vercel env add NEXTAUTH_SECRET production --force
   vercel env add JWT_SECRET production --force
   ```

3. **Deploy automático**
   - Vercel desplegará automáticamente en cada push a main
   - GitHub Actions ejecutará tests y migraciones

## 🗄️ Configuración de Base de Datos

### Opción A: Supabase (Recomendado - Gratis)

**Configuración rápida con script:**
```bash
./scripts/setup-supabase.sh
```

**Configuración manual:**
1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una cuenta y proyecto `karedesk-portal`
3. Copia la Connection String desde Project Settings > Database
4. Ejecuta:
   ```bash
   gh secret set DATABASE_URL --body "tu-connection-string"
   vercel env add DATABASE_URL production --force
   npm run db:migrate
   npm run db:seed
   ```

**Ver guía completa:** [`SUPABASE_SETUP_GUIDE.md`](./SUPABASE_SETUP_GUIDE.md)

### Opción B: Neon (Serverless)
1. Ve a [https://neon.tech](https://neon.tech)
2. Crea una nueva base de datos
3. Copia la connection string
4. Configura las variables de entorno

### Comandos de Base de Datos
```bash
npm run db:generate  # Generar cliente Prisma
npm run db:migrate   # Aplicar migraciones
npm run db:seed      # Poblar datos iniciales
npm run db:studio    # Abrir Prisma Studio
```

## 🎨 Servicios Incluidos

### 1. Análisis de Vulnerabilidades Web
- Escaneo automatizado 24/7
- Reportes detallados en tiempo real
- Monitoreo de reputación online
- Alertas inmediatas de amenazas

### 2. Asistencia Informática Remota
- Acceso remoto seguro
- Soporte 24/7 disponible
- Técnicos certificados
- Resolución en minutos

### 3. Creación de Webs Express
- Diseño responsive moderno
- Optimización SEO incluida
- Entrega en 48-72 horas
- Panel de administración

### 4. Consultoría IA
- Análisis de procesos actuales
- Implementación de chatbots
- Automatización inteligente
- Machine Learning personalizado

## 📱 Características del Portal

### Diseño y UX
- **Paleta de colores**: Basada en el branding de Karedesk (#7FBFBF)
- **Efectos visuales**: Glassmorphism, gradientes, animaciones
- **Tipografía**: Inter font para máxima legibilidad
- **Navegación**: Menú responsive con dropdown de servicios

### Funcionalidades
- **Formulario de contacto**: Validación avanzada y envío a base de datos
- **Sistema de usuarios**: Registro, login y panel de cliente
- **Responsive design**: Optimizado para móvil, tablet y desktop
- **SEO optimizado**: Meta tags, estructura semántica

### Base de Datos
- **Usuarios**: Gestión completa con roles (CLIENT/ADMIN)
- **Contactos**: Almacenamiento de consultas y solicitudes
- **Consultorías**: Sistema de seguimiento de proyectos
- **Servicios**: Categorización y gestión de ofertas

## 🔧 Estructura del Proyecto

```
karedesk-portal/
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── login/             # Página de login
│   ├── register/          # Página de registro
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── Header.tsx         # Navegación principal
│   ├── Hero.tsx           # Sección hero
│   ├── Services.tsx       # Sección de servicios
│   ├── ContactForm.tsx    # Formulario de contacto
│   └── Footer.tsx         # Pie de página
├── prisma/               # Configuración de base de datos
│   └── schema.prisma     # Esquema de la base de datos
└── public/               # Archivos estáticos
```

## 🎯 Próximas Características

- [ ] Panel de administración completo
- [ ] Sistema de tickets de soporte
- [ ] Chat en vivo integrado
- [ ] Dashboard de métricas
- [ ] Integración con pasarelas de pago
- [ ] Sistema de notificaciones
- [ ] API REST completa
- [ ] Documentación interactiva

## 📞 Soporte

Para soporte técnico o consultas sobre el portal:
- Email: contacto@karedesk.com
- Teléfono: +34 900 123 456

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Karedesk**