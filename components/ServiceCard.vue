<template>
  <div class="bg-white rounded-lg p-8 shadow-sm border border-light-bg">
    <h3 class="font-display text-2xl font-bold text-navy mb-3">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
    <button class="text-orange font-semibold mt-4 hover:text-orange/80 transition">
      Learn more →
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String
})
</script>
