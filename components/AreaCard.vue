<template>
  <div class="rounded-lg overflow-hidden shadow-sm">
    <div class="h-48 bg-light-bg flex items-center justify-center text-navy font-semibold">
      [{{ city }} Photo]
    </div>
    <div class="bg-white p-4">
      <h3 class="font-display text-xl font-bold text-navy">{{ city }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  city: String
})
</script>
