# Guía de Imágenes - Skytop Roofing

Estructura de carpetas y recomendaciones para optimizar imágenes.

## 📁 Estructura de carpetas

```
public/images/
├── logo/              # Logo de la empresa
│   └── logo.svg       # Logo vectorial (recomendado)
├── hero/              # Fondo de video en Hero
│   ├── background.mp4    # Video principal (2-3 MB máx)
│   ├── background.webm   # Fallback WebM (más comprimido)
│   └── poster.jpg        # Thumbnail mientras carga el video
├── services/          # Imágenes de servicios (4 cards)
│   ├── metal-roofing.jpg
│   ├── shingle-roofing.jpg
│   ├── tile-roofing.jpg
│   └── flat-roofing.jpg
└── areas/             # Imágenes de áreas (3 ciudades)
    ├── cape-coral.jpg
    ├── fort-myers.jpg
    └── lehigh-acres.jpg
```

## 🎬 Video de fondo (Hero)

**Requisitos de rendimiento:**
- **Tamaño:** 2-3 MB máximo para MP4
- **Formato:** H.264 MP4 + WebM fallback
- **Duración:** 5-10 segundos (loop)
- **Resolución:** 1920x1080 recomendado

**Comando para comprimir (usando ffmpeg):**
```bash
ffmpeg -i video-original.mp4 -vcodec libx264 -preset slow -crf 23 -acodec aac -b:a 128k background.mp4
ffmpeg -i video-original.mp4 -c:v libvpx-vp9 -crf 23 background.webm
```

**Características del video en Hero:**
- `muted autoplay loop` - sin sonido, comienza automáticamente
- `poster="/images/hero/poster.jpg"` - thumbnail mientras carga
- `opacity-40` - 40% de opacidad para que se vea el texto encima
- `object-cover` - cubre todo el espacio sin deformarse

## 🖼️ Imágenes de Servicios

**Requerimientos:**
- **Tamaño:** 500-800 KB cada una
- **Resolución:** Mínimo 400x300 px
- **Aspecto:** Mostrar el tipo de techo (metal, shingle, tile, flat)

Componente `ServiceCard` muestra:
- 48px de altura con `object-cover`
- Texto del servicio debajo
- Link "Learn more"

## 📍 Imágenes de Áreas

**Requerimientos:**
- **Tamaño:** 400-600 KB cada una
- **Resolución:** Mínimo 400x300 px
- **Contenido:** Paisaje/construcciones de cada ciudad

Componente `AreaCard` muestra:
- 48px de altura con `object-cover`
- Nombre de la ciudad debajo

## 🎯 Logo

**Requerimientos:**
- **Formato:** SVG preferible (escalable, sin pérdida)
- **Tamaño:** < 50 KB
- **Dimensiones:** Mantiene aspecto (contenedor: h-12)

El logo en el header es responsivo y se adapta al contenedor.

## ⚡ Optimización recomendada

1. **Logo:** Usar SVG comprimido
2. **Video:** MP4 comprimido + WebM fallback
3. **Imágenes:** JPEG 80% calidad o WebP con fallback JPEG
4. **Tamaños totales:**
   - Logo: < 50 KB
   - Hero video: 2-3 MB
   - Services (4 imágenes): 2-3 MB total
   - Areas (3 imágenes): 1.5-2 MB total
   - **Total esperado: ~6 MB**

## 🚀 Performance

- Video de hero se carga con `poster` para experiencia más rápida
- Imágenes de servicios/áreas se cargan bajo demanda (cuando el usuario hace scroll)
- No hay librerías adicionales - optimización nativa de HTML5

## 📝 Checklist antes de desplegar

- [ ] Logo SVG en `/public/images/logo/logo.svg`
- [ ] Video MP4 comprimido en `/public/images/hero/background.mp4`
- [ ] Video WebM en `/public/images/hero/background.webm`
- [ ] Poster JPG en `/public/images/hero/poster.jpg`
- [ ] 4 imágenes de servicios en `/public/images/services/`
- [ ] 3 imágenes de áreas en `/public/images/areas/`
- [ ] Todas las imágenes optimizadas y comprimidas
