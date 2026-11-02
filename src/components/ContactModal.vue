<template>
  <!-- Modal Overlay -->
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click="closeModal">
    <!-- Modal Dialog -->
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full" @click.stop>
        <!-- Header -->
        <div class="p-6 flex items-center justify-between" style="background: linear-gradient(135deg, #405A7A 0%, #2B4B6D 100%);">
          <h2 class="text-xl font-bold text-white">Contáctanos</h2>
          <button @click="closeModal" class="text-white hover:opacity-70 text-2xl font-bold">
            ×
          </button>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
          <!-- Name -->
          <div>
            <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
              Nombre *
            </label>
            <input
              v-model="name"
              type="text"
              required
              placeholder="Tu nombre completo"
              class="w-full px-4 py-2 border rounded-lg text-sm"
              style="border-color: #E5E5E5; color: #2B2B2B;"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
              Teléfono *
            </label>
            <input
              v-model="phone"
              type="tel"
              required
              placeholder="(239) 365-9939"
              class="w-full px-4 py-2 border rounded-lg text-sm"
              style="border-color: #E5E5E5; color: #2B2B2B;"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
              Correo *
            </label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="tu@correo.com"
              class="w-full px-4 py-2 border rounded-lg text-sm"
              style="border-color: #E5E5E5; color: #2B2B2B;"
            />
          </div>

          <!-- Address -->
          <div>
            <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
              Dirección (opcional)
            </label>
            <input
              v-model="address"
              type="text"
              placeholder="Tu dirección"
              class="w-full px-4 py-2 border rounded-lg text-sm"
              style="border-color: #E5E5E5; color: #2B2B2B;"
            />
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">
              Mensaje
            </label>
            <textarea
              v-model="message"
              placeholder="¿Cómo podemos ayudarte?"
              rows="3"
              class="w-full px-4 py-2 border rounded-lg text-sm resize-none"
              style="border-color: #E5E5E5; color: #2B2B2B;"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full text-white font-semibold py-3 rounded-lg transition hover:opacity-90"
            style="background-color: #C86432;"
          >
            Enviar por WhatsApp
          </button>

          <!-- Info -->
          <p class="text-xs text-center" style="color: #999999;">
            Te responderemos dentro de 24 horas
          </p>
        </form>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const name = ref('')
const phone = ref('')
const email = ref('')
const address = ref('')
const message = ref('')

const openModal = () => {
  console.log('openModal called, setting isOpen to true')
  isOpen.value = true
  console.log('isOpen is now:', isOpen.value)
}

const closeModal = () => {
  isOpen.value = false
  resetForm()
}

const resetForm = () => {
  name.value = ''
  phone.value = ''
  email.value = ''
  address.value = ''
  message.value = ''
}

const handleSubmit = () => {
  if (!name.value || !phone.value || !email.value) {
    alert('Por favor completa todos los campos requeridos')
    return
  }

  // Build WhatsApp message
  const msg = `Hola, me gustaría contactar a Skytop Roofing:

Nombre: ${name.value}
Teléfono: ${phone.value}
Correo: ${email.value}
${address.value ? `Dirección: ${address.value}` : ''}
${message.value ? `\nMensaje: ${message.value}` : ''}`

  // Open WhatsApp
  const encoded = encodeURIComponent(msg)
  const whatsappUrl = `https://wa.me/12393659939?text=${encoded}`
  window.open(whatsappUrl, '_blank')

  closeModal()
}

// Export methods
defineExpose({ openModal, closeModal })
</script>
