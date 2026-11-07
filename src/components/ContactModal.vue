<template>
  <Modal :open="isOpen" :title="t('contact.title')" width="max-w-md" @close="close">
    <form @submit.prevent="submit()" class="p-6 space-y-4">
      <div>
        <label for="cf-name" class="block text-sm font-semibold mb-2" style="color: #405A7A;">{{ t('contact.form.name') }} *</label>
        <input id="cf-name" v-model="form.name" type="text" required :placeholder="t('contact.form.namePlaceholder')" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
      </div>

      <div>
        <label for="cf-phone" class="block text-sm font-semibold mb-2" style="color: #405A7A;">{{ t('contact.form.phone') }} *</label>
        <input id="cf-phone" v-model="form.phone" type="tel" required placeholder="(239) 365-9939" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
      </div>

      <div>
        <label for="cf-email" class="block text-sm font-semibold mb-2" style="color: #405A7A;">{{ t('contact.form.email') }} *</label>
        <input id="cf-email" v-model="form.email" type="email" required :placeholder="t('contact.form.emailPlaceholder')" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
      </div>

      <div>
        <label for="cf-address" class="block text-sm font-semibold mb-2" style="color: #405A7A;">{{ t('contact.form.address') }} ({{ t('contact.form.optional') }})</label>
        <input id="cf-address" v-model="form.address" type="text" :placeholder="t('contact.form.addressPlaceholder')" class="w-full px-4 py-2 border rounded-lg text-sm" style="border-color: #E5E5E5; color: #2B2B2B;" />
      </div>

      <div>
        <label for="cf-message" class="block text-sm font-semibold mb-2" style="color: #405A7A;">{{ t('contact.form.message') }}</label>
        <textarea id="cf-message" v-model="form.message" :placeholder="t('contact.form.messagePlaceholder')" rows="3" class="w-full px-4 py-2 border rounded-lg text-sm resize-none" style="border-color: #E5E5E5; color: #2B2B2B;"></textarea>
      </div>

      <button type="submit" class="w-full text-white font-semibold py-3 rounded-lg transition hover:opacity-90" style="background-color: #C86432;">
        {{ t('contact.form.sendEmail') }}
      </button>

      <button type="button" @click="submit('whatsapp')" class="w-full font-semibold py-3 rounded-lg transition hover:opacity-80" style="border: 2px solid #C86432; color: #C86432;">
        {{ t('contact.form.send') }}
      </button>

      <p class="text-xs text-center" style="color: #999999;">{{ t('contact.form.info') }}</p>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from '../i18n'
import Modal from './Modal.vue'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const form = reactive({ name: '', phone: '', email: '', address: '', message: '' })

const close = () => emit('close')

// Default (form submit / Enter) is email; the WhatsApp button passes 'whatsapp'.
// The message itself stays in Spanish: it is read by the Skytop team, not the visitor.
const submit = (via: 'email' | 'whatsapp' = 'email') => {
  if (!form.name || !form.phone || !form.email) {
    alert(t('contact.form.error'))
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
