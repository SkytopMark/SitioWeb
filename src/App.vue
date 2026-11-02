<template>
  <div>
    <Header ref="headerRef" />
    <div class="md:pt-[60px]" style="padding-top: 40px; background-color: #405A7A;">
      <Hero ref="heroRef" />
    </div>
    <div style="background-color: #F5F5F5;">
      <TrustBar />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Areas />
      <Contact ref="contactRef" />
    </div>
    <Footer ref="footerRef" />
    <ContactModal :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, provide } from 'vue'
import { useScrollAnimation } from './composables/useScrollAnimation'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import TrustBar from './components/TrustBar.vue'
import Services from './components/Services.vue'
import Process from './components/Process.vue'
import Portfolio from './components/Portfolio.vue'
import Testimonials from './components/Testimonials.vue'
import Areas from './components/Areas.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ContactModal from './components/ContactModal.vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

provide('openModal', openModal)

onMounted(() => {
  window.scrollTo(0, 0)
})

useScrollAnimation(0.15)
</script>
