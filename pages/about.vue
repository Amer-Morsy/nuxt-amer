<template>
  <div>
    <h1>about</h1>
    <button @click="enableLayout">enable Layout</button>
  </div>
</template>

<script setup>

definePageMeta({
  layout: false,
  // middleware: [
  //   function (to, from) {
  //     console.log("about middleware", { to, from });
  //   },
  //   "named",
  // ],
});

const enableLayout = () => {
  setPageLayout("custom");
};
</script>

<style scoped></style>
