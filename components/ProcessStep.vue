<template>
  <div class="text-center">
    <div class="bg-orange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl">
      {{ number }}
    </div>
    <h3 class="font-display text-xl font-bold">{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: Number,
  title: String
})
</script>
