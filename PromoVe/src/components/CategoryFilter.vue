<template>
  <div class="filters">
    <button
      v-for="cat in categorias"
      :key="cat"
      :class="{ active: cat === categoriaSelecionada }"
      @click="$emit('update', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  categoriaSelecionada: String
})

const categorias = ['todos', 'roupas', 'eletrodomésticos', 'eletrônicos']
</script>

<style scoped>
.filters {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centraliza horizontalmente */
  gap: 10px;
  padding-bottom: 10px;
}

button {
  padding: 10px 14px;
  border: none;
  background: #007BFF;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
}

button.active {
  background-color: rgb(57, 57, 245);
  color: white;
}

@media (max-width: 600px) {
  .filters {
    justify-content: center; /* Mantém centralizado no celular */
  }

  button {
    font-size: 13px;
    padding: 10px 12px;
  }
}

</style>
