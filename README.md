# 🛠️ Práctica Frontend con JavaScript (Vanilla) / Frontend Practice with Vanilla JS

## 📝 Descripción (Español)
Pequeña práctica de desarrollo Frontend con **HTML + CSS + JavaScript (vanilla)**. Incluye:
- Formularios de **login** y **signup**
- Gestión de **sesión** en el cliente (sin backend)
- **CRUD básico de productos**: listado, detalle y creación
- Componentes y utilidades sencillas organizadas en carpetas

> Este proyecto está enfocado a **aprendizaje** (no es producción) y no utiliza frameworks ni servidor backend.

---

## 📝 Description (English)
Small **Frontend** practice using **plain HTML, CSS, and JavaScript**. It includes:
- **Login** and **signup** forms
- Client-side **session** handling (no backend)
- **Basic product CRUD**: list, detail, and creation
- Simple structure with folders for components and utilities

> This is a **learning-oriented** project (not production ready). No frameworks, no backend.

---

## 🧭 Estructura / Structure
- `index.html` · `index.js` · `style.css`
- `login/`, `signup/` – pantallas de autenticación
- `session/` – utilidades de sesión en cliente
- `product-list/`, `product-detail/`, `product-creation/` – vistas de productos
- `notifications/` – mensajes/feedback al usuario
- `utils/` – helpers reutilizables
- `img/` – activos estáticos

> La organización busca separar pantallas y utilidades para facilitar el mantenimiento.

---

## 🚀 Cómo ejecutar (ES)
1. **Clona** el repositorio  
   ```bash
   git clone https://github.com/USER/REPO.git
   cd REPO
   ```
2. **Abre** `index.html` en tu navegador.  
   - Recomendado: usa una extensión tipo **Live Server** en VS Code para servir el sitio en `http://localhost:5500` (o similar).

> No hay dependencias ni build. Todo es HTML/CSS/JS estático.

---

## 🚀 How to run (EN)
1. **Clone** the repository  
   ```bash
   git clone https://github.com/USER/REPO.git
   cd REPO
   ```
2. **Open** `index.html` in your browser.  
   - Recommended: use a local server (e.g., **Live Server** in VS Code) to serve at `http://localhost:5500`.

> No build step or dependencies. Static HTML/CSS/JS.

---

## 🧪 Funcionalidades clave / Key Features
- Validación básica de formularios (login/signup)
- Almacenamiento de sesión en el cliente (e.g., `localStorage` o similar)
- Listado de productos y navegación a **detalle**
- **Creación** de productos con formulario
- Mensajes de notificación/feedback al usuario

> Nota: al ser cliente puro, los datos **no persisten** fuera del almacenamiento local del navegador.

---

## 📚 Aprendizajes / Learnings
- Manipulación del DOM con JS nativo
- Gestión de estado ligero en cliente
- Organización mínima por vistas y utilidades
- Patrones básicos de validación de formularios y manejo de eventos

---

## 🗺️ Roadmap (ideas futuras)
- Validaciones más robustas
- Edición/Eliminación de productos (completar CRUD)
- Persistencia simulada con `localStorage` o mock API (e.g., JSON server)
- Tests de UI y utilidades (Jest + Testing Library, en versión SPA)

---

## 📦 Demo
*(Opcional)* Publica en **GitHub Pages**:
1. Ve a **Settings → Pages → Deploy from a branch**
2. Elige `main` y la carpeta raíz (`/root`)
3. Guarda y usa la URL generada como **Demo**

---

## 🏷️ Tecnologías / Tech
- HTML5, CSS3
- JavaScript (ES6+)
- Navegador (sin dependencias externas)

---

## 🔒 Nota sobre seguridad / Security note
Este proyecto es educativo. **No usar** tal cual en producción ni para gestionar datos reales.

---

## 👤 Autor / Author
Marta Camp — Frontend Developer (React)  
- Portfolio: https://www.martacamp.es 
- LinkedIn: https://www.linkedin.com/in/marta-camp/
