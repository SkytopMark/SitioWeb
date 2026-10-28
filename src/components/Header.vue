<template>
  <header style="background-color: #0A2540;" class="text-white sticky top-0 z-50">
    <nav class="max-w-6xl mx-auto py-4 flex items-center justify-between" style="padding-left: 60px; padding-right: 60px;">
      <div class="flex flex-col items-center gap-0.5 flex-shrink-0">
        <div class="font-display font-bold text-xl text-white">Skytop</div>
        <div class="text-xs font-semibold" style="color: #C86432; letter-spacing: 0.5px;">Big or Small we roof them all</div>
      </div>

      <div class="hidden md:flex gap-6 text-sm absolute left-1/2 transform -translate-x-1/2">
        <a href="#" class="hover:opacity-70 transition">{{ t('header.home') }}</a>
        <a href="#services" class="hover:opacity-70 transition">{{ t('header.services') }}</a>
        <a href="#areas" class="hover:opacity-70 transition">{{ t('header.areas') }}</a>
        <a href="#contact" class="hover:opacity-70 transition">{{ t('header.contact') }}</a>
      </div>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <button
            @click="changeLanguage('en')"
            :class="['px-3 py-1 rounded text-xs font-semibold transition', language === 'en' ? 'bg-white text-blue-900' : 'text-white hover:opacity-70']"
          >
            EN
          </button>
          <button
            @click="changeLanguage('es')"
            :class="['px-3 py-1 rounded text-xs font-semibold transition', language === 'es' ? 'bg-white text-blue-900' : 'text-white hover:opacity-70']"
          >
            ES
          </button>
        </div>
        <button class="text-white px-6 py-2 rounded font-semibold whitespace-nowrap hover:opacity-80 transition flex-shrink-0" style="background-color: #C86432;">
          {{ t('header.cta') }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../i18n'

const { t, getLanguage, setLanguage } = useI18n()
const language = ref<'en' | 'es'>(getLanguage())

const changeLanguage = (lang: 'en' | 'es') => {
  language.value = lang
  setLanguage(lang)
  window.location.reload()
}
</script>
