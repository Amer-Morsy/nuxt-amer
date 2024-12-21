<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <button @click="copyUrl">copy url</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const { copyToClipboard } = useClipboardCopy();

const copyUrl = () => {
  copyToClipboard(window.location.href);
};
</script>

<style scoped></style>
