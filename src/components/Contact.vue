<template>
  <section id="contact" style="background-color: #C86432;" class="py-8 md:py-20">
    <div class="max-w-3xl mx-auto text-center py-8 md:py-20 px-4 md:px-[40px]">
      <h2 class="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white" style="font-family: 'Saira';">
        {{ t('contact.headline') }}
      </h2>
      <p class="text-lg md:text-2xl mb-8 md:mb-12 text-white" style="font-weight: 300; font-style: italic;">
        {{ t('contact.subtitle') }}
      </p>
      <button
        @click="openModal"
        class="text-white px-8 md:px-12 py-3 rounded-sm font-semibold transition hover:opacity-90 min-h-[44px] inline-flex items-center"
        style="background-color: #2B2B2B;"
      >
        {{ t('contact.cta') }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()
const openModal = inject<() => void>('openModal', () => {})
</script>
