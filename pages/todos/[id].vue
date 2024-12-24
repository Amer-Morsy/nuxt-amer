<template>
  <div>
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.description }}</p>
    <hr class="my-5" />
    <p>Completed: {{ todo.isCompleted ? "yes" : "no" }}</p>
    <p>Created At: {{ todo.createdAt }}</p>
    <nuxt-link :to="`/todos/edit/${todo.id}`" class="btn">Edit</nuxt-link>
    <button
      :class="todo.isCompleted ? 'btn-danger' : 'btn-success'"
      @click="tododStore.updateMarkAsCompleted(todo.id)"
    >
      {{ todo.isCompleted ? "Unmark as completed" : "Mark as completed" }}
    </button>

    <!-- {{ getItemById(1) }} -->
  </div>
</template>

<script setup>
import { useTodoStore } from "~/store/todo";

const route = useRoute();

const tododStore = useTodoStore();
// const { todos, getItemById } = storeToRefs(tododStore);

// const todo = computed(() =>
//   todos.value.find((item) => item.id === Number(route.params.id))
// );

const todo = computed(() => tododStore.getItemById(Number(route.params.id)));
</script>

<style>
.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}
.btn:hover {
  background-color: #0056b3;
  color: #ffff;
}
.btn-success {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}
.btn-success:hover {
  background-color: #218838;
}
.btn-danger {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
  font-size: 16px;
}
.btn-danger:hover {
  background-color: #c62828;
}
</style>
