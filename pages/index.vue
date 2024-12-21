<template>
  <div>
    <Banner />
    <h3>Recent Notes: {{ foo }}</h3>
    <p>{{ data }}</p>
    <!-- <p>{{ $hello("Nuxt") }}</p>
    <p>{{ $consoleIt(foo) }}</p> -->
    <!-- <NotesNoteCard /> -->
    <NoteCard />
  </div>
</template>

<script setup>
const foo = useFoo();
// const { $hello, $consoleIt } = useNuxtApp();
const { data } = await useFetch("/api/hello");
</script>

<style scoped></style>
