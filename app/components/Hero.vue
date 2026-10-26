<template>
  <section class="bg-navy text-white relative min-h-screen flex items-center overflow-hidden">
    <video
      class="absolute inset-0 w-full h-full object-cover opacity-40"
      poster="/images/hero/poster.jpg"
      muted
      autoplay
      loop
      playsinline
    >
      <source src="/images/hero/background.mp4" type="video/mp4" />
      <source src="/images/hero/background.webm" type="video/webm" />
    </video>

    <div class="max-w-6xl mx-auto px-4 py-20 relative z-10 items-center">
      <div>
        <h1 class="font-display text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Big or small, we roof them all.
        </h1>
        <p class="text-xl text-light-blue mb-8">
          Metal, shingle, tile and flat
        </p>
        <NuxtLink
          to="#contact"
          class="inline-block bg-orange text-white px-8 py-3 rounded font-semibold hover:bg-orange/90 transition"
        >
          Get estimate
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>
