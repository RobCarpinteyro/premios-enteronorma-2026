#!/bin/bash
# ╔══════════════════════════════════════════════════════════════════╗
# ║   DEPLOY — Premios Enteronorma 2026                            ║
# ║   Ejecutar desde la carpeta premios-enteronorma-2026/          ║
# ║   Requiere: git, curl                                           ║
# ╚══════════════════════════════════════════════════════════════════╝

# Token se pasa como variable de entorno: export GH_TOKEN=ghp_...
TOKEN="${GH_TOKEN}"
if [ -z "$TOKEN" ]; then
  echo "❌ Falta el token. Ejecuta primero:"
  echo "   export GH_TOKEN=tu_token_aqui"
  exit 1
fi
OWNER="RobCarpinteyro"
REPO="premios-enteronorma-2026"
EMAIL="carpinteyro@polarmultimedia.com"
NAME="Roberto Carpinteyro"

echo ""
echo "🎬 Premios Enteronorma 2026 — Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Crear repo en GitHub
echo ""
echo "📦 [1/5] Creando repositorio en GitHub..."
RESPONSE=$(curl -s -w "\n%{http_code}" \
  -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"$REPO\",\"description\":\"Premios Enteronorma 2026 — App de evento en vivo\",\"private\":false,\"auto_init\":false}" \
  "https://api.github.com/user/repos")

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
if [ "$HTTP_CODE" = "201" ]; then
  echo "   ✅ Repositorio creado: https://github.com/$OWNER/$REPO"
elif [ "$HTTP_CODE" = "422" ]; then
  echo "   ⚠️  El repositorio ya existe — continuando con push..."
else
  echo "   ❌ Error al crear repo (HTTP $HTTP_CODE). Intenta de nuevo."
  exit 1
fi

# 2. Inicializar git
echo ""
echo "🔧 [2/5] Inicializando git..."
git init -q
git config user.email "$EMAIL"
git config user.name "$NAME"

# 3. Commit inicial
echo ""
echo "📝 [3/5] Haciendo commit..."
git add .
git commit -q -m "feat: Premios Enteronorma 2026 — app inicial

- Vista /pantalla: proyección del salón (estados, video, votación, terna, ganador)
- Vista /mesa: tabletas de votación por mesa
- Vista /moderador: panel de control del evento (PIN: 2026)
- Firebase Realtime Database para sincronización en tiempo real
- 6 casos clínicos con temática cinematográfica"

# 4. Push a GitHub
echo ""
echo "🚀 [4/5] Haciendo push a GitHub..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://$TOKEN@github.com/$OWNER/$REPO.git"
git branch -M main
git push -u origin main --force

if [ $? -ne 0 ]; then
  echo "   ❌ Error en el push. Verifica el token y los permisos."
  exit 1
fi
echo "   ✅ Push exitoso"

# 5. Activar GitHub Pages
echo ""
echo "📄 [5/5] Activando GitHub Pages..."
sleep 2
curl -s -o /dev/null -w "   HTTP %{http_code}\n" \
  -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -H "Content-Type: application/json" \
  -d '{"source":{"branch":"main","path":"/"}}' \
  "https://api.github.com/repos/$OWNER/$REPO/pages"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅  Deploy completo!"
echo ""
echo "   ⏳ GitHub Pages tarda ~3 minutos en activarse."
echo "   Luego estarán disponibles:"
echo ""
echo "   🎛  Moderador:  https://$OWNER.github.io/$REPO/moderador/"
echo "       PIN de acceso: 2026"
echo ""
echo "   📽  Pantalla:   https://$OWNER.github.io/$REPO/pantalla/"
echo ""
echo "   📱  Mesa:       https://$OWNER.github.io/$REPO/mesa/"
echo ""
echo "   ⚠️  Recuerda configurar Firebase ANTES del evento:"
echo "       1. Abre firebase-config.js y pega tu firebaseConfig"
echo "       2. Vuelve a correr este script para actualizar"
echo "       3. En el panel Moderador → botón ⚙ Inicializar DB"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
