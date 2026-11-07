<template>
  <Modal :open="!!project" :title="project?.title ?? ''" width="max-w-4xl" @close="emit('close')">
    <div v-if="project" class="p-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      <template v-for="n in Math.max(project.images.length, PLACEHOLDERS)" :key="n">
        <img v-if="project.images[n - 1]" :src="project.images[n - 1]" :alt="`${project.title} ${n}`" class="w-full aspect-[4/3] object-cover rounded-lg">
        <div v-else class="w-full aspect-[4/3] rounded-lg flex items-center justify-center" style="background-color: #F5F5F5; color: #B0B0B0;" aria-hidden="true">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5-5-8 8"/></svg>
        </div>
      </template>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from './Modal.vue'

defineProps<{ project: { title: string; images: string[] } | null }>()
const emit = defineEmits<{ close: [] }>()
const PLACEHOLDERS = 6
</script>
