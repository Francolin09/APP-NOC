# Proyecto NOC

El objetivo es crear una serie de tareas usando Arquitectura Limpia con TypeScript

# dev
1. Clonar el archivo .env.template a .env
2. Configurar las variables de entorno
```
PORT=3000

MAILER_EMAIL=
MAILER_SECRET_KEY=

PROD=false
```
De todas formas se deja adjunto un template con todas las variables de entorno necesarias.

3. Ejecutar el comando ```npm install```
4. Levantar bases de datos con ```docker compose up -d```
5. Ejecutar el comando ```npx prisma migrate dev ```
6. Ejecutar ```npm run dev```


## Obtener Gmail Key
[Google AppPasswords](https://myaccount.google.com/u/0/apppasswords)
