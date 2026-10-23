<template>
  <section id="services" class="bg-page-bg py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="font-display text-4xl font-bold text-navy mb-4 text-center">
        Roofing for every kind of building
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We provide roofing services for metal, shingle, tile, and flat roof types with expert craftsmanship.
      </p>

      <div class="grid md:grid-cols-2 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    id: 1,
    title: 'Metal roofing',
    description: 'Durable metal roofs designed for longevity and weather resistance.'
  },
  {
    id: 2,
    title: 'Shingle roofing',
    description: 'Classic shingle roofing with superior protection and curb appeal.'
  },
  {
    id: 3,
    title: 'Tile roofing',
    description: 'Beautiful tile roofs offering elegance and exceptional durability.'
  },
  {
    id: 4,
    title: 'Flat roofing',
    description: 'Modern flat roofing solutions perfect for contemporary buildings.'
  }
]
</script>
