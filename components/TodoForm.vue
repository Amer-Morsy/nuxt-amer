<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" required v-model="form.title" />
    </div>

    <div>
      <label for="description">Description</label>
      <textarea id="description" required v-model="form.description" />
    </div>

    <!-- <div>
      <label for="isCompleted">Completed</label>
      <input type="checkbox" id="isCompleted" :checked="todo.isCompleted" />
    </div> -->

    <button type="submit" class="btn-success">
      {{ isEdit ? "Update" : "Create" }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { useTodoStore } from "~/store/todo";
type ToDo = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
};

const props = defineProps({
  todo: {
    type: Object as PropType<ToDo>,
    required: true,
  },
  isEdit: {
    type: Boolean,
    required: true,
  },
});

const form = ref({ ...props.todo });

watch(
  () => props.todo,
  (newTodo: ToDo) => {
    form.value = newTodo;
  }
);

const router = useRouter();

const tododStore = useTodoStore();

const onSubmit = () => {
  if (props.isEdit) {
    tododStore.updateTodo(form.value);
  } else {
    form.value.id = Date.now();
    tododStore.addTodo(form.value);
  }
  router.push(`/todos/${form.value.id}`);
};
</script>

<style>
form {
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

div {
  display: block;
  margin-bottom: #000;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
</style>
