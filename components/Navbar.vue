<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/todos">All Todos</nuxt-link></li>
      <li><nuxt-link to="/todos/add/new">Add Todo</nuxt-link></li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}
A:hover {
  color: #ddd;
  text-decoration: underline;
}
</style>
