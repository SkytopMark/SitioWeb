<template>
  <section id="process" class="bg-navy text-white py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="font-display text-4xl font-bold mb-2 text-center">
        {{ $t('process.title') }}
      </h2>
      <p class="text-center text-light-blue mb-12 max-w-2xl mx-auto">
        {{ $t('process.subtitle') }}
      </p>

      <div class="grid md:grid-cols-4 gap-6">
        <ProcessStep
          v-for="(step, idx) in steps"
          :key="idx"
          :number="idx + 1"
          :title="step.label()"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const steps = [
  { label: () => t('process.step1') },
  { label: () => t('process.step2') },
  { label: () => t('process.step3') },
  { label: () => t('process.step4') }
]
</script>
