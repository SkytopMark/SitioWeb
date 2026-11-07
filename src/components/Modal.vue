<template>
  <div v-if="open" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click="close" @keydown.esc="close">
    <div role="dialog" aria-modal="true" tabindex="-1" :aria-label="title" class="bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto outline-hidden" :class="width" @click.stop>
      <div class="p-6 flex items-center justify-between" style="background: linear-gradient(135deg, #405A7A 0%, #2B4B6D 100%);">
        <h2 class="text-xl md:text-2xl font-bold text-white" style="font-family: 'Saira';">{{ title }}</h2>
        <button ref="closeBtn" type="button" @click="close" :aria-label="t('services.close')" class="text-white hover:opacity-70 text-2xl font-bold min-h-[44px] min-w-[44px]">×</button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from 'vue'
import { useI18n } from '../i18n'

const props = withDefaults(defineProps<{ open: boolean; title: string; width?: string }>(), { width: 'max-w-2xl' })
const emit = defineEmits<{ close: [] }>()
const { t } = useI18n()
const closeBtn = ref<HTMLButtonElement>()

const close = () => emit('close')

watch(() => props.open, async (o) => {
  document.body.style.overflow = o ? 'hidden' : ''
  // focus the close button so Esc works and keyboard users land inside the dialog
  if (o) { await nextTick(); closeBtn.value?.focus() }
})

onUnmounted(() => { document.body.style.overflow = '' })
</script>
