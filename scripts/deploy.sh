#!/bin/bash

# Karedesk Portal - Deployment Script
# This script automates the deployment process to Vercel

set -e

echo "🚀 Iniciando deployment de Karedesk Portal..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}❌ Vercel CLI no está instalado${NC}"
    echo -e "${YELLOW}Instalando Vercel CLI...${NC}"
    npm install -g vercel
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ No se encontró package.json. Asegúrate de estar en el directorio del proyecto.${NC}"
    exit 1
fi

# Install dependencies
echo -e "${BLUE}📦 Instalando dependencias...${NC}"
npm install

# Run linting
echo -e "${BLUE}🔍 Ejecutando linting...${NC}"
npm run lint || echo -e "${YELLOW}⚠️ Advertencias de linting encontradas${NC}"

# Build the project
echo -e "${BLUE}🏗️ Construyendo el proyecto...${NC}"
npm run build

# Generate Prisma client
echo -e "${BLUE}🗄️ Generando cliente de Prisma...${NC}"
npx prisma generate

# Deploy to Vercel
echo -e "${BLUE}🚀 Desplegando a Vercel...${NC}"
vercel --prod

echo -e "${GREEN}✅ ¡Deployment completado exitosamente!${NC}"
echo -e "${GREEN}🌐 Tu aplicación está disponible en: https://karedesk.vercel.app${NC}"

# Optional: Open the deployed site
read -p "¿Quieres abrir el sitio en el navegador? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    open https://karedesk.vercel.app
fi

echo -e "${GREEN}🎉 ¡Deployment finalizado!${NC}"