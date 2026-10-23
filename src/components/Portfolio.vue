<template>
  <section style="background-color: #FFFFFF;" class="py-20">
    <div class="max-w-6xl mx-auto" style="padding-left: 60px; padding-right: 60px;">
      <h2 class="text-4xl font-bold mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('portfolio.headline') }}
      </h2>
      <p class="text-center mb-12 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('portfolio.subtitle') }}
      </p>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="rounded-lg h-64 flex items-center justify-center font-semibold text-center" style="background: linear-gradient(135deg, #D5DFE8 0%, #AEC3D5 100%); color: #0A2540;">
          Modern Metal Roof
        </div>
        <div class="rounded-lg h-64 flex items-center justify-center font-semibold text-center" style="background: linear-gradient(135deg, #D5DFE8 0%, #AEC3D5 100%); color: #0A2540;">
          Coastal Tile Installation
        </div>
        <div class="rounded-lg h-64 flex items-center justify-center font-semibold text-center" style="background: linear-gradient(135deg, #D5DFE8 0%, #AEC3D5 100%); color: #0A2540;">
          Commercial Flat Roof
        </div>
        <div class="rounded-lg h-64 flex items-center justify-center font-semibold text-center" style="background: linear-gradient(135deg, #D5DFE8 0%, #AEC3D5 100%); color: #0A2540;">
          Shingle Replacement
        </div>
        <div class="rounded-lg h-64 flex items-center justify-center font-semibold text-center" style="background: linear-gradient(135deg, #D5DFE8 0%, #AEC3D5 100%); color: #0A2540;">
          Historic Restoration
        </div>
        <div class="rounded-lg h-64 flex items-center justify-center font-semibold text-center" style="background: linear-gradient(135deg, #D5DFE8 0%, #AEC3D5 100%); color: #0A2540;">
          Storm Damage Repair
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>
