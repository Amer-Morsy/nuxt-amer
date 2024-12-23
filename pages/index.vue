<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <!-- <transition>
      <p v-if="show">Hello</p>
    </transition> -->
    <transition name="fade">
      <p v-if="show">Hello Nuxt</p>
    </transition>
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

<script setup>
const show = ref(true);
const dynamicValue = ref("Hello from the parent component");

const foo = useFoo();
// const { $hello, $consoleIt } = useNuxtApp();
const { data } = await useFetch("/api/hello");
</script>

<style lang="css">
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
