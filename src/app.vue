<!-- src/App.vue -->
<template>
    <div>
      <component />
    </div>
  </template>
  
  <script>
  import Component from './components/component.vue'; // ajuste o caminho conforme necessário
  
  export default {
    components: {
      Component,
    },
  };
  </script>