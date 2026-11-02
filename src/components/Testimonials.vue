<template>
  <section style="background-color: #F5F5F5;" class="py-8 md:py-20">
    <div class="max-w-6xl mx-auto px-4 md:px-[40px]">
      <h2 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('testimonials.headline') }}
      </h2>
      <p class="text-sm md:text-base text-center mb-8 md:mb-12 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('testimonials.subtitle') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div data-animate="fade-in-up" class="bg-white rounded-lg p-4 md:p-8 opacity-0" style="border-left: 4px solid #F58220;">
          <p class="mb-3 md:mb-4" style="color: #666666; font-style: italic; font-size: 15px; md:font-size: 16px;">
            "Skytop completely transformed our home. Professional, punctual, and built to last. Highly recommended!"
          </p>
          <p style="color: #0A2540; font-weight: 600; font-size: 13px; md:font-size: 14px;">
            — Sarah M., Cape Coral
          </p>
        </div>
        <div data-animate="fade-in-up" class="bg-white rounded-lg p-4 md:p-8 opacity-0" style="border-left: 4px solid #F58220;">
          <p class="mb-3 md:mb-4" style="color: #666666; font-style: italic; font-size: 15px; md:font-size: 16px;">
            "The best roofing company in Southwest Florida. Their attention to detail is incredible. Worth every penny."
          </p>
          <p style="color: #0A2540; font-weight: 600; font-size: 13px; md:font-size: 14px;">
            — James T., Fort Myers
          </p>
        </div>
        <div data-animate="fade-in-up" class="bg-white rounded-lg p-4 md:p-8 opacity-0" style="border-left: 4px solid #F58220;">
          <p class="mb-3 md:mb-4" style="color: #666666; font-style: italic; font-size: 15px; md:font-size: 16px;">
            "After the hurricane, Skytop got us back on our feet fast. Excellent work and fair pricing."
          </p>
          <p style="color: #0A2540; font-weight: 600; font-size: 13px; md:font-size: 14px;">
            — Maria G., Lehigh Acres
          </p>
        </div>
        <div data-animate="fade-in-up" class="bg-white rounded-lg p-4 md:p-8 opacity-0" style="border-left: 4px solid #F58220;">
          <p class="mb-3 md:mb-4" style="color: #666666; font-style: italic; font-size: 15px; md:font-size: 16px;">
            "Finally found a roofing company that treats you like family. 10/10 experience from start to finish."
          </p>
          <p style="color: #0A2540; font-weight: 600; font-size: 13px; md:font-size: 14px;">
            — Robert P., Sanibel
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
