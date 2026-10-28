<template>
  <section style="background-color: #F4EDE4; border-color: #E8DDD2;" class="py-20 border-b">
    <div class="max-w-6xl mx-auto" style="padding-left: 40px; padding-right: 40px;">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-5xl font-bold mb-2" style="color: #405A7A; font-family: 'Saira';">15+</div>
          <p class="text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.experience') }}</p>
        </div>
        <div class="text-center">
          <div class="text-5xl font-bold mb-2" style="color: #405A7A; font-family: 'Saira';">2,500+</div>
          <p class="text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.completed') }}</p>
        </div>
        <div class="text-center">
          <div class="text-5xl font-bold mb-2" style="color: #405A7A; font-family: 'Saira';">98%</div>
          <p class="text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.satisfaction') }}</p>
        </div>
        <div class="text-center">
          <div class="text-5xl font-bold mb-2" style="color: #405A7A; font-family: 'Saira';">24/7</div>
          <p class="text-sm font-medium text-gray-700" style="letter-spacing: 0.5px;">{{ t('trustBar.emergency') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
