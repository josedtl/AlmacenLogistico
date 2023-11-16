# Etapa de construcción
FROM node:18-alpine3.17 as build

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

# Copia los archivos del proyecto y el archivo .env.production
COPY .env.production /app/.env.production
COPY . /app

RUN npm run build

# Etapa de producción
FROM nginx:latest

# Copia los archivos construidos de la etapa de compilación a la carpeta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia el archivo .env.production al contenedor
COPY --from=build /app/.env.production /usr/share/nginx/html/.env.production

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
