<template>
  <div>
    <h1 :class="idRed ? 'red' : 'green'">This is an Notes page</h1>
    <div class="flex">
      <!-- <NotesNoteCard />
      <NotesNoteCard />
      <NotesNoteCard /> -->
      <!-- <br />
      <button @click="boolean = !boolean">Add New {{ boolean }}</button>
      <br />
      <component :is="boolean ? newNote : NoteCard" />
      <br /> -->
      <!-- <NoteCard /> -->
      <br />
      <br />
      <NewNote />
    </div>
  </div>
</template>

<script setup>
// const newNote = resolveComponent("NewNote");
// const NoteCard = resolveComponent("NoteCard");
// const boolean = ref(false);
const idRed = ref(false);
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}
.flex {
  display: flex;
}
</style>
