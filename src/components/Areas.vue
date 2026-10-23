<template>
  <section style="background-color: #FFFFFF;" class="py-20">
    <div class="max-w-6xl mx-auto" style="padding-left: 60px; padding-right: 60px;">
      <h2 class="text-4xl font-bold mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('areas.headline') }}
      </h2>
      <p class="text-center mb-2 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('areas.subtitle') }}
      </p>
      <p class="text-center mb-12 max-w-2xl mx-auto text-sm" style="color: #999999;">
        {{ t('areas.disclaimer') }}
      </p>

      <div class="grid md:grid-cols-3 gap-8" style="position: relative; z-index: 1;">
        <div class="md:col-span-2">
          <div id="map" style="height: 560px; border-radius: 8px; border: 1px solid #E5E5E5; box-shadow: 0 2px 8px rgba(0,0,0,0.1); position: relative; z-index: 1;"></div>
        </div>

        <div class="space-y-4" ref="cardsContainer">
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg" style="background: linear-gradient(135deg, #F4EDE4 0%, #E8DDD2 100%);">
            <h3 class="font-bold text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Cape Coral</h3>
            <p class="text-sm" style="color: #2B2B2B;">{{ t('areas.capeCoralDesc') }}</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg" style="background: linear-gradient(135deg, #F4EDE4 0%, #E8DDD2 100%);">
            <h3 class="font-bold text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Fort Myers</h3>
            <p class="text-sm" style="color: #2B2B2B;">{{ t('areas.fortMyersDesc') }}</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg" style="background: linear-gradient(135deg, #F4EDE4 0%, #E8DDD2 100%);">
            <h3 class="font-bold text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Naples</h3>
            <p class="text-sm" style="color: #2B2B2B;">{{ t('areas.naplesDesc') }}</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg" style="background: linear-gradient(135deg, #F4EDE4 0%, #E8DDD2 100%);">
            <h3 class="font-bold text-lg mb-1" style="color: #C86432; font-family: 'Saira';">Sarasota</h3>
            <p class="text-sm" style="color: #2B2B2B;">{{ t('areas.sarasotaDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

onMounted(() => {
  const map = (window as any).L.map('map').setView([26.5, -81.8], 9)

  ;(window as any).L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map)

  const locations = [
    { name: 'Cape Coral', lat: 26.5629, lng: -81.9496 },
    { name: 'Fort Myers', lat: 26.6406, lng: -81.8723 },
    { name: 'Naples', lat: 26.1411, lng: -81.7948 },
    { name: 'Sarasota', lat: 27.3364, lng: -82.5305 }
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
})
</script>
