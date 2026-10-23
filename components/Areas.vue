<template>
  <section id="areas" class="bg-page-bg py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="font-display text-4xl font-bold text-navy mb-4 text-center">
        {{ $t('areas.title') }}
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Serving the Southwest Florida area with professional roofing services.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <AreaCard
          v-for="area in areas"
          :key="area.code"
          :city="area.label()"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const areas = [
  { code: 'capeCoral', label: () => t('areas.capeCoral') },
  { code: 'fortMyers', label: () => t('areas.fortMyers') },
  { code: 'lehighAcres', label: () => t('areas.lehighAcres') }
]
</script>
