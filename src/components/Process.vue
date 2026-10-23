<template>
  <section id="process" style="background-color: #405A7A;" class="text-white py-20">
    <div class="max-w-6xl mx-auto px-4" style="padding-left: 60px; padding-right: 60px;">
      <h2 class="text-4xl font-bold mb-2 text-center" style="font-family: 'Saira';">
        {{ t('process.headline') }}
      </h2>
      <p class="text-center mb-12 max-w-2xl mx-auto" style="color: #D9E4F0;">
        {{ t('process.subtitle') }}
      </p>
      <div class="grid md:grid-cols-4 gap-6">
        <div class="rounded-lg p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-3xl mb-3" style="color: #C86432; font-family: 'Saira';">1</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.inspect') }}</h3>
          <p class="text-sm" style="color: #D9E4F0;">{{ t('process.inspectDesc') }}</p>
        </div>
        <div class="rounded-lg p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-3xl mb-3" style="color: #C86432; font-family: 'Saira';">2</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.plan') }}</h3>
          <p class="text-sm" style="color: #D9E4F0;">{{ t('process.planDesc') }}</p>
        </div>
        <div class="rounded-lg p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-3xl mb-3" style="color: #C86432; font-family: 'Saira';">3</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.install') }}</h3>
          <p class="text-sm" style="color: #D9E4F0;">{{ t('process.installDesc') }}</p>
        </div>
        <div class="rounded-lg p-6" style="background-color: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);">
          <div class="font-bold text-3xl mb-3" style="color: #C86432; font-family: 'Saira';">4</div>
          <h3 class="text-lg font-bold mb-2" style="font-family: 'Saira';">{{ t('process.protect') }}</h3>
          <p class="text-sm" style="color: #D9E4F0;">{{ t('process.protectDesc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
