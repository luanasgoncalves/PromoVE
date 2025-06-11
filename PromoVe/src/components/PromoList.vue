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
import { ref, onMounted, computed, watch } from 'vue'
import PromoCard from './PromoCard.vue'
import axios from 'axios';

const props = defineProps({
  categoria: String
})

const allPromos = ref([])

const fetchPromos = async () => {
  try {
    const res = await axios.get('http://localhost:3000/promos'); 
    allPromos.value = res.data; 
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
  }
}

onMounted(fetchPromos)

const filteredPromos = computed(() => {
  if (!props.categoria || props.categoria === 'todos') return allPromos.value
  return allPromos.value.filter(p => p.categoria === props.categoria)
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