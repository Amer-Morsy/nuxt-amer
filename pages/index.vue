<template>
  <div>
    <h1>Home Page</h1>

    <div class="box">
      <h3>counter= {{ counterStore.count }}</h3>
      <h4>double Counter= {{ counterStore.doubleCount }}</h4>
      <button @click="counterStore.increment">INCREMENT</button>
    </div>

    <!-- <button @click="show = !show">Toggle</button> -->
    <!-- <transition>
      <p v-if="show">Hello</p>
    </transition> -->
    <!-- <transition name="fade">
      <p v-if="show">Hello Nuxt</p>
    </transition> -->
    <!-- <TeleportComponent /> -->

    <!-- <ChildSlotComponent>
      <template v-slot:header="slotProps">
        <ChildComponent :message="slotProps.message" />
      </template>
      <template v-slot:default="slotProps">
        <h1>{{ slotProps.mainMessage }}</h1>
      </template>
      <template v-slot:footer>
        <p>Footer</p>
      </template>
    </ChildSlotComponent> -->

    <!-- <ChildComponent :message="dynamicValue" @update="dynamicValue = $event" /> -->
    <!-- <ChildComponent  /> -->

    <br />
    <!-- <Banner /> -->
    <br />
    <!-- <OptionsApi /> -->
    <br />
    <!-- <CompotionApi /> -->

    <!-- <h3>Recent Notes: {{ foo }}</h3> -->
    <!-- <p>{{ data }}</p> -->
    <!-- <p>{{ $hello("Nuxt") }}</p>
    <p>{{ $consoleIt(foo) }}</p> -->
    <!-- <NotesNoteCard /> -->
    <!-- <NoteCard /> -->
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "~/store/counter";

const counterStore = useCounterStore();

const show = ref(true);
const dynamicValue = ref<string>("Hello from the parent component");

interface Person {
  name: string;
  age: number;
  gender: string;
}
const person = ref<Person>({
  name: "John",
  age: 30,
  gender: "male",
});

const foo = useFoo();
// const { $hello, $consoleIt } = useNuxtApp();
// const { data } = await useFetch("/api/hello");
</script>

<style lang="css">
.box {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 20px;
}
/* .v-eneter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */
.fade-eneter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
