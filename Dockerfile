# Etapa 1: build de la app
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# Etapa 2: servir con nginx
FROM nginx:stable-alpine

# Copiar los archivos estáticos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración nginx (opcional pero recomendado)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80