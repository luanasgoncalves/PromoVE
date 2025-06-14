<template>
  <div class="promo-list">
  <PromoCard
  v-for="promo in exibidosPromos"
  :key="promo.id"
  :promo="promo"
  @clickLoja="onclickloja"
  @goLink="vaiProLink"
  @clickCategoria="onclickCategoria"/>


  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import PromoCard from './PromoCard.vue'
import {fetchPromos, buscaPromoPorLoja} from '../servicos'

const props = defineProps({
  categoria: String
})

async function carregarTodos() {
  const promos = await fetchPromos()
  allPromos.value = promos
  exibidosPromos.value = promos
}

const allPromos = ref([])
const exibidosPromos = ref([])

onMounted(async () => {
  const promos = await fetchPromos()
  allPromos.value = promos
  exibidosPromos.value = promos
  await carregarTodos()
})

watch(() => props.categoria, async (novaCategoria) => {
  if (!novaCategoria || novaCategoria === 'todos') {
    await carregarTodos()
  } else {
    exibidosPromos.value = allPromos.value.filter(p => p.categoria === novaCategoria)
  }
})


async function onclickloja(loja) {
  const resultados = await buscaPromoPorLoja(loja)
  exibidosPromos.value = resultados
}

function vaiProLink(link) {
  window.open(link, '_blank')
}

const emit = defineEmits(['updateCategoria'])

function onclickCategoria(categoria) {
  emit('updateCategoria', categoria)
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