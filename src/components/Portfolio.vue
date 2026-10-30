<template>
  <section style="background-color: #FFFFFF;" class="py-20">
    <div class="max-w-6xl mx-auto" style="padding-left: 40px; padding-right: 40px;">
      <h2 class="text-4xl font-bold mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('portfolio.headline') }}
      </h2>
      <p class="text-center mb-12 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('portfolio.subtitle') }}
      </p>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="rounded-lg h-64 overflow-hidden relative group">
          <img src="/images/areas/1.jpg" alt="Modern Metal Roof" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white">Modern Metal Roof</p>
          </div>
        </div>
        <div class="rounded-lg h-64 overflow-hidden relative group">
          <img src="/images/areas/2.jpg" alt="Coastal Tile Installation" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white">Coastal Tile Installation</p>
          </div>
        </div>
        <div class="rounded-lg h-64 overflow-hidden relative group">
          <img src="/images/areas/3.jpg" alt="Commercial Flat Roof" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white">Commercial Flat Roof</p>
          </div>
        </div>
        <div class="rounded-lg h-64 overflow-hidden relative group">
          <img src="/images/areas/4.jpg" alt="Shingle Replacement" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white">Shingle Replacement</p>
          </div>
        </div>
        <div class="rounded-lg h-64 overflow-hidden relative group">
          <img src="/images/areas/5.jpg" alt="Historic Restoration" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white">Historic Restoration</p>
          </div>
        </div>
        <div class="rounded-lg h-64 overflow-hidden relative group">
          <img src="/images/areas/1.jpg" alt="Storm Damage Repair" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white">Storm Damage Repair</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
