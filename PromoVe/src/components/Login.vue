<template>
  <div class="login-container">
    <form @submit.prevent="fazerLogin" class="login-form">
      <h2>Login</h2>
      <input v-model="email" type="email" placeholder="E-mail" required />
      <input v-model="senha" type="password" placeholder="Senha" required />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    async fazerLogin() {
      try {
        const response = await fetch(`http://localhost:3000/users?email=${this.email}&senha=${this.senha}`)
        const usuarios = await response.json()

        if (usuarios.length > 0) {
          alert('Login realizado com sucesso!')
          // localStorage.setItem("usuario", JSON.stringify(usuarios[0]))
        } else {
          alert('E-mail ou senha incorretos')
        }
      } catch (error) {
        alert('Erro ao fazer login: ' + error.message)
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #242424, #3f3d56);
}

.login-form {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.login-form input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.login-form button {
  padding: 0.75rem;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #574fcf;
}
</style>
