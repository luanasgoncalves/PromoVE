<template>
  <div class="promo-card" @click="goToLink">
    <img :src="promo.image" alt="Produto" />
    <h3>{{ promo.title }}</h3>
    <p class="price">
      <span class="new">R$ {{ promo.price }}</span>
      <span class="old">R$ {{ promo.oldPrice }}</span>
    </p>
    <p class="store">{{ promo.store }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  promo: Object
})

function goToLink() {
  window.open(props.promo.link, '_blank')
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
.price {
  display: flex;
  gap: 10px;
  align-items: center;
}
.price .old {
  text-decoration: line-through;
  color: gray;
}
.price .new {
  color: green;
  font-weight: bold;
}
.store {
  font-size: 0.9em;
  color: #777;
}
</style>