<template>
  <header style="background-color: rgba(10, 37, 64, 0.85); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);" class="text-white fixed top-0 left-0 right-0 z-50 border-b border-white border-opacity-10">
    <nav class="max-w-6xl mx-auto py-3 md:py-4 flex items-center justify-between gap-3 md:gap-8 px-4 md:px-[40px]">
      <div class="flex items-center gap-2 flex-shrink-0">
        <img src="/images/logos/icono-horizontal-blanco.png" alt="Skytop Roofing" style="height: 32px; md:height: 40px; width: auto;">
      </div>

      <nav class="hidden md:flex gap-10 text-base flex-1 justify-center">
        <a href="#" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.home') }}</a>
        <a href="#services" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.services') }}</a>
        <a href="#areas" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.areas') }}</a>
        <a href="#contact" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.contact') }}</a>
      </nav>

      <div class="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <div class="flex items-center gap-1 md:gap-2">
          <button
            @click="changeLanguage('en')"
            :class="['px-2 md:px-3 py-2 rounded text-xs font-semibold transition min-h-[44px] flex items-center', language === 'en' ? 'bg-white text-blue-900' : 'text-white hover:opacity-70']"
          >
            EN
          </button>
          <button
            @click="changeLanguage('es')"
            :class="['px-2 md:px-3 py-2 rounded text-xs font-semibold transition min-h-[44px] flex items-center', language === 'es' ? 'bg-white text-blue-900' : 'text-white hover:opacity-70']"
          >
            ES
          </button>
        </div>
        <button class="text-white px-4 md:px-6 py-3 rounded font-semibold whitespace-nowrap hover:opacity-80 transition flex-shrink-0 min-h-[44px] flex items-center" style="background-color: #C86432;">
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
