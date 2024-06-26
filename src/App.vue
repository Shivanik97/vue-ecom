<template>
  <body class="">
    <NavBar />
    <router-view />
  </body>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<style scoped>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
