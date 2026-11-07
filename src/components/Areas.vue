<template>
  <section id="areas" style="background-color: #FFFFFF;" class="py-8 md:py-20">
    <div class="max-w-6xl mx-auto px-4 md:px-[40px]">
      <h2 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('areas.headline') }}
      </h2>
      <p class="text-sm md:text-base text-center mb-2 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('areas.subtitle') }}
      </p>
      <p class="text-xs md:text-sm text-center mb-8 md:mb-12 max-w-2xl mx-auto" style="color: #999999;">
        {{ t('areas.disclaimer') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8" style="position: relative; z-index: 1;">
        <!-- Desktop: the map fills the row, so its height always matches the city cards -->
        <div class="md:col-span-2 relative">
          <div id="map" class="relative md:absolute md:inset-0" style="border-radius: 8px; border: 1px solid #E5E5E5; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1;"></div>
        </div>

        <div class="space-y-3 md:space-y-4" ref="cardsContainer">
          <div class="area-card p-4 md:p-6 rounded-lg">
            <h3 class="font-bold text-base md:text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Cape Coral</h3>
            <p class="text-xs md:text-sm" style="color: #2B2B2B;">{{ t('areas.capeCoralDesc') }}</p>
          </div>

          <div class="area-card p-4 md:p-6 rounded-lg">
            <h3 class="font-bold text-base md:text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Fort Myers</h3>
            <p class="text-xs md:text-sm" style="color: #2B2B2B;">{{ t('areas.fortMyersDesc') }}</p>
          </div>

          <div class="area-card p-4 md:p-6 rounded-lg">
            <h3 class="font-bold text-base md:text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Port Charlotte</h3>
            <p class="text-xs md:text-sm" style="color: #2B2B2B;">{{ t('areas.portCharlotteDesc') }}</p>
          </div>

          <div class="area-card p-4 md:p-6 rounded-lg">
            <h3 class="font-bold text-base md:text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Naples</h3>
            <p class="text-xs md:text-sm" style="color: #2B2B2B;">{{ t('areas.naplesDesc') }}</p>
          </div>

          <div class="area-card p-4 md:p-6 rounded-lg">
            <h3 class="font-bold text-base md:text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Sarasota</h3>
            <p class="text-xs md:text-sm" style="color: #2B2B2B;">{{ t('areas.sarasotaDesc') }}</p>
          </div>

          <div class="area-card p-4 md:p-6 rounded-lg">
            <h3 class="font-bold text-base md:text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Tampa</h3>
            <p class="text-xs md:text-sm" style="color: #2B2B2B;">{{ t('areas.tampaDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

let map: any = null
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  // Guard: Check if Leaflet is loaded
  if (!(window as any).L) {
    console.error('Leaflet not loaded')
    return
  }

  map = (window as any).L.map('map').setView([26.5, -81.8], 9)

  ;(window as any).L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)

  const locations = [
    { name: 'Cape Coral', lat: 26.5629, lng: -81.9496 },
    { name: 'Fort Myers', lat: 26.6406, lng: -81.8723 },
    { name: 'Port Charlotte', lat: 26.9762, lng: -82.0906 },
    { name: 'Naples', lat: 26.1411, lng: -81.7948 },
    { name: 'Sarasota', lat: 27.3364, lng: -82.5305 },
    { name: 'Tampa', lat: 27.9506, lng: -82.4572 }
  ]

  locations.forEach(location => {
    // Add service area circle (25km radius)
    ;(window as any).L.circle([location.lat, location.lng], {
      radius: 25000, // 25 kilometers
      color: '#C86432',
      weight: 2,
      opacity: 0.7,
      fill: true,
      fillColor: '#C86432',
      fillOpacity: 0.1
    }).bindPopup(`<div style="font-family: 'Saira'; font-weight: bold; color: #405A7A;">${location.name}</div>`).addTo(map)

    // Add center marker
    ;(window as any).L.circleMarker([location.lat, location.lng], {
      radius: 8,
      fillColor: '#C86432',
      color: '#405A7A',
      weight: 2,
      opacity: 1,
      fillOpacity: 1
    }).bindPopup(`<div style="font-family: 'Saira'; font-weight: bold; color: #405A7A;">${location.name}</div>`).addTo(map)
  })

  // frame every city (Naples to Tampa) instead of a fixed center
  const bounds = locations.map(l => [l.lat, l.lng])
  map.fitBounds(bounds, { padding: [40, 40] })

  // card heights change after fonts load or on resize; keep the map tiles and framing in sync
  resizeObserver = new ResizeObserver(() => {
    map.invalidateSize()
    map.fitBounds(bounds, { padding: [40, 40] })
  })
  resizeObserver.observe(document.getElementById('map')!)
})

// Cleanup map on unmount to prevent memory leaks
onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  if (map) {
    map.remove()
  }
})
</script>
