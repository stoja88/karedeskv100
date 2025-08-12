#!/bin/bash

# Script para configurar la base de datos en producción
# Ejecutar después de configurar DATABASE_URL

echo "🚀 Configurando base de datos en producción..."

# Verificar que DATABASE_URL esté configurada
if [ -z "$DATABASE_URL" ]; then
    echo "❌ ERROR: DATABASE_URL no está configurada"
    echo "Configura la variable de entorno DATABASE_URL primero"
    exit 1
fi

echo "📦 Instalando dependencias..."
npm ci --only=production

echo "🔄 Generando cliente de Prisma..."
npx prisma generate

echo "🗄️  Ejecutando migraciones..."
npx prisma migrate deploy

echo "🌱 Ejecutando seed (datos iniciales)..."
npx prisma db seed

echo "✅ Base de datos configurada correctamente!"
echo "🔍 Para verificar la conexión, ejecuta: npx prisma db pull"