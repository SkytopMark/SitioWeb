<template>
  <section id="services" style="background-color: #F5F5F5;" class="py-20">
    <div class="max-w-6xl mx-auto py-20" style="padding-left: 40px; padding-right: 40px;">
      <h2 class="text-4xl font-bold mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('services.headline') }}
      </h2>
      <p class="text-center mb-12 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('services.subtitle') }}
      </p>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg p-8 shadow-sm" style="border: 1px solid #E5E5E5;">
          <h3 class="text-2xl font-bold mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.metal.name') }}</h3>
          <p style="color: #666666;">{{ t('services.metal.desc') }}</p>
          <button class="font-semibold mt-4 transition" style="color: #C86432;">{{ t('services.learnMore') }}</button>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm" style="border: 1px solid #E5E5E5;">
          <h3 class="text-2xl font-bold mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.shingle.name') }}</h3>
          <p style="color: #666666;">{{ t('services.shingle.desc') }}</p>
          <button class="font-semibold mt-4 transition" style="color: #C86432;">{{ t('services.learnMore') }}</button>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm" style="border: 1px solid #E5E5E5;">
          <h3 class="text-2xl font-bold mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.tile.name') }}</h3>
          <p style="color: #666666;">{{ t('services.tile.desc') }}</p>
          <button class="font-semibold mt-4 transition" style="color: #C86432;">{{ t('services.learnMore') }}</button>
        </div>
        <div class="bg-white rounded-lg p-8 shadow-sm" style="border: 1px solid #E5E5E5;">
          <h3 class="text-2xl font-bold mb-3" style="color: #405A7A; font-family: 'Saira';">{{ t('services.flat.name') }}</h3>
          <p style="color: #666666;">{{ t('services.flat.desc') }}</p>
          <button class="font-semibold mt-4 transition" style="color: #C86432;">{{ t('services.learnMore') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
