<template>
  <div class="flex gap-2">
    <button
      v-for="locale in locales"
      :key="locale.code"
      @click="setLocale(locale.code)"
      :class="[
        'px-2 py-1 rounded text-sm font-semibold transition',
        $i18n.locale === locale.code
          ? 'bg-orange text-white'
          : 'text-white hover:text-orange'
      ]"
    >
      {{ locale.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const locales = [
  { code: 'en' },
  { code: 'es' }
]
</script>
