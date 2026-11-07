<template>
  <div v-if="service" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click="close" @keydown.esc="close">
    <div role="dialog" aria-modal="true" tabindex="-1" :aria-label="t(`services.${service}.name`)" class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto outline-hidden" @click.stop>
      <div class="p-6 flex items-center justify-between" style="background: linear-gradient(135deg, #405A7A 0%, #2B4B6D 100%);">
        <h2 class="text-xl md:text-2xl font-bold text-white" style="font-family: 'Saira';">{{ t(`services.${service}.name`) }}</h2>
        <button ref="closeBtn" @click="close" :aria-label="t('services.close')" class="text-white hover:opacity-70 text-2xl font-bold min-h-[44px] min-w-[44px]">×</button>
      </div>
      <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(type, i) in t(`services.${service}.types`)" :key="type.name" class="rounded-lg overflow-hidden bg-white transition duration-300 ease-out hover:shadow-lg motion-safe:hover:scale-[1.03]" style="border: 1px solid #E5E5E5;">
          <img v-if="images[service]?.[i]" :src="images[service][i]" :alt="type.name" class="w-full aspect-[4/3] object-cover">
          <div v-else class="w-full aspect-[4/3] flex items-center justify-center" style="background-color: #F5F5F5; color: #B0B0B0;" aria-hidden="true">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5-5-8 8"/></svg>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2" style="color: #405A7A; font-family: 'Saira';">{{ type.name }}</h3>
            <p style="color: #666666; font-size: 0.9375rem;">{{ type.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onUnmounted } from 'vue'
import { useI18n } from '../i18n'

const props = defineProps<{ service: string | null }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useI18n()
const closeBtn = ref<HTMLButtonElement>()

// One photo per type, in the same order as services.<service>.types; shared by both languages.
// Missing entries show the placeholder. Example: metal: ['/images/services/metal-5v.jpg', ...]
const images: Record<string, string[]> = {
  metal: [],
  shingle: [],
  tile: [],
  flat: []
}

const close = () => emit('close')

watch(() => props.service, async (s) => {
  document.body.style.overflow = s ? 'hidden' : ''
  // focus the close button so Esc works and keyboard users land inside the dialog
  if (s) { await nextTick(); closeBtn.value?.focus() }
})

onUnmounted(() => { document.body.style.overflow = '' })
</script>
