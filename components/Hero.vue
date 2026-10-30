<template>
  <section class="bg-navy text-white relative min-h-screen flex items-center overflow-hidden">
    <video
      src="/images/hero/hero.mp4"
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover opacity-30"
    ></video>

    <div class="max-w-6xl mx-auto px-4 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-xl text-light-blue mb-8">
          {{ $t('hero.subtitle') }}
        </p>
        <NuxtLink
          to="#contact"
          class="inline-block bg-orange text-white px-8 py-3 rounded font-semibold hover:bg-orange/90 transition"
        >
          {{ $t('hero.cta') }}
        </NuxtLink>
      </div>

      <div class="hidden md:block h-96 bg-light-bg rounded-lg flex items-center justify-center text-navy font-semibold">
        Imagen o contenido
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
