<template>
  <div id="nav">
    <router-link to="/login">Login</router-link>
    <router-link to="/">PromoVe</router-link>
    <router-link to="/cadastro">Cadastro</router-link>
    <router-link></router-link>
  </div>
</template>

<script setup>
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(135deg, #242424, #3f3d56);
}

#nav {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #f8f8f8;
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #007BFF;
}

</style>