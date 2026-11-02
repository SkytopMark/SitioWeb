<template>
  <section id="process" style="background-color: #405A7A;" class="text-white py-8 md:py-20">
    <div class="max-w-6xl mx-auto px-4 md:px-[40px]">
      <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-center" style="font-family: 'Saira';">
        {{ t('process.headline') }}
      </h2>
      <p class="text-sm md:text-base text-center mb-8 md:mb-12 max-w-2xl mx-auto" style="color: #D9E4F0;">
        {{ t('process.subtitle') }}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div class="rounded-lg p-4 md:p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-2xl md:text-3xl mb-2 md:mb-3" style="color: #C86432; font-family: 'Saira';">1</div>
          <h3 class="text-base md:text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.inspect') }}</h3>
          <p class="text-xs md:text-sm" style="color: #D9E4F0;">{{ t('process.inspectDesc') }}</p>
        </div>
        <div class="rounded-lg p-4 md:p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-2xl md:text-3xl mb-2 md:mb-3" style="color: #C86432; font-family: 'Saira';">2</div>
          <h3 class="text-base md:text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.plan') }}</h3>
          <p class="text-xs md:text-sm" style="color: #D9E4F0;">{{ t('process.planDesc') }}</p>
        </div>
        <div class="rounded-lg p-4 md:p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-2xl md:text-3xl mb-2 md:mb-3" style="color: #C86432; font-family: 'Saira';">3</div>
          <h3 class="text-base md:text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.install') }}</h3>
          <p class="text-xs md:text-sm" style="color: #D9E4F0;">{{ t('process.installDesc') }}</p>
        </div>
        <div class="rounded-lg p-4 md:p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-2xl md:text-3xl mb-2 md:mb-3" style="color: #C86432; font-family: 'Saira';">4</div>
          <h3 class="text-base md:text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.protect') }}</h3>
          <p class="text-xs md:text-sm" style="color: #D9E4F0;">{{ t('process.protectDesc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
