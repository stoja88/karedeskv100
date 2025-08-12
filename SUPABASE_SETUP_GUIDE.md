# 🚀 Configuración de Base de Datos con Supabase - Karedesk Portal

## 📋 Pasos para Configurar Supabase

### 1. Crear Cuenta en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Haz clic en "Start your project" o "Sign up"
3. Regístrate con tu cuenta de Google, GitHub o con email
4. Confirma tu email si es necesario

### 2. Crear un Nuevo Proyecto

1. En el dashboard de Supabase, haz clic en "New Project"
2. Completa el formulario:
   - **Name**: `karedesk-portal`
   - **Database Password**: Elige una contraseña segura (guárdala en un lugar seguro)
   - **Region**: Selecciona la región más cercana a tus usuarios
3. Haz clic en "Create Project"

### 3. Esperar a que el Proyecto se Inicialice

- El proceso de creación puede tardar 2-3 minutos
- Verás un spinner mientras se configura todo

### 4. Obtener la Connection String

1. Una vez creado el proyecto, ve a **Project Settings** (ícono de engranaje)
2. Selecciona **Database** en el menú lateral
3. Busca la sección **Connection Info**
4. Copia la **Connection String** que se ve así:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@[YOUR-HOST].supabase.co:5432/postgres
   ```

### 5. Configurar Variables de Entorno

#### En GitHub Secrets:

```bash
# Actualiza la DATABASE_URL en GitHub Secrets
gh secret set DATABASE_URL --body "postgresql://postgres:[TU-PASSWORD]@[TU-HOST].supabase.co:5432/postgres"
```

#### En Vercel:

```bash
# Actualiza la DATABASE_URL en Vercel
vercel env add DATABASE_URL production --force
```

## 🔧 Comandos Post-Configuración

### 1. Generar Cliente Prisma

```bash
npm run db:generate
```

### 2. Crear y Aplicar Migraciones

```bash
npm run db:migrate
```

### 3. Poblar con Datos Iniciales

```bash
npm run db:seed
```

### 4. Verificar en Prisma Studio

```bash
npm run db:studio
```

## 🔍 Verificación Final

### 1. Verificar Conexión

```bash
npx prisma db pull
```

### 2. Probar Aplicación Localmente

```bash
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000) y verifica que:
- La aplicación se carga correctamente
- No hay errores de conexión a la base de datos
- Puedes acceder al dashboard
- Los formularios de contacto funcionan

## 🛡️ Notas de Seguridad

### 1. Protección de Credenciales

- **Nunca** commitees credenciales en el código
- Usa siempre variables de entorno
- Rota las contraseñas periódicamente

### 2. Configuración de Red

- En Supabase, ve a **Database** > **Settings**
- Configura las restricciones de IP si es necesario
- Considera usar connection pooling para mejor performance

## 🚀 Despliegue en Producción

### 1. Push a Main Branch

Una vez configurado todo, haz push a la rama `main`:

```bash
git add .
git commit -m "feat: configure Supabase database"
git push origin main
```

### 2. Verificar Deploy Automático

- GitHub Actions ejecutará automáticamente las migraciones
- Verifica en Vercel que el deploy fue exitoso
- Prueba la URL de producción: https://carpeta-sin-titulo-101.vercel.app

## 📞 Soporte y Troubleshooting

### Problemas Comunes

1. **Connection timeout**: Verifica que la URL de conexión sea correcta
2. **Authentication failed**: Asegúrate de que la contraseña sea correcta
3. **Network error**: Verifica las restricciones de red en Supabase

### Comandos Útiles

```bash
# Ver logs de Vercel
vercel logs https://carpeta-sin-titulo-101.vercel.app

# Ver variables de entorno en Vercel
vercel env pull

# Verificar estado de GitHub Actions
gh run list
```

## ✅ Checklist de Verificación

- [ ] Cuenta de Supabase creada
- [ ] Proyecto `karedesk-portal` creado
- [ ] Connection string obtenida
- [ ] DATABASE_URL actualizada en GitHub Secrets
- [ ] DATABASE_URL actualizada en Vercel
- [ ] Migraciones aplicadas
- [ ] Datos iniciales cargados
- [ ] Aplicación funcionando localmente
- [ ] Deploy en producción exitoso
- [ ] Funcionalidades críticas verificadas

¡Tu base de datos está lista para producción! 🎉