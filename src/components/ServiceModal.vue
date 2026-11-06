<template>
  <div v-if="service" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="close" @keydown.esc="close">
    <div role="dialog" aria-modal="true" :aria-label="t(`services.${service}.name`)" class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
      <div class="p-6 flex items-center justify-between" style="background: linear-gradient(135deg, #405A7A 0%, #2B4B6D 100%);">
        <h2 class="text-xl md:text-2xl font-bold text-white" style="font-family: 'Saira';">{{ t(`services.${service}.name`) }}</h2>
        <button ref="closeBtn" @click="close" aria-label="Close" class="text-white hover:opacity-70 text-2xl font-bold min-h-[44px] min-w-[44px]">×</button>
      </div>
      <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="type in t(`services.${service}.types`)" :key="type.name" class="rounded-lg p-4" style="border: 1px solid #E5E5E5;">
          <h3 class="text-lg font-bold mb-2" style="color: #405A7A; font-family: 'Saira';">{{ type.name }}</h3>
          <p style="color: #666666; font-size: 0.9375rem;">{{ type.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useI18n } from '../i18n'

const props = defineProps<{ service: string | null }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useI18n()
const closeBtn = ref<HTMLButtonElement>()

const close = () => emit('close')

// focus the close button so Esc works and keyboard users land inside the dialog
watch(() => props.service, async (s) => {
  if (s) { await nextTick(); closeBtn.value?.focus() }
})
</script>
