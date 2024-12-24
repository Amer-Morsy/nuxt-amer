<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <nuxt-link :to="`/todos/${todo.id}`">{{ todo.title }}</nuxt-link>
      <span>{{ todo.isCompleted }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  todos: {
    type: Array as PropType<
      Array<{
        id: number;
        title: string;
        description: string;
        isCompleted: boolean;
        createdAt: string;
      }>
    >,
    
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f9f9f9f9;
}
</style>
