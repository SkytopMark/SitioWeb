<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-sm border border-light-bg">
    <div v-if="image" class="h-48 bg-light-bg overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
    </div>
    <div class="p-8">
      <h3 class="font-display text-2xl font-bold text-navy mb-3">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
      <button class="text-orange font-semibold mt-4 hover:text-orange/80 transition">
        Learn more →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: String
})
</script>
