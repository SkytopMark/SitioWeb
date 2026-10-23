<template>
  <section id="contact" style="background-color: #C86432;" class="py-20">
    <div class="max-w-3xl mx-auto text-center py-20" style="padding-left: 60px; padding-right: 60px;">
      <h2 class="text-5xl font-bold mb-4 text-white" style="font-family: 'Saira';">
        {{ t('contact.headline') }}
      </h2>
      <p class="text-2xl mb-12 text-white" style="font-weight: 300; font-style: italic;">
        {{ t('contact.subtitle') }}
      </p>
      <button class="text-white px-12 py-3 rounded font-semibold transition hover:opacity-90" style="background-color: #2B2B2B;">
        {{ t('contact.cta') }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
