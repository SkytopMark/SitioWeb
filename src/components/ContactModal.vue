<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click="close">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full" @click.stop>
      <div class="p-6 flex items-center justify-between" style="background: linear-gradient(135deg, #405A7A 0%, #2B4B6D 100%);">
        <h2 class="text-xl font-bold text-white">Contáctanos</h2>
        <button @click="close" class="text-white hover:opacity-70 text-2xl font-bold">×</button>
      </div>

      <form @submit.prevent="submit()" class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">Nombre *</label>
          <input v-model="form.name" type="text" required placeholder="Tu nombre completo" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">Teléfono *</label>
          <input v-model="form.phone" type="tel" required placeholder="(239) 365-9939" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">Correo *</label>
          <input v-model="form.email" type="email" required placeholder="tu@correo.com" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">Dirección (opcional)</label>
          <input v-model="form.address" type="text" placeholder="Tu dirección" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-2" style="color: #405A7A;">Mensaje</label>
          <textarea v-model="form.message" placeholder="¿Cómo podemos ayudarte?" rows="3" class="w-full px-4 py-2 border rounded-lg text-sm resize-none" style="border-color: #E5E5E5; color: #2B2B2B;"></textarea>
        </div>

        <button type="submit" class="w-full text-white font-semibold py-3 rounded-lg transition hover:opacity-90" style="background-color: #C86432;">
          Enviar por correo
        </button>

        <button type="button" @click="submit('whatsapp')" class="w-full font-semibold py-3 rounded-lg transition hover:opacity-80" style="border: 2px solid #C86432; color: #C86432;">
          Enviar por WhatsApp
        </button>

        <p class="text-xs text-center" style="color: #999999;">Te responderemos dentro de 24 horas</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const form = reactive({ name: '', phone: '', email: '', address: '', message: '' })

const close = () => emit('close')

// Default (form submit / Enter) is email; the WhatsApp button passes 'whatsapp'.
const submit = (via: 'email' | 'whatsapp' = 'email') => {
  if (!form.name || !form.phone || !form.email) {
    alert('Por favor completa todos los campos requeridos')
    return
  }

  const msg = `Hola, me gustaría contactar a Skytop Roofing:

Nombre: ${form.name}
Teléfono: ${form.phone}
Correo: ${form.email}
${form.address ? `Dirección: ${form.address}` : ''}
${form.message ? `\nMensaje: ${form.message}` : ''}`

  if (via === 'whatsapp') {
    window.open(`https://wa.me/12393659939?text=${encodeURIComponent(msg)}`, '_blank')
  } else {
    // shortcut: mailto opens the visitor's own mail app, so nothing is sent if they have none set up; upgrade to a form service (e.g. FormSubmit) if leads get lost
    window.location.href = `mailto:skytoopmarketing@gmail.com?subject=${encodeURIComponent('Contacto desde la web - ' + form.name)}&body=${encodeURIComponent(msg)}`
  }
  form.name = form.phone = form.email = form.address = form.message = ''
  close()
}
</script>
