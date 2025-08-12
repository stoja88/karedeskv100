#!/bin/bash

# 🚀 Script de Configuración Automática - Supabase
# ================================================

echo "🚀 Configurando Base de Datos Supabase para Karedesk Portal"
echo "============================================================"

# Verificar que gh CLI está instalado
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) no está instalado."
    echo "📥 Instálalo desde: https://cli.github.com/"
    exit 1
fi

# Verificar que vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI no está instalado."
    echo "📥 Instálalo con: npm i -g vercel"
    exit 1
fi

# Solicitar la CONNECTION STRING de Supabase
echo ""
echo "📋 Necesitamos tu Connection String de Supabase:"
echo "   Formato: postgresql://postgres:[PASSWORD]@[HOST].supabase.co:5432/postgres"
echo ""
read -p "🔗 Pega tu Connection String aquí: " DATABASE_URL

# Validar que no esté vacía
if [ -z "$DATABASE_URL" ]; then
    echo "❌ La Connection String no puede estar vacía"
    exit 1
fi

# Validar formato básico de PostgreSQL
if [[ ! "$DATABASE_URL" =~ ^postgresql:// ]]; then
    echo "❌ La Connection String debe comenzar con 'postgresql://'"
    exit 1
fi

echo ""
echo "⚙️  Configurando variables de entorno..."

# Configurar GitHub Secrets
echo "📦 Actualizando GitHub Secrets..."
gh secret set DATABASE_URL --body "$DATABASE_URL"
if [ $? -eq 0 ]; then
    echo "✅ DATABASE_URL actualizada en GitHub Secrets"
else
    echo "❌ Error actualizando GitHub Secrets"
    exit 1
fi

# Configurar Vercel Environment Variables
echo "🌐 Actualizando variables de entorno en Vercel..."
echo "$DATABASE_URL" | vercel env add DATABASE_URL production --force
if [ $? -eq 0 ]; then
    echo "✅ DATABASE_URL actualizada en Vercel"
else
    echo "❌ Error actualizando variables en Vercel"
    exit 1
fi

echo ""
echo "🔧 Ejecutando configuración de base de datos..."

# Generar cliente Prisma
echo "🔄 Generando cliente Prisma..."
npm run db:generate
if [ $? -ne 0 ]; then
    echo "❌ Error generando cliente Prisma"
    exit 1
fi

# Aplicar migraciones
echo "🗄️  Aplicando migraciones..."
npm run db:migrate
if [ $? -ne 0 ]; then
    echo "❌ Error aplicando migraciones"
    exit 1
fi

# Poblar con datos iniciales
echo "🌱 Poblando base de datos..."
npm run db:seed
if [ $? -ne 0 ]; then
    echo "❌ Error poblando base de datos"
    exit 1
fi

echo ""
echo "🎉 ¡Configuración completada exitosamente!"
echo ""
echo "✅ Checklist de verificación:"
echo "   - DATABASE_URL configurada en GitHub Secrets"
echo "   - DATABASE_URL configurada en Vercel"
echo "   - Cliente Prisma generado"
echo "   - Migraciones aplicadas"
echo "   - Datos iniciales cargados"
echo ""
echo "🚀 Próximos pasos:"
echo "   1. Ejecuta 'npm run dev' para probar localmente"
echo "   2. Haz push a main para desplegar: 'git push origin main'"
echo "   3. Verifica en: https://carpeta-sin-titulo-101.vercel.app"
echo ""
echo "🔧 Comandos útiles:"
echo "   - 'npm run db:studio' - Ver base de datos"
echo "   - 'vercel logs https://carpeta-sin-titulo-101.vercel.app' - Ver logs"
echo "   - 'npx prisma db pull' - Verificar conexión"