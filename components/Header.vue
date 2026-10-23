<template>
  <header class="bg-navy text-white sticky top-0 z-50">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="font-display font-bold text-xl">
        <NuxtLink to="/" class="text-white hover:text-orange transition">
          Skytop
        </NuxtLink>
      </div>

      <div class="flex items-center gap-8">
        <div class="hidden md:flex gap-6">
          <a href="#services" class="hover:text-orange transition">{{ $t('nav.services') }}</a>
          <a href="#process" class="hover:text-orange transition">{{ $t('nav.process') }}</a>
          <a href="#areas" class="hover:text-orange transition">{{ $t('nav.areas') }}</a>
          <a href="#contact" class="hover:text-orange transition">{{ $t('nav.contact') }}</a>
        </div>

        <a href="tel:+12393659939" class="bg-orange text-white px-4 py-2 rounded font-semibold hover:bg-orange/90 transition whitespace-nowrap">
          {{ $t('contact.phone') }}
        </a>

        <LocaleSwitcher />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>
