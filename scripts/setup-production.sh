#!/bin/bash

# 🚀 Script de configuración automática para producción
# Ejecuta este script para configurar todo automáticamente

echo "🚀 Configurando Karedesk Portal para producción..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para mostrar mensajes
show_message() {
    echo -e "${GREEN}✅ $1${NC}"
}

show_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

show_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar dependencias
echo "🔍 Verificando dependencias..."

if ! command -v gh &> /dev/null; then
    show_error "GitHub CLI no está instalado. Instálalo con: brew install gh"
    exit 1
fi

if ! command -v vercel &> /dev/null; then
    show_error "Vercel CLI no está instalado. Instálalo con: npm i -g vercel"
    exit 1
fi

show_message "Dependencias verificadas"

# Verificar autenticación
echo "🔐 Verificando autenticación..."

if ! gh auth status &> /dev/null; then
    show_error "No estás autenticado en GitHub. Ejecuta: gh auth login"
    exit 1
fi

show_message "GitHub autenticado"

# Configurar variables de entorno
echo "🔧 Configurando variables de entorno..."

# Generar secrets seguros
NEXTAUTH_SECRET=$(openssl rand -base64 32)
JWT_SECRET=$(openssl rand -base64 32)

# Configurar en GitHub
gh secret set NEXTAUTH_SECRET --body "$NEXTAUTH_SECRET"
gh secret set JWT_SECRET --body "$JWT_SECRET"
gh secret set NEXTAUTH_URL --body "https://carpeta-sin-titulo-101.vercel.app"

show_message "Variables de GitHub configuradas"

# Configurar en Vercel
echo "$NEXTAUTH_SECRET" | vercel env add NEXTAUTH_SECRET production --force
echo "$JWT_SECRET" | vercel env add JWT_SECRET production --force
echo "https://carpeta-sin-titulo-101.vercel.app" | vercel env add NEXTAUTH_URL production --force

show_message "Variables de Vercel configuradas"

# Mostrar siguiente pasos
echo ""
echo "🎯 Configuración automática completada!"
echo ""
show_warning "PASOS MANUALES NECESARIOS:"
echo ""
echo "1. 🗄️  Configurar Base de Datos:"
echo "   - Ve a https://supabase.com o https://neon.tech"
echo "   - Crea un proyecto PostgreSQL"
echo "   - Ejecuta: gh secret set DATABASE_URL --body 'tu-connection-string'"
echo "   - Ejecuta: vercel env add DATABASE_URL production --force"
echo ""
echo "2. 💳 Configurar Stripe:"
echo "   - Ve a https://stripe.com/dashboard"
echo "   - Obtén tus claves API"
echo "   - Ejecuta: gh secret set STRIPE_SECRET_KEY --body 'sk_live_tu_clave'"
echo "   - Configura webhook: https://carpeta-sin-titulo-101.vercel.app/api/payments/webhook"
echo ""
echo "3. 🚀 Deploy:"
echo "   - git push (automático)"
echo "   - O ejecuta: vercel --prod"
echo ""
show_message "¡Tu aplicación estará lista para producción!"
echo ""
echo "📱 URL: https://carpeta-sin-titulo-101.vercel.app"
echo "📊 GitHub: https://github.com/stoja88/carpeta-sin-t-tulo-101"
echo ""