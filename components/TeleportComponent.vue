<template>
  <div>
    <button v-if="!showModal" @click="showModal = true">Show Modal</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <h1>Modal</h1>
        <button @click="showModal = false">Close Modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
const showModal = ref(false);
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px gainsboro;
}
</style>
