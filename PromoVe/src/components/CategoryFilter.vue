<template>
  <div class="filters">
    <button
      v-for="cat in categories"
      :key="cat"
      :class="{ active: cat === selectedCategory }"
      @click="$emit('update', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  selectedCategory: String
})

const categories = ['todos', 'roupas', 'eletrodomésticos', 'eletrônicos']
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
}
button {
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  background:#007BFF;
  cursor: pointer;
}
button.active {
  background-color: rgb(57, 57, 245);
  color: white;
}
</style>
