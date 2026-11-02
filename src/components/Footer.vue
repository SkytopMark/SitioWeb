<template>
  <footer style="background-color: #2B2B2B; border-color: rgba(255, 255, 255, 0.1); color: #FFFFFF;" class="text-white py-6 md:py-8 border-t">
    <div class="max-w-6xl mx-auto py-6 md:py-8 px-4 md:px-[40px]">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
        <div>
          <img src="/images/logos/icono-vertical-blanco.png" alt="Skytop Roofing" style="height: 40px; md:height: 48px; width: auto; margin-bottom: 12px; md:margin-bottom: 16px;">
          <p class="text-sm md:text-base">{{ t('footer.companyDesc') }}</p>
        </div>
        <div>
          <h4 class="font-semibold mb-3 md:mb-4 text-sm md:text-base">{{ t('footer.contactLabel') }}</h4>
          <a href="tel:+12393659939" class="transition block hover:opacity-80 text-sm md:text-base min-h-[44px] flex items-center">
            (239) 365-9939
          </a>
        </div>
        <div>
          <h4 class="font-semibold mb-3 md:mb-4 text-sm md:text-base">{{ t('footer.servicesLabel') }}</h4>
          <ul class="grid grid-cols-2 gap-2 text-sm md:text-base">
            <li><a href="#" class="transition hover:opacity-80 min-h-[44px] flex items-center">{{ t('footer.metal') }}</a></li>
            <li><a href="#" class="transition hover:opacity-80 min-h-[44px] flex items-center">{{ t('footer.shingle') }}</a></li>
            <li><a href="#" class="transition hover:opacity-80 min-h-[44px] flex items-center">{{ t('footer.tile') }}</a></li>
            <li><a href="#" class="transition hover:opacity-80 min-h-[44px] flex items-center">{{ t('footer.flat') }}</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t pt-6 md:pt-8 text-center text-xs md:text-sm" style="border-color: rgba(255, 255, 255, 0.1);">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
