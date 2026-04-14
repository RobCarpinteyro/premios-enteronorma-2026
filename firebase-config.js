// ╔══════════════════════════════════════════════════════════════════╗
// ║   PREMIOS ENTERONORMA 2026 — CONFIGURACIÓN FIREBASE            ║
// ╚══════════════════════════════════════════════════════════════════╝

const firebaseConfig = {
  apiKey: "AIzaSyAR-tX4aFPTzu_a3v-ni_TWcmcV_ErZyzE",
  authDomain: "polar-premios-enteronorma-2026.firebaseapp.com",
  databaseURL: "https://polar-premios-enteronorma-2026-default-rtdb.firebaseio.com",
  projectId: "polar-premios-enteronorma-2026",
  storageBucket: "polar-premios-enteronorma-2026.firebasestorage.app",
  messagingSenderId: "88686864667",
  appId: "1:88686864667:web:7fca1a91dfe162212e4bbe"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ──────────────────────────────────────────────────────────────────
// DATOS DE LOS 6 CASOS CLÍNICOS
// bullets: se revelan uno a uno desde el moderador
// Tipos de bullet: "identidad" | "sintoma" | "nivel_alerta" | "nivel" | "labs"
// ──────────────────────────────────────────────────────────────────
const CASOS_DATA = {
  1: {
    titulo: "Emily C.",
    pelicula: "The Devil Wears Prada",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    bullets: [
      { tipo: "identidad", nombre: "Emily C.", edad: "28 años", ocupacion: "Asistente editorial", ciudad: "Nueva York" },
      { tipo: "sintoma",   icono: "🫁", titulo: "Diarrea recurrente", detalle: "3-4 × / semana · 2 meses de evolución" },
      { tipo: "sintoma",   icono: "⚡", titulo: "Fatiga · Irritabilidad", detalle: "Mareos frecuentes · <5h sueño · jornadas >14h" },
      { tipo: "nivel_alerta", titulo: "B6 sérica", valor: "0.4 mg/L ↓" },
      { tipo: "nivel",     titulo: "Microbiota intestinal", valor: "Disbiosis moderada ⚠" },
      { tipo: "labs",      texto: "Hgb 11.8 g/dL · Coprocultivo negativo" }
    ],
    opciones: {
      A: "Síndrome de intestino irritable — antiespasmódico",
      B: "Disbiosis + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Gastroenteritis viral — hidratación y reposo",
      D: "Trastorno de ansiedad — ansiolítico"
    },
    respuesta_correcta: "B"
  },
  2: {
    titulo: "Short Round",
    pelicula: "Indiana Jones",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    bullets: [
      { tipo: "identidad", nombre: "Short Round", edad: "8 años", ocupacion: "Viajero · acompañante de aventura", ciudad: "Tailandia / Hong Kong" },
      { tipo: "sintoma",   icono: "🫁", titulo: "Diarrea líquida", detalle: "4-5 episodios/día · inició al regreso del viaje" },
      { tipo: "sintoma",   icono: "⚡", titulo: "Cólico abdominal · Anorexia", detalle: "Pérdida de 1 kg · irritabilidad · deshidratación leve" },
      { tipo: "nivel_alerta", titulo: "B6 sérica", valor: "0.42 mg/L ↓" },
      { tipo: "nivel",     titulo: "Microbiota intestinal", valor: "Disbiosis leve · flora alterada por viaje" },
      { tipo: "labs",      texto: "Hgb 11.5 g/dL · Coprocultivo negativo" }
    ],
    opciones: {
      A: "Parasitosis intestinal — antiparasitario",
      B: "Disbiosis post-viaje + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Intolerancia a la lactosa — dieta de exclusión",
      D: "Reflujo gastroesofágico — IBP"
    },
    respuesta_correcta: "B"
  },
  3: {
    titulo: "Arthur F.",
    pelicula: "Joker",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    bullets: [
      { tipo: "identidad", nombre: "Arthur F.", edad: "35 años", ocupacion: "Comediante · situación laboral inestable", ciudad: "El Bronx, Nueva York" },
      { tipo: "sintoma",   icono: "🫁", titulo: "Diarrea diaria · Pérdida de peso", detalle: "−7 kg en 3 meses · deterioro progresivo del estado general" },
      { tipo: "sintoma",   icono: "⚡", titulo: "Fatiga extrema · Estrés crónico", detalle: "1 comida/día · ultraprocesados · sueño irregular" },
      { tipo: "nivel_alerta", titulo: "B6 sérica", valor: "0.28 mg/L ↓↓ déficit marcado" },
      { tipo: "nivel",     titulo: "Microbiota intestinal", valor: "Disbiosis severa ⚠" },
      { tipo: "labs",      texto: "Hgb 10.4 g/dL · Leucocitos 4,100/μL · Coprocultivo negativo" }
    ],
    opciones: {
      A: "Depresión mayor — antidepresivo",
      B: "Disbiosis severa + eje intestino-cerebro + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Enfermedad inflamatoria intestinal — mesalazina",
      D: "Dispepsia funcional — procinético"
    },
    respuesta_correcta: "B"
  },
  4: {
    titulo: "Bruce B.",
    pelicula: "Matilda",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    bullets: [
      { tipo: "identidad", nombre: "Bruce B.", edad: "10 años", ocupacion: "Estudiante · forzado a ingerir pastel gigante", ciudad: "Crunchem Hall, Inglaterra" },
      { tipo: "sintoma",   icono: "🫁", titulo: "Distensión abdominal severa", detalle: "Náusea · 2 episodios de vómito · diarrea 4×" },
      { tipo: "sintoma",   icono: "⚡", titulo: "Estrés agudo post-evento", detalle: "Presión social extrema · abdomen timpánico y doloroso" },
      { tipo: "nivel_alerta", titulo: "B6 sérica", valor: "0.38 mg/L ↓" },
      { tipo: "nivel",     titulo: "Microbiota intestinal", valor: "Disbiosis leve-moderada ⚠" },
      { tipo: "labs",      texto: "Hgb 11.2 g/dL · Glucosa 118 mg/dL · Na 134 mEq/L · Coprocultivo negativo" }
    ],
    opciones: {
      A: "Sobreingesta aguda — tratamiento sintomático",
      B: "Disbiosis post-estrés + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Alergia alimentaria — eliminación de alérgenos",
      D: "ERGE pediátrico — omeprazol"
    },
    respuesta_correcta: "B"
  },
  5: {
    titulo: "Donna S.",
    pelicula: "Mamma Mia",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    bullets: [
      { tipo: "identidad", nombre: "Donna S.", edad: "50 años", ocupacion: "Dueña de hotel boutique", ciudad: "Isla griega · Kalokairi" },
      { tipo: "sintoma",   icono: "🫁", titulo: "Diarrea recurrente · Distensión", detalle: "Fatiga intensa · sudoración nocturna · 4 meses de evolución" },
      { tipo: "sintoma",   icono: "⚡", titulo: "Insomnio · Cambios de humor", detalle: "Estrés extremo por boda de su hija · horarios irregulares" },
      { tipo: "nivel_alerta", titulo: "B6 sérica", valor: "0.35 mg/L ↓" },
      { tipo: "nivel",     titulo: "Microbiota intestinal", valor: "Disbiosis moderada · FSH 42 mUI/mL" },
      { tipo: "labs",      texto: "Perimenopausia confirmada · Coprocultivo negativo" }
    ],
    opciones: {
      A: "Síndrome climatérico — terapia hormonal",
      B: "Disbiosis post-estrés + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Colitis microscópica — budesonida",
      D: "Infección por H. pylori — triple terapia"
    },
    respuesta_correcta: "B"
  },
  6: {
    titulo: "Ethan H.",
    pelicula: "Mission Impossible",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    bullets: [
      { tipo: "identidad", nombre: "Ethan H.", edad: "40 años", ocupacion: "Agente de campo · organización de alto secreto", ciudad: "17 países · 90 días" },
      { tipo: "sintoma",   icono: "🫁", titulo: "Diarrea recurrente · Mareos", detalle: "Fatiga inexplicable · pérdida de concentración · 3 meses" },
      { tipo: "sintoma",   icono: "⚡", titulo: "Estrés extremo crónico", detalle: "Privación de sueño · alimentación irregular · jet lag permanente" },
      { tipo: "nivel_alerta", titulo: "B6 sérica", valor: "0.41 mg/L ↓" },
      { tipo: "nivel",     titulo: "Microbiota intestinal", valor: "Disbiosis moderada ⚠" },
      { tipo: "labs",      texto: "Hgb 12.1 g/dL · Coprocultivo negativo" }
    ],
    opciones: {
      A: "Úlcera péptica — inhibidor de bomba de protones",
      B: "Disbiosis por estrés crónico + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Síndrome de malabsorción — suplementación múltiple",
      D: "Gastritis crónica — antibioticoterapia"
    },
    respuesta_correcta: "B"
  }
};

const TOTAL_CASOS = 6;
const NUM_MESAS = 20;
