# 🎬 ThePelicula — Catálogo de Cine Interactivo

Bienvenido a **ThePelicula**, una aplicación web moderna (SPA) desarrollada con **React** y **Vite** que permite explorar películas populares, buscar títulos en tiempo real, consultar información detallada y gestionar una colección personalizada de favoritos con persistencia local.

Este proyecto fue desarrollado por **Sandy Pérez** como Proyecto Final de desarrollo web con React.

---
## 🚀 Características Principales

- 🍿 **Exploración de Películas:** Consulta el catálogo de películas más populares del momento en conexión directa con la API de **TMDB (The Movie Database)**.
- 🔍 **Búsqueda en Tiempo Real:** Filtra películas al instante mientras escribes mediante eventos reactivos (`onChange`) y optimización con `useMemo`.
- 📄 **Vista de Detalle Dinámica:** Consulta sinopsis, fechas de estreno y calificaciones individuales mediante rutas dinámicas (`/detalle/:id`).
- ❤️ **Gestión de Favoritos (CRUD):** Guarda y elimina películas de tu lista personal con un solo clic.
- 💾 **Persistencia con `localStorage`:** Tus favoritos se mantienen guardados incluso si recargas la página o cierras el navegador.
- 🌐 **Navegación SPA fluida:** Enrutamiento instantáneo sin recargas en blanco utilizando **React Router DOM v6**.
- 📱 **Diseño Responsive y Tema Cine:** Interfaz en modo oscuro moderna, adaptada para teléfonos móviles, tablets y pantallas de escritorio mediante **CSS Grid** y **Flexbox**.
---
## 💻 Instalación y Ejecución Local

Si deseas clonar y ejecutar este proyecto en tu computadora:

#1. Clonar el repositorio:
bash
-----
git clone https://github.com/Elbozu/thepelicula.git


#2. Entrar a la carpeta del proyecto:
bash
------
cd thepelicula

#3. Instalar dependencias:
bash
-----
npm install

#4. Iniciar el servidor de desarrollo:
bash
-----
npm run dev

-----
# Abre tu navegador en http://localhost:5173/ ¡y disfruta del cine!


------
## 👨‍💻 Autor

Desarrollado con dedicación por Sandy Pérez.

GitHub: @Elbozu

## 📁 Estructura del Proyecto
```text
thepelicula/
│
├── public/
│
├── src/
│   ├── components/ # Componentes reutilizables de UI.
│   │   ├── Navbar.jsx
│   │   ├── PeliculaCard.jsx
│   │   ├── PeliculaList.jsx
│   │   ├── SearchBar.jsx
│   │   └── FavoriteButton.jsx
│   │
│   ├── context/ # Estado global con Context API
│   │   └── FavoritosContext.jsx
│   │
│   ├── hooks/ # Custom Hooks personalizados
│   │   └── useFetch.js
│   │
│   ├── pages/ # Páginas y vistas principales
│   │   ├── Home.jsx
│   │   ├── Favoritos.jsx
│   │   ├── DetallePelicula.jsx
│   │   └── Error404.jsx
│   │
│   ├── utils/ # Constantes de configuración de la API
│   │   └── constants.js
│   │
│   ├── App.jsx # Configuración de rutas y Providers principales
│   └── App.css # Estilos visuales y diseño responsive de la app
|   ├── index.css # Reseteo y estilos base globales         
|   └── main.jsx  # Punto de entrada de la aplicación
│
├── .env
├── .gitignore
├── package.json
└── README.md
---
