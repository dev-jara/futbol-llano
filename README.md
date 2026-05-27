# ⚽ FutbolLlano API

API REST para la gestión de ligas y torneos de fútbol de barrio. 
Digitaliza el proceso tradicional de registro en papel, permitiendo 
administrar equipos, jugadores, partidos y estadísticas en tiempo real.

## 🚀 Tecnologías

- **Node.js** + **Express** — Servidor y API REST
- **PostgreSQL** — Base de datos relacional
- **JWT** — Autenticación y autorización
- **Bcrypt** — Encriptación de contraseñas
- **Dotenv** — Variables de entorno

## ✨ Funcionalidades

- Registro de ligas, equipos y jugadores
- Programación de partidos (fecha, hora, cancha)
- Registro de goles y tarjetas en tiempo real
- Tabla de posiciones automática
- Estadísticas de goleadores
- Sistema de autenticación con roles

## ⚙️ Instalación

1. Clona el repositorio
git clone https://github.com/dev-jara/futbol-llano.git

2. Instala las dependencias
npm install

3. Configura las variables de entorno, crea un archivo .env con:
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=futbol_llano
DB_USER=postgres
DB_PASSWORD=tu_contraseña
JWT_SECRET=tu_secreto

4. Corre el servidor
npm run dev

## 📡 Endpoints principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | /auth | Login |
| GET | /ligas | Obtener todas las ligas |
| GET | /equipos | Obtener todos los equipos |
| GET | /jugadores | Obtener todos los jugadores |
| GET | /partidos | Obtener todos los partidos |
| GET | /goles | Obtener todos los goles |

## 👨‍💻 Autor

Desarrollado por [@dev-jara](https://github.com/dev-jara)
