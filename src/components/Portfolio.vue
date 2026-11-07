<template>
  <section style="background-color: #FFFFFF;" class="py-8 md:py-20">
    <div class="max-w-6xl mx-auto px-4 md:px-[40px]">
      <h2 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('portfolio.headline') }}
      </h2>
      <p class="text-sm md:text-base text-center mb-8 md:mb-12 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('portfolio.subtitle') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div class="rounded-lg h-48 md:h-64 overflow-hidden relative group">
          <img src="/images/areas/1.jpg" alt="Modern Metal Roof" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white text-sm md:text-base px-2">Modern Metal Roof</p>
          </div>
        </div>
        <div class="rounded-lg h-48 md:h-64 overflow-hidden relative group">
          <img src="/images/areas/2.jpg" alt="Coastal Tile Installation" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white text-sm md:text-base px-2">Coastal Tile Installation</p>
          </div>
        </div>
        <div class="rounded-lg h-48 md:h-64 overflow-hidden relative group">
          <img src="/images/areas/3.jpg" alt="Commercial Flat Roof" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white text-sm md:text-base px-2">Commercial Flat Roof</p>
          </div>
        </div>
        <div class="rounded-lg h-48 md:h-64 overflow-hidden relative group">
          <img src="/images/areas/4.jpg" alt="Shingle Replacement" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white text-sm md:text-base px-2">Shingle Replacement</p>
          </div>
        </div>
        <div class="rounded-lg h-48 md:h-64 overflow-hidden relative group">
          <img src="/images/areas/5.jpg" alt="Historic Restoration" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white text-sm md:text-base px-2">Historic Restoration</p>
          </div>
        </div>
        <div class="rounded-lg h-48 md:h-64 overflow-hidden relative group">
          <img src="/images/areas/1.jpg" alt="Storm Damage Repair" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
            <p class="font-semibold text-center text-white text-sm md:text-base px-2">Storm Damage Repair</p>
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
