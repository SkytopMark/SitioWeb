<template>
  <section style="background-color: #F4EDE4; border-color: #E8DDD2;" class="py-8 md:py-20 border-b">
    <div class="max-w-6xl mx-auto px-4 md:px-[40px]">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div data-animate="fade-in-up" class="text-center opacity-0">
          <div class="text-3xl md:text-5xl font-bold mb-1 md:mb-2" style="color: #405A7A; font-family: 'Saira';">15+</div>
          <p class="text-xs md:text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.experience') }}</p>
        </div>
        <div data-animate="fade-in-up" class="text-center opacity-0">
          <div class="text-5xl md:text-6xl mb-1 md:mb-2">✓</div>
          <p class="text-xs md:text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.completed') }}</p>
        </div>
        <div data-animate="fade-in-up" class="text-center opacity-0">
          <div class="text-3xl md:text-5xl font-bold mb-1 md:mb-2" style="color: #405A7A; font-family: 'Saira';">98%</div>
          <p class="text-xs md:text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.satisfaction') }}</p>
        </div>
        <div data-animate="fade-in-up" class="text-center opacity-0">
          <div class="text-3xl md:text-5xl font-bold mb-1 md:mb-2" style="color: #405A7A; font-family: 'Saira';">24/7</div>
          <p class="text-xs md:text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.emergency') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
