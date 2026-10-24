# GitHub Pages Setup

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

## Configuración inicial

### 1. Crear repositorio en GitHub

```bash
git init
git remote add origin https://github.com/tu-usuario/sitioweb.git
git branch -M main
git push -u origin main
```

### 2. Instalar gh-pages (opcional, solo si usas deploy manual)

```bash
npm install --save-dev gh-pages
```

### 3. Configurar GitHub Pages en el repositorio

1. Ve a **Settings** → **Pages**
2. En "Build and deployment":
   - **Source**: Selecciona "GitHub Actions"
3. Guarda los cambios

## Despliegue

### Automático (recomendado)

El flujo de trabajo en `.github/workflows/deploy.yml` se ejecutará automáticamente cuando hagas push a `main` o `master`.

El sitio estará disponible en:
- `https://tu-usuario.github.io/sitioweb/` (si es un repositorio de proyecto)
- `https://tu-usuario.github.io/` (si es un repositorio `tu-usuario.github.io`)

### Manual

Si prefieres desplegar manualmente:

```bash
npm run deploy
```

Esto requiere tener `gh-pages` instalado.

## Notas importantes

- La URL base se configura automáticamente en el workflow basada en el nombre del repositorio
- Si el repositorio se llama diferente, asegúrate de que `BASE_URL` en el workflow coincida
- Los cambios en `dist/` no se suben al repositorio; se generan durante el build

## Troubleshooting

### El sitio no se ve correctamente

Verifica que `BASE_URL` sea correcto. Si el sitio está en `https://usuario.github.io/mi-repo/`, el `BASE_URL` debe ser `/mi-repo/`.

### Los assets no cargan

Asegúrate de que el `vite.config.ts` tiene `base` configurado correctamente:

```typescript
base: process.env.BASE_URL || '/'
```

### El workflow falla

1. Verifica que el repositorio sea público
2. Asegúrate de que "GitHub Actions" está habilitado en Settings
3. Revisa los logs del workflow en la pestaña "Actions"
