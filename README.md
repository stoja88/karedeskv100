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

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/karedesk"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
JWT_SECRET="your-jwt-secret-here"
```

4. **Configurar la base de datos**
```bash
npx prisma generate
npx prisma db push
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🚀 Deploy en Vercel

1. **Conectar con Vercel**
   - Importa el proyecto en Vercel
   - Conecta tu repositorio de GitHub

2. **Configurar variables de entorno en Vercel**
   - `DATABASE_URL`: URL de tu base de datos PostgreSQL
   - `NEXTAUTH_SECRET`: Clave secreta para autenticación
   - `NEXTAUTH_URL`: URL de tu aplicación en producción
   - `JWT_SECRET`: Clave secreta para JWT

3. **Deploy automático**
   - Vercel desplegará automáticamente en cada push a main

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