<!-- src/components/ExampleComponent.vue -->
<template>
  <div>
    <h1>Lista de Usuários</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axiosInstance from '../utils/axiosInstance'; // Ajuste o caminho se necessário

export default {
  data() {
    return {
      users: [], // Para armazenar usuários
    };
  },
  mounted() {
    this.fetchUsers(); // Chama a função ao montar o componente
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axiosInstance.get('/users'); // Ajuste o endpoint se necessário
        this.users = response.data; // Atualiza a lista de usuários
      } catch (error) {
        console.error('Erro ao buscar usuários:', error); // Manipulação de erro
      }
    },
  },
};
</script>