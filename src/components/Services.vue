<template>
  <section id="services" style="background-color: #F5F5F5;" class="py-8 md:py-20">
    <div class="max-w-6xl mx-auto py-8 md:py-20 px-4 md:px-[40px]">
      <h2 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('services.headline') }}
      </h2>
      <p class="text-sm md:text-base text-center mb-8 md:mb-12 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('services.subtitle') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div data-animate="fade-in-up" class="bg-white rounded-lg overflow-hidden shadow-sm opacity-0" style="border: 1px solid #E5E5E5;">
          <img src="/images/services/1.jpg" alt="Metal Roof" class="w-full h-40 md:h-48 object-cover">
          <div class="p-4 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold mb-2 md:mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.metal.name') }}</h3>
            <p style="color: #666666; font-size: 0.9375rem;">{{ t('services.metal.desc') }}</p>
            <button class="font-semibold mt-3 md:mt-4 transition min-h-[44px] flex items-center" style="color: #C86432;">{{ t('services.learnMore') }}</button>
          </div>
        </div>
        <div data-animate="fade-in-up" class="bg-white rounded-lg overflow-hidden shadow-sm opacity-0" style="border: 1px solid #E5E5E5;">
          <img src="/images/services/2.jpg" alt="Shingle Roof" class="w-full h-40 md:h-48 object-cover">
          <div class="p-4 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold mb-2 md:mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.shingle.name') }}</h3>
            <p style="color: #666666; font-size: 0.9375rem;">{{ t('services.shingle.desc') }}</p>
            <button class="font-semibold mt-3 md:mt-4 transition min-h-[44px] flex items-center" style="color: #C86432;">{{ t('services.learnMore') }}</button>
          </div>
        </div>
        <div data-animate="fade-in-up" class="bg-white rounded-lg overflow-hidden shadow-sm opacity-0" style="border: 1px solid #E5E5E5;">
          <img src="/images/services/3.jpg" alt="Tile Roof" class="w-full h-40 md:h-48 object-cover">
          <div class="p-4 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold mb-2 md:mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.tile.name') }}</h3>
            <p style="color: #666666; font-size: 0.9375rem;">{{ t('services.tile.desc') }}</p>
            <button class="font-semibold mt-3 md:mt-4 transition min-h-[44px] flex items-center" style="color: #C86432;">{{ t('services.learnMore') }}</button>
          </div>
        </div>
        <div data-animate="fade-in-up" class="bg-white rounded-lg overflow-hidden shadow-sm opacity-0" style="border: 1px solid #E5E5E5;">
          <img src="/images/services/4.jpg" alt="Flat Roof" class="w-full h-40 md:h-48 object-cover">
          <div class="p-4 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold mb-2 md:mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.flat.name') }}</h3>
            <p style="color: #666666; font-size: 0.9375rem;">{{ t('services.flat.desc') }}</p>
            <button class="font-semibold mt-3 md:mt-4 transition min-h-[44px] flex items-center" style="color: #C86432;">{{ t('services.learnMore') }}</button>
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
