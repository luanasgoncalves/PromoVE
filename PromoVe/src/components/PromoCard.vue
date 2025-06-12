<template>
  <div class="promo-card">
    <img :src="promo.imagem" alt="Produto" @click="goToLink"/>
    <h3>{{ promo.nomeProduto }}</h3>
    <p class="preco">
      <span class="new">R$ {{ promo.preco.toFixed(2) }}</span>
      <span class="old">R$ {{ promo.precoAntigo.toFixed(2) }}</span>
    </p>
    <p class="loja" @click="clickLoja(promo.loja)">{{ promo.loja }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  promo: Object
})
const emit = defineEmits(['clickLoja', 'goLink'])
function goToLink() {
  emit("goLink", props.promo.link)
}

function clickLoja(loja) {
  emit("clickLoja", loja);
}
</script>

<style scoped>
.promo-card {
  width: 250px; 
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
  flex-direction: column;
  justify-content: space-between;
}
.promo-card:hover {
  transform: scale(1.02);
}

img {
  width: 100%;
  height: 300px; 
  object-fit: cover; 
  border-radius: 8px;
  margin-bottom: 10px;
}
.preco {
  display: flex;
  gap: 10px;
  align-items: center;
}
.precoAntigo .old {
  text-decoration: line-through;
  color: gray;
}
.preco .new {
  color: green;
  font-weight: bold;
}
.loja {
  font-size: 0.9em;
  color: #777;
}
</style>