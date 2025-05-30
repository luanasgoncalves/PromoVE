<template>
  <div class="app">
    <h1>PromoVe</h1>
    <CategoryFilter :selectedCategory="selectedCategory" @update="setCategory" />
    <PromoList :category="selectedCategory" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryFilter from './components/CategoryFilter.vue'
import PromoList from './components/PromoList.vue'

const selectedCategory = ref('todos')

function setCategory(newCategory) {
  selectedCategory.value = newCategory
}
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  background: #0000;
}
.app {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}
</style>
