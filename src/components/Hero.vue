<template>
  <section class="relative min-h-screen flex items-center" style="background: linear-gradient(135deg, #405A7A 0%, #405A7A 100%);">
    <div class="absolute inset-0 opacity-10" style="background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><pattern id=%22p%22 x=%220%22 y=%220%22 width=%22100%22 height=%22100%22 patternUnits=%22userSpaceOnUse%22><rect fill=%22none%22 stroke=%22rgba(255,255,255,0.1)%22 stroke-width=%221%22 width=%22100%22 height=%22100%22/></pattern></defs><rect width=%221200%22 height=%22600%22 fill=%22url(%23p)%22/></svg>')"></div>
    <div class="max-w-6xl mx-auto py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center" style="padding-left: 40px; padding-right: 40px;">
      <div data-animate="fade-in-up" class="order-2 md:order-1 opacity-0 h-96 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center text-gray-400 font-serif text-lg" style="background: linear-gradient(135deg, #F4EDE4 0%, #E8DDD2 100%); color: #C86432;">
        [Premium roof imagery]
      </div>
      <div data-animate="fade-in-up" class="order-1 md:order-2 opacity-0 text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight" style="font-family: 'Saira';">
          {{ t('hero.headline') }}
        </h1>
        <p class="text-lg mb-8 max-w-xl" style="color: #E8DDD2; line-height: 1.6;">
          {{ t('hero.subtitle') }}
        </p>
        <a href="#contact" class="inline-block text-white px-8 py-3 rounded font-semibold transition hover:opacity-90" style="background-color: #C86432;">
          {{ t('hero.cta') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
