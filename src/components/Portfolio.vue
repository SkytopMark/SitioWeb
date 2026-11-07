<template>
  <section style="background-color: #FFFFFF;" class="py-8 md:py-20">
    <div class="max-w-6xl mx-auto px-4 md:px-[40px]">
      <h2 class="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center" style="color: #405A7A; font-family: 'Saira';">
        {{ t('portfolio.headline') }}
      </h2>
      <p class="text-sm md:text-base text-center mb-8 md:mb-12 max-w-2xl mx-auto" style="color: #666666;">
        {{ t('portfolio.subtitle') }}
      </p>
      <!-- Desktop: the hovered/focused card widens, the others narrow; height never changes. Mobile: stacked. -->
      <div class="flex flex-col md:flex-row gap-4 md:h-[520px]">
        <button
          v-for="(project, i) in projects"
          :key="project.title"
          type="button"
          @mouseenter="active = i"
          @focus="active = i"
          @click="open = i"
          :aria-label="project.title"
          class="relative overflow-hidden rounded-lg h-72 md:h-auto md:basis-0 md:min-w-[90px] text-left transition-[flex-grow] duration-500 ease-out"
          :class="active === i ? 'md:grow-[4]' : 'md:grow'"
        >
          <img :src="project.cover" :alt="project.title" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
          <p
            class="absolute bottom-0 left-0 p-5 font-semibold text-white text-lg md:text-xl whitespace-nowrap transition-opacity duration-300"
            :class="active === i ? 'md:opacity-100 md:delay-200' : 'md:opacity-0'"
            style="font-family: 'Saira';"
          >{{ project.title }}</p>
        </button>
      </div>
    </div>
    <ProjectGallery :project="open === null ? null : projects[open]" @close="open = null" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../i18n'
import ProjectGallery from './ProjectGallery.vue'

const { t } = useI18n()

// Add gallery photos to `images`; empty slots show placeholders.
const projects = [
  { title: 'Modern Metal Roof', cover: '/images/areas/1.jpg', images: [] as string[] },
  { title: 'Coastal Tile Installation', cover: '/images/areas/2.jpg', images: [] as string[] },
  { title: 'Commercial Flat Roof', cover: '/images/areas/3.jpg', images: [] as string[] }
]

const active = ref(0)
const open = ref<number | null>(null)
</script>
