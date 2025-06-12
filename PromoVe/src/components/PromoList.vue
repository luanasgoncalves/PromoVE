<template>
  <div class="promo-list">
    <PromoCard
      v-for="promo in filteredPromos"
      :key="promo.id"
      :promo="promo"
      @clickLoja="onclickloja"
      @goLink="vaiProLink"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import PromoCard from './PromoCard.vue'
import {fetchPromos, buscaPromoPorLoja} from '../servicos'

const props = defineProps({
  categoria: String
})

const allPromos = ref([])

onMounted(async ()=>{
  allPromos.value=await fetchPromos()})

const filteredPromos = computed(() => {
  if (!props.categoria || props.categoria === 'todos') return allPromos.value
  return allPromos.value.filter(p => p.categoria === props.categoria)
})


async function onclickloja(loja) {
  allPromos.value=await buscaPromoPorLoja(loja)
}

function vaiProLink(link) {
  window.open(link, '_blank')
}
</script>

<style scoped>
.promo-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  color: gray
}
</style>