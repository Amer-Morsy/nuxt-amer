<template>
  <div>
    <h1>Child Component</h1>
    <p>Message:{{ message }}</p>
    <!-- <button @click="$emit('update', 'new message')">click me</button> -->
    <button @click="sendUpdate()">click me</button>
  </div>
</template>
<script setup>
const props = defineProps({
  message: {
    type: String,
    // required: true,
    default: "Default Message",
  },
});
const emit = defineEmits(["update"]);
const sendUpdate = () => {
  emit("update", "new message updated");
};
</script>
