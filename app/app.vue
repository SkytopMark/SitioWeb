<template>
  <div class="bg-white min-h-screen">
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

useHead({
  script: [{ src: 'https://cdn.tailwindcss.com', async: true }]
})
</script>
