<template>
  <div class="app">
    <h1>PromoVe</h1>
    <CategoryFilter :categoriaSelecionada="categoriaSelecionada" @update="setCategory" />
    <PromoList :categoria="categoriaSelecionada" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryFilter from './components/CategoryFilter.vue'
import PromoList from './components/PromoList.vue'

const categoriaSelecionada = ref('todos')

function setCategory(newCategory) {
  categoriaSelecionada.value = newCategory
}
</script>

<style>
body {
  font-family: sans-serif;
  margin: 50;
  background: #0000;
}
.app {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

</style>
