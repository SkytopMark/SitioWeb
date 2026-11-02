<template>
  <header style="background-color: rgba(10, 37, 64, 0.85); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);" class="text-white fixed top-0 left-0 right-0 z-50 border-b border-white border-opacity-10">
    <nav class="max-w-6xl mx-auto py-0 md:py-3 flex items-center justify-between gap-1 md:gap-6 px-3 md:px-[40px]">
      <!-- Logo Responsivo -->
      <div class="flex items-center flex-shrink-0">
        <!-- Mobile: Isotipo -->
        <img src="/images/logos/isotipo-blanco.png" alt="Skytop Roofing" class="md:hidden h-14 w-auto">
        <!-- Desktop: Logo Horizontal (max 220px) -->
        <img src="/images/logos/icono-horizontal-blanco.png" alt="Skytop Roofing" class="hidden md:block h-12 w-auto" style="max-width: 220px;">
      </div>

      <!-- Nav Desktop -->
      <nav class="hidden lg:flex gap-8 flex-1 justify-center" style="font-size: 14pt;">
        <a href="#" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.home') }}</a>
        <a href="#services" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.services') }}</a>
        <a href="#areas" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.areas') }}</a>
        <a href="#contact" class="hover:text-orange-500 transition font-medium tracking-wide" style="color: #F4EDE4;">{{ t('header.contact') }}</a>
      </nav>

      <!-- Language & CTA -->
      <div class="flex items-center gap-1 md:gap-2 flex-shrink-0">
        <!-- Language Dropdown -->
        <div class="relative">
          <button
            @click="showLanguageMenu = !showLanguageMenu"
            class="flex items-center justify-center w-11 h-11 md:h-14 rounded transition hover:opacity-70 min-h-[44px]"
            title="Select language"
          >
            <span class="text-xl md:text-2xl">🌐</span>
          </button>
          <div v-show="showLanguageMenu" class="absolute right-0 mt-1 bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10 min-w-[120px]">
            <button
              @click="handleLanguageSelect('en')"
              :class="['w-full px-4 py-2 text-left text-sm font-semibold transition', language === 'en' ? 'bg-orange-600 text-white' : 'text-white hover:bg-gray-800']"
            >
              English
            </button>
            <button
              @click="handleLanguageSelect('es')"
              :class="['w-full px-4 py-2 text-left text-sm font-semibold transition', language === 'es' ? 'bg-orange-600 text-white' : 'text-white hover:bg-gray-800']"
            >
              Español
            </button>
          </div>
        </div>

        <!-- CTA Button -->
        <button
          @click="openModal"
          class="text-white px-3 md:px-5 py-2 md:py-3 rounded font-semibold whitespace-nowrap hover:opacity-80 transition flex-shrink-0 min-h-[44px] flex items-center text-xs md:text-sm"
          style="background-color: #C86432;"
        >
          {{ t('header.cta') }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { useI18n } from '../i18n'

const { t, getLanguage, setLanguage } = useI18n()
const language = ref<'en' | 'es'>(getLanguage())
const showLanguageMenu = ref(false)
const openModal = inject<() => void>('openModal', () => {})

const handleLanguageSelect = (lang: 'en' | 'es') => {
  language.value = lang
  setLanguage(lang)
  showLanguageMenu.value = false
  window.location.reload()
}
</script>
