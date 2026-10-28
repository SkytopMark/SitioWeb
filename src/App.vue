<template>
  <div>
    <Header />
    <div style="padding-top: 60px; background-color: #405A7A;">
      <Hero />
    </div>
    <div style="background-color: #F5F5F5;">
      <TrustBar />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Areas />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
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
</script>
