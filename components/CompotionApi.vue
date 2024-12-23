<template>
  <div>
    <h1>{{ title }}</h1>
    <h4>function:{{ hello() }}</h4>
  </div>
</template>

<script setup>
const title = ref("Compotion Api");
const hello = () => `hello from Compotion Api`;
onMounted(() => {
  setTimeout(() => {
    title.value = "Compotion Api Updated";
  }, 1000);
});
</script>

<style scoped></style>
