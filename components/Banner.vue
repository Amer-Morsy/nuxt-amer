<template>
  <div>
    <h1 v-debug>Welcome to Our Notes App!</h1>
    <ul>
      <li v-for="(value, key) in user" :key="key">
        {{ key }}:{{ value }} <br />
      </li>
    </ul>

    <h2>Names:</h2>
    <ul>
      <li v-for="(name, index) in names" :key="index">
        {{ name }}
      </li>
    </ul>
    <button @click="names.push('Amer Morsy')">Add Name</button>

    <h2>full name :{{ fullName }}</h2>
    <button @click="fullName = 'Amer Morsy'">change name</button>
    <p>Count:{{ count }}</p>
    <button @click="increament">increament</button>
    <button
      :disabled="count <= 0"
      @click="
        () => {
          count--;
        }
      "
    >
      decreament
    </button>
    <button @click="() => (count = 0)">reset</button>
    <br />
    <button @click="geet('good bay Mam')">Greet</button>
  </div>
</template>

<script setup lang="ts">
// onBeforeMount(() => {
//   console.log("onBeforeMount");
// });

// onMounted(() => {
//   console.log("onMounted");
// });

// onBeforeUpdate(() => {
//   console.log("onBeforeUpdate");
// });

// onUpdated(() => {
//   console.log("onUpdated");
// });

// onBeforeUnmount(() => {
//   alert("onBeforeUnmount");
// });

// onUnmounted(() => {
//   alert("onUnmounted");
// });

const user = reactive({
  name: "Amer Morsy",
  age: 35,
  email: "ZtV2d@example.com",
});
const count = ref(0);
const increament = () => count.value++;
const geet = (msg: string) => alert(msg);
const names = ref(["John", "Doe"]);
const firstName = ref("John");
const lastName = ref("Doe");
// const fullName = computed(() => `${firstName.value} ${lastName.value}`);
const fullName = computed({
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  set(newName: string) {
    const names = newName.split(" ");
    firstName.value = names[0];
    lastName.value = names[1];
  },
});

// watch(count, (newValue, oldValue) => {
//   console.log("count changed", newValue, oldValue);
// });

watch(
  () => count.value,
  (newValue, oldValue) => {
    console.log("count changed", newValue, oldValue);
  }
);

watch(
  () => names.value,
  (newValue, oldValue) => {
    console.log("names changed", newValue, oldValue, [...newValue].pop());
  },
  {
    deep: true,
  }
);
</script>

<style scoped></style>
