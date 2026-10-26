<template>
  <header class="bg-navy text-white sticky top-0 z-50">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="h-12">
        <NuxtLink to="/" class="flex items-center h-full hover:opacity-80 transition">
          <img src="/images/logo/logo.svg" alt="Skytop Roofing" class="h-full max-w-xs" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-8">
        <div class="hidden md:flex gap-6">
          <a href="#services" class="hover:text-orange transition">Services</a>
          <a href="#process" class="hover:text-orange transition">Process</a>
          <a href="#areas" class="hover:text-orange transition">Where we work</a>
          <a href="#contact" class="hover:text-orange transition">Contact</a>
        </div>

        <a href="tel:+12393659939" class="bg-orange text-white px-4 py-2 rounded font-semibold hover:bg-orange/90 transition whitespace-nowrap">
          (239) 365-9939
        </a>

        <LocaleSwitcher />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>
