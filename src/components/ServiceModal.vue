<template>
  <Modal :open="!!service" :title="service ? t(`services.${service}.name`) : ''" @close="emit('close')">
    <div v-if="service" class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(type, i) in (t(`services.${service}.types`) as { name: string; desc: string }[])" :key="type.name" class="rounded-lg overflow-hidden bg-white transition duration-300 ease-out hover:shadow-lg motion-safe:hover:scale-[1.03]" style="border: 1px solid #E5E5E5;">
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
  </Modal>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'
import Modal from './Modal.vue'

defineProps<{ service: string | null }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useI18n()

const base = import.meta.env.BASE_URL // '/SitioWeb/' on GitHub Pages; paths in scripts don't get it automatically

// One photo per type, in the same order as services.<service>.types; shared by both languages.
// Missing entries show the placeholder. Example: metal: [base + 'images/services/metal-5v.jpg', ...]
const images: Record<string, string[]> = {
  metal: [],
  shingle: [],
  tile: [],
  flat: []
}
</script>
