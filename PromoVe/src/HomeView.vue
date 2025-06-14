<template>
  <div class="app">
    <h1>PromoVe</h1>
    <CategoryFilter :categoriaSelecionada="categoriaSelecionada" @update="setCategory" />
    <PromoList :categoria="categoriaSelecionada" @updateCategoria="setCategory" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryFilter from './components/CategoryFilter.vue'
import PromoList from './components/PromoList.vue'
import PromoCard from './components/PromoCard.vue'

const categoriaSelecionada = ref('todos')

function setCategory(newCategory) {
  categoriaSelecionada.value = newCategory
}
</script>

<style scoped>
.app {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}
</style>