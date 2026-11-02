<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-gradient-to-r p-6 flex items-center justify-between" style="background: linear-gradient(135deg, #405A7A 0%, #2B4B6D 100%);">
        <h2 class="text-xl font-bold text-white" style="font-family: 'Saira';">{{ t('contact.title') }}</h2>
        <button @click="closeModal" class="text-white hover:opacity-70 text-2xl">×</button>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="p-6 space-y-4">
        <!-- Name -->
        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
            {{ t('contact.form.name') }} *
          </label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="Tu nombre"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style="border-color: #E5E5E5; color: #2B2B2B;"
            :style="{ '--tw-ring-color': '#C86432' }"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
            {{ t('contact.form.phone') }} *
          </label>
          <input
            v-model="form.phone"
            type="tel"
            required
            placeholder="(123) 456-7890"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style="border-color: #E5E5E5; color: #2B2B2B;"
            :style="{ '--tw-ring-color': '#C86432' }"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
            {{ t('contact.form.email') }} *
          </label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="tu@correo.com"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style="border-color: #E5E5E5; color: #2B2B2B;"
            :style="{ '--tw-ring-color': '#C86432' }"
          />
        </div>

        <!-- Address (Optional) -->
        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
            {{ t('contact.form.address') }}
          </label>
          <input
            v-model="form.address"
            type="text"
            placeholder="Dirección (opcional)"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            style="border-color: #E5E5E5; color: #2B2B2B;"
            :style="{ '--tw-ring-color': '#C86432' }"
          />
        </div>

        <!-- Message -->
        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
            {{ t('contact.form.message') }}
          </label>
          <textarea
            v-model="form.message"
            placeholder="¿Cómo podemos ayudarte?"
            rows="3"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 resize-none"
            style="border-color: #E5E5E5; color: #2B2B2B;"
            :style="{ '--tw-ring-color': '#C86432' }"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full text-white font-semibold py-3 rounded-lg transition hover:opacity-90 flex items-center justify-center gap-2"
          style="background-color: #C86432;"
        >
          <span>📱 {{ t('contact.form.send') }}</span>
        </button>

        <!-- Info Text -->
        <p class="text-xs text-center" style="color: #999999;">
          {{ t('contact.form.info') }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from '../i18n'

const { t } = useI18n()

const isOpen = ref(false)
const form = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  message: ''
})

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const submitForm = () => {
  // Validate required fields
  if (!form.name || !form.phone || !form.email) {
    alert(t('contact.form.error'))
    return
  }

  // Build WhatsApp message
  const message = `
*Nuevo contacto de Skytop Roofing:*

*Nombre:* ${form.name}
*Teléfono:* ${form.phone}
*Correo:* ${form.email}
${form.address ? `*Dirección:* ${form.address}` : ''}
${form.message ? `*Mensaje:* ${form.message}` : ''}
  `.trim()

  // Send to WhatsApp
  const whatsappNumber = '12393659939'
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  // Open WhatsApp
  window.open(whatsappUrl, '_blank')

  // Reset form and close modal
  form.name = ''
  form.phone = ''
  form.email = ''
  form.address = ''
  form.message = ''
  closeModal()
}

// Export to be used by other components
defineExpose({ openModal, closeModal })
</script>

<style scoped>
input:focus,
textarea:focus {
  border-color: #C86432 !important;
  box-shadow: 0 0 0 3px rgba(200, 100, 50, 0.1) !important;
}
</style>
