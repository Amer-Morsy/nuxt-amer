
import { defineStore } from "pinia";
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

import SecureLS from "secure-ls";

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Array<{
      id: number,
      title: string,
      description: string,
      isCompleted: boolean,
      createdAt: string
    }>
  }),
  getters: {
    getItemById: (state) => (id: number) => state.todos.find((todo) => todo.id === id),

  },
  actions: {
    addTodo(todo: {
      id: number,
      title: string,
      description: string,
      isCompleted: boolean,
      createdAt: string
    }) {
      this.todos.push(todo);
    },
    updateTodo(updateTodo: {
      id: number,
      title: string,
      description: string,
      isCompleted: boolean,
      createdAt: string
    }) {
      const index = this.todos.findIndex((todo) => todo.id === updateTodo.id);

      if (index !== -1) {
        this.todos[index] = updateTodo;
      }
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    updateMarkAsCompleted(id: number) {
      const index = this.todos.findIndex((todo) => todo.id === id);

      if (index !== -1) {
        this.todos[index].isCompleted = !this.todos[index].isCompleted;
      }
    }

  },
  persist: {
    getItem: (key: any) => {
      return new SecureLS({
        encodingType: "aes",
        encryptionSecret: '@#34rdasdf',
      }).get(key);
    },
    setItem: (key: any, value: any) => {
      return new SecureLS({
        encodingType: "aes",
        encryptionSecret: '@#34rdasdf',
      }).set(key, value);
    },
  },

})