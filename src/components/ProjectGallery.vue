<template>
  <div v-if="project" class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" @click="close" @keydown.esc="close">
    <div role="dialog" aria-modal="true" tabindex="-1" :aria-label="project.title" class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto outline-hidden" @click.stop>
      <div class="p-6 flex items-center justify-between" style="background: linear-gradient(135deg, #405A7A 0%, #2B4B6D 100%);">
        <h2 class="text-xl md:text-2xl font-bold text-white" style="font-family: 'Saira';">{{ project.title }}</h2>
        <button ref="closeBtn" @click="close" :aria-label="t('services.close')" class="text-white hover:opacity-70 text-2xl font-bold min-h-[44px] min-w-[44px]">×</button>
      </div>
      <div class="p-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        <template v-for="n in Math.max(project.images.length, PLACEHOLDERS)" :key="n">
          <img v-if="project.images[n - 1]" :src="project.images[n - 1]" :alt="`${project.title} ${n}`" class="w-full aspect-[4/3] object-cover rounded-lg">
          <div v-else class="w-full aspect-[4/3] rounded-lg flex items-center justify-center" style="background-color: #F5F5F5; color: #B0B0B0;" aria-hidden="true">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5-5-8 8"/></svg>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from 'vue'
import { useI18n } from '../i18n'

const props = defineProps<{ project: { title: string; images: string[] } | null }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useI18n()
const closeBtn = ref<HTMLButtonElement>()
const PLACEHOLDERS = 6

const close = () => emit('close')

watch(() => props.project, async (p) => {
  document.body.style.overflow = p ? 'hidden' : ''
  // focus the close button so Esc works and keyboard users land inside the dialog
  if (p) { await nextTick(); closeBtn.value?.focus() }
})

onUnmounted(() => { document.body.style.overflow = '' })
</script>
