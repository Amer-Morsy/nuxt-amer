<template>
  <div>
    <input
      type="text"
      v-model="newNote"
      v-focus
      placeholder="add new note..."
    />
    <p>text:{{ newNote }}</p>
  </div>
</template>

<script setup>
const newNote = ref("");

const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<style scoped></style>
