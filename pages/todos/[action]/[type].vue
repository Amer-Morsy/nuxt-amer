<template>
  <TodoForm :todo="todo" :isEdit="isEdit" />
</template>

<script setup lang="ts">
import { useTodoStore } from "~/store/todo";

const route = useRoute();

const tododStore = useTodoStore();

const isEdit = computed(() => route.params.action === "edit");

const todo = ref({
  id: 0,
  title: "",
  description: "",
  isCompleted: false,
  createdAt: new Date().toDateString(),
});

// todo = isEdit.value
//   ? tododStore.getItemById(Number(route.params.type))
//   : todo;
onMounted(() => {
  if (isEdit.value) {
    // todo.value = { ...tododStore.getItemById(Number(route.params.type)) };
    todo.value = tododStore.getItemById(Number(route.params.type));
  }
});
</script>

<style scoped></style>
