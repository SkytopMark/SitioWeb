<template>
  <footer class="bg-navy/50 text-white py-8 border-t border-white/10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="font-display font-bold text-lg mb-4">Skytop Roofing</h3>
          <p class="text-light-blue">Professional roofing services across Southwest Florida.</p>
        </div>

        <div>
          <h4 class="font-semibold mb-4">{{ $t('footer.contact') }}</h4>
          <a href="tel:+12393659939" class="text-light-blue hover:text-orange transition block">
            {{ $t('footer.phone') }}
          </a>
        </div>

        <div>
          <h4 class="font-semibold mb-4">{{ $t('nav.services') }}</h4>
          <ul class="space-y-2 text-light-blue">
            <li><a href="#" class="hover:text-orange transition">Metal</a></li>
            <li><a href="#" class="hover:text-orange transition">Shingle</a></li>
            <li><a href="#" class="hover:text-orange transition">Tile</a></li>
            <li><a href="#" class="hover:text-orange transition">Flat</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 text-center text-light-blue text-sm">
        <p>&copy; 2026 Skytop Roofing. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
