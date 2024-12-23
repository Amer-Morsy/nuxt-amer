// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

import { defineStore } from "pinia";
import SecureLS from "secure-ls";

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  },
  persist: {
    // storage: piniaPluginPersistedstate.localStorage(),
    // key: 'my-counter-store'
    // getItem: (key: any) => {
    //   return new SecureLS({
    //     isCompression: false,
    //     encodingType: "aes",
    //   }).get(key);
    // },
    // setItem: (key: any, value: any) => {
    //   return new SecureLS({
    //     isCompression: false,
    //     encodingType: "aes",
    //   }).set(key, value);
    // },
    // getItem: (key: any) => {
    //   return new SecureLS({
    //     encodingType: "aes",
    //     encryptionSecret: '@#34rdasdf', ,
    //   }).get(key);
    // },
    // setItem: (key: any, value: any) => {
    //   return new SecureLS({
    //     encodingType: "aes",
    //     encryptionSecret: '@#34rdasdf',
    //   }).set(key, value);
    // },
  },
})