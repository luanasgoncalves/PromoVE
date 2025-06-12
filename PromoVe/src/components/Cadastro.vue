<template>
  <div class="cadastro-container">
    <form @submit.prevent="cadastrarUsuario" class="cadastro-form">
      <h2>Cadastre-se</h2>
      <input v-model="nome" type="text" placeholder="Nome" required />
      <input v-model="sobrenome" type="text" placeholder="Sobrenome" required />
      <input v-model="cpf" type="text" placeholder="Digite seu CPF (somente números)" pattern="\d{11}" maxlength="11" required />
      <input v-model="email" type="email" placeholder="E-mail" required />
      <input v-model="senha" type="password" placeholder="Senha" required />
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    senha: ''
    }
  },
  methods: {
    async cadastrarUsuario() {
      const novoUsuario = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        senha: this.senha,
        cpf: this.cpf
      }

      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(novoUsuario)
        })

        if (!response.ok) {
          throw new Error('Erro ao cadastrar usuário')
        }

        alert('Usuário cadastrado com sucesso!')
        this.nome = ''
        this.sobrenome = ''
        this.email = ''
        this.senha = ''
        this.cpf = ''

      } catch (error) {
        alert('Erro: ' + error.message)
      }
    }
  }
}
</script>

<style scoped>
.cadastro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #242424, #3f3d56);
}

.cadastro-form {
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

.cadastro-form h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.cadastro-form input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.cadastro-form button {
  padding: 0.75rem;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cadastro-form button:hover {
  background-color: #574fcf;
}
</style>
