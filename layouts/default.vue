<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <br />
    <nuxt-link to="/about">About</nuxt-link>
    <br />
    <nuxt-link to="/notes">Notes</nuxt-link>
    <br />
    <nuxt-link :to="`/notes/${randomNumber()}`">Notes by ID</nuxt-link>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
const randomNumber = () => Math.floor(Math.random() * 100);
</script>

<style scoped></style>
