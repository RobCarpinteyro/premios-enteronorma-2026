# 🎬 Premios Enteronorma 2026

App de evento en vivo — GitHub Pages + Firebase Realtime Database  
**Polar Multimedia para Carnot Laboratorios**

---

## URLs del evento

| Vista | URL | Dispositivo |
|-------|-----|-------------|
| 🎛 Moderador | `/moderador/` | Laptop del staff |
| 📽 Pantalla | `/pantalla/` | Proyector del salón |
| 📱 Mesa | `/mesa/` | Tableta de cada mesa |

**PIN del moderador:** `2026`

---

## Setup antes del evento

### 1. Configurar Firebase
Editar `firebase-config.js` y reemplazar los valores PENDIENTE con tu `firebaseConfig` real.

### 2. Hacer deploy
```bash
chmod +x deploy.sh
./deploy.sh
```

### 3. Inicializar la base de datos
En el panel Moderador → botón **⚙ Inicializar DB**

### 4. Subir los videos
Colocar los archivos en la carpeta `premios/videos/`:
- `1.mp4` → Emily C. (The Devil Wears Prada)
- `2.mp4` → Short Round (Indiana Jones)
- `3.mp4` → Arthur F. (Joker)
- `4.mp4` → Bruce B. (Matilda)
- `5.mp4` → Donna S. (Mamma Mia)
- `6.mp4` → Ethan H. (Mission Impossible)

---

## Flujo del evento (por caso)

```
1. Moderador → [▶ Iniciar Video]     → Pantalla muestra el video
2. Moderador → [🗳 Abrir Votación]   → Mesas pueden votar A/B/C/D
3. Moderador → [🔒 Cerrar Votación]  → Se calculan puntos automáticamente
4. Moderador → [🏅 Revelar Terna]    → Pantalla muestra los 3 finalistas
5. Moderador → [✨ Revelar Ganador]  → Pantalla revela ganador con animación
6. Moderador → [⏭ Siguiente Caso]   → Pasa al caso N+1
```

Repetir 6 veces. Al final: **[🏆 Mostrar Marcador]**

---

## Estructura de archivos

```
premios-enteronorma-2026/
├── index.html              → Redirige a /pantalla/
├── firebase-config.js      → ⚠️ CONFIGURAR ANTES DEL EVENTO
├── moderador/index.html    → Panel de control
├── pantalla/index.html     → Proyección del salón
├── mesa/index.html         → Tabletas de votación
├── premios/videos/         → Subir 1.mp4 - 6.mp4 aquí
├── deploy.sh               → Script de deploy
└── README.md               → Este archivo
```
