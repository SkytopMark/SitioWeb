# Skytop Roofing Assets

Carpeta centralizada para logos, imágenes, iconos y otros assets visuales del sitio.

## Estructura

```
assets/
├── logos/          Logos de Skytop en varios formatos y colores
├── projects/       Fotos antes/después de proyectos completados
├── services/       Imágenes de tipos de techos (metal, shingle, tile, flat)
├── icons/          Iconos SVG para características y servicios
├── team/           Fotos del equipo (si aplica)
└── README.md       Este archivo
```

## Carpetas

### `logos/`
Versiones del logo de Skytop para diferentes contextos:
- `skytop-logo.svg` — Logo principal (full color)
- `skytop-logo-white.svg` — Logo en blanco (para fondos oscuros: navy #0A2540)
- `skytop-logo-orange.svg` — Logo en naranja (#C86432)
- `skytop-icon.svg` — Icono simple para favicon/nav
- `favicon.ico` — Favicon para navegador

**Formato recomendado:** SVG (escalable, ligero)

### `projects/`
Fotografías de proyectos completados (antes/después):
- Nomenclatura: `project-[numero]-before.jpg`, `project-[numero]-after.jpg`
- Ejemplo: `project-001-before.jpg`, `project-001-after.jpg`
- Resolución mínima: 1200px ancho
- Formato: JPG (optimizado) o WebP (más ligero)
- Incluye descripción en filename si es específico: `project-metal-roof-fort-myers-before.jpg`

### `services/`
Imágenes de los 4 tipos de techos principales:
```
services/
├── metal-roofing.jpg      Metal roofing example
├── shingle-roofing.jpg    Shingle roofing example
├── tile-roofing.jpg       Tile roofing example
├── flat-roofing.jpg       Flat roofing example
```
- Resolución: 800×600px mínimo (para cards)
- Formato: JPG optimizado o WebP

### `icons/`
Iconos SVG para features, process steps, etc:
```
icons/
├── inspection.svg
├── quote.svg
├── installation.svg
├── warranty.svg
├── metal-roof-icon.svg
├── shingle-roof-icon.svg
├── tile-roof-icon.svg
├── flat-roof-icon.svg
```
- Formato: SVG con stroke/fill en variables CSS (para reutilizar en diferentes colores)
- Tamaño base: 24px × 24px (escalable)

### `team/`
Fotos del equipo (si la empresa tiene equipo visible):
```
team/
├── team-photo.jpg         Foto de equipo completa
├── founder-name.jpg       Foto individual de fundador/key person
```
- Resolución: mínimo 600×800px
- Formato: JPG

## Uso en Componentes Vue

### Logos en Header
```vue
<img src="@/assets/logos/skytop-logo.svg" alt="Skytop Roofing" class="logo">
```

### Imágenes de proyectos
```vue
<img src="@/assets/projects/project-001-after.jpg" alt="Roof installation in Fort Myers" loading="lazy">
```

### Iconos reutilizables
```vue
<img src="@/assets/icons/inspection.svg" alt="Inspection step" class="service-icon">
```

## Optimización

- **SVG:** Mantenlos simples, sin efectos complejos
- **JPG:** Comprimir a 70-80% calidad para web (usar herramientas como TinyJPG)
- **WebP:** Considerar para imágenes grandes (soporte moderno en navegadores)
- **Lazy loading:** Usar `loading="lazy"` en imágenes que no estén above-the-fold

## Colores de referencia (para reutilizar en SVGs)

```
--navy: #0A2540
--blue-gray: #405A7A
--orange: #C86432
--cream: #F5F5F5
--ink: #1a1a1a
```

## Checklist de Assets Necesarios

- [ ] Logo principal Skytop (SVG + PNG)
- [ ] Logo blanco (para header/fondos oscuros)
- [ ] Favicon
- [ ] 6-8 fotos de proyectos (antes/después)
- [ ] Imágenes de 4 tipos de techos
- [ ] Iconos para pasos del proceso (4)
- [ ] Iconos para tipos de techo (4)
- [ ] Foto de equipo (opcional pero recomendada)

---

**Última actualización:** 2026-10-28  
**Próximas acciones:** Agregar logos reales y fotos de proyectos Skytop
