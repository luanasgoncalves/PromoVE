<template>
  <div class="promo-list">
    <PromoCard
      v-for="promo in filteredPromos"
      :key="promo.id"
      :promo="promo"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PromoCard from './PromoCard.vue'
import { promos } from '../data/mockPromos.js'

const props = defineProps({
  category: String
})

const filteredPromos = computed(() => {
  if (props.category === 'todos') return promos
  return promos.filter(p => p.category === props.category)
})
</script>

<style scoped>
.promo-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  color: gray
}
</style>
