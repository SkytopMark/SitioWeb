<template>
  <footer style="background-color: #2B2B2B; border-color: rgba(255, 255, 255, 0.1); color: #FFFFFF;" class="text-white py-8 border-t">
    <div class="max-w-6xl mx-auto py-8" style="padding-left: 60px; padding-right: 60px;">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <img src="/images/logos/icono-vertical-blanco.png" alt="Skytop Roofing" style="height: 48px; width: auto; margin-bottom: 16px;">
          <p>{{ t('footer.companyDesc') }}</p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">{{ t('footer.contactLabel') }}</h4>
          <a href="tel:+12393659939" class="transition block hover:opacity-80">
            (239) 365-9939
          </a>
        </div>
        <div>
          <h4 class="font-semibold mb-4">{{ t('footer.servicesLabel') }}</h4>
          <ul class="grid grid-cols-2 gap-2">
            <li><a href="#" class="transition hover:opacity-80">{{ t('footer.metal') }}</a></li>
            <li><a href="#" class="transition hover:opacity-80">{{ t('footer.shingle') }}</a></li>
            <li><a href="#" class="transition hover:opacity-80">{{ t('footer.tile') }}</a></li>
            <li><a href="#" class="transition hover:opacity-80">{{ t('footer.flat') }}</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t pt-8 text-center text-sm" style="border-color: rgba(255, 255, 255, 0.1);">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
