<template>
  <div>
    <h1>All Todos:</h1>
    <TodoList :todos="todos" />
  </div>
</template>

<script setup>
import { useTodoStore } from "~/store/todo";

const tododStore = useTodoStore();
const { todos } = storeToRefs(tododStore);
</script>

<style scoped></style>
