// ╔══════════════════════════════════════════════════════════════════╗
// ║   PREMIOS ENTERONORMA 2026 — CONFIGURACIÓN FIREBASE            ║
// ║   Pega aquí tu firebaseConfig de Firebase Console              ║
// ║   Project Settings → Your apps → Web app → SDK setup           ║
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

// ——— Datos del evento (editar si cambian las opciones clínicas) ———
const CASOS_DATA = {
  1: {
    titulo: "Emily C.",
    pelicula: "The Devil Wears Prada",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
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
    opciones: {
      A: "Parasitosis intestinal — antiparasitario",
      B: "Disbiosis post-antibiótica + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Intolerancia a la lactosa — dieta de exclusión",
      D: "Reflujo gastroesofágico — IBP"
    },
    respuesta_correcta: "B"
  },
  3: {
    titulo: "Arthur F.",
    pelicula: "Joker",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    opciones: {
      A: "Depresión mayor — antidepresivo",
      B: "Disbiosis + eje intestino-cerebro alterado + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Enfermedad inflamatoria intestinal — mesalazina",
      D: "Dispepsia funcional — procinético"
    },
    respuesta_correcta: "B"
  },
  4: {
    titulo: "Bruce B.",
    pelicula: "Matilda",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
    opciones: {
      A: "Estreñimiento crónico funcional — laxante osmótico",
      B: "Disbiosis + déficit B6 — Bacillus clausii + Vitamina B6",
      C: "Alergia alimentaria — eliminación de alérgenos",
      D: "ERGE pediátrico — omeprazol"
    },
    respuesta_correcta: "B"
  },
  5: {
    titulo: "Donna S.",
    pelicula: "Mamma Mia",
    pregunta: "¿Cuál es el diagnóstico y manejo más adecuado?",
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
