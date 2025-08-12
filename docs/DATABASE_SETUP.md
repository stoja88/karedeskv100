# Configuración de Base de Datos

## 🗄️ Opciones de Base de Datos PostgreSQL

### Opción 1: Supabase (Recomendado - Gratis)
1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta y un nuevo proyecto
3. En Settings > Database, copia la Connection String
4. Formato: `postgresql://postgres:[password]@[host]:5432/postgres`

### Opción 2: Railway
1. Ve a [railway.app](https://railway.app)
2. Crea un proyecto y agrega PostgreSQL
3. Copia la DATABASE_URL de las variables

### Opción 3: Neon (Serverless)
1. Ve a [neon.tech](https://neon.tech)
2. Crea una base de datos
3. Copia la connection string

## 🔧 Configuración en GitHub

Las variables ya están configuradas en tu repositorio:

```bash
# Variables de entorno configuradas:
✅ DATABASE_URL
✅ NEXTAUTH_SECRET  
✅ JWT_SECRET
✅ NEXTAUTH_URL
✅ STRIPE_SECRET_KEY
✅ STRIPE_WEBHOOK_SECRET
✅ NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
```

## 🚀 Pasos para Producción

1. **Actualizar DATABASE_URL**:
   ```bash
   gh secret set DATABASE_URL --body "tu-connection-string-real"
   ```

2. **Actualizar NEXTAUTH_URL**:
   ```bash
   gh secret set NEXTAUTH_URL --body "https://tu-dominio.vercel.app"
   ```

3. **Configurar Stripe** (reemplaza con tus claves reales):
   ```bash
   gh secret set STRIPE_SECRET_KEY --body "sk_live_tu_clave_real"
   gh secret set STRIPE_WEBHOOK_SECRET --body "whsec_tu_webhook_real"
   gh variable set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY --body "pk_live_tu_clave_publica"
   ```

## 🗄️ Comandos de Base de Datos

```bash
# Generar cliente Prisma
npx prisma generate

# Crear y aplicar migraciones
npx prisma migrate dev --name init

# Aplicar migraciones en producción
npx prisma migrate deploy

# Poblar con datos iniciales
npx prisma db seed

# Ver la base de datos
npx prisma studio
```

## 🔍 Verificación

Para verificar que todo funciona:

```bash
# Verificar conexión
npx prisma db pull

# Ver esquema actual
npx prisma db push --preview-feature
```

## 📝 Notas Importantes

- El workflow de GitHub Actions ejecutará automáticamente las migraciones en cada deploy
- Los datos de seed se ejecutan solo una vez
- Usa `npx prisma studio` para administrar datos visualmente
- Siempre haz backup antes de cambios importantes en producción