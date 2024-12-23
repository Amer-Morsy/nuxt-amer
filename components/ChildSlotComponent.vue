<template>
  <div>
    <!-- <h1>Child Slot Component</h1>
    <slot>
      <h2>Default Slot</h2>
    </slot> -->
    <!-- <slot name="named" /> -->
    <header>
      <slot name="header" :message="message">
        <p>Default Header</p>
      </slot>
    </header>

    <main>
      <slot :mainMessage="mainMessage">
        <h2>Default Slot</h2>
      </slot>
    </main>

    <footer>
      <slot name="footer">
        <p>Default footer</p>
      </slot>
    </footer>
  </div>
</template>

<script setup>
const message = "Hello from Child Slot Component";
const mainMessage = "Main Hello from Child Slot Component";
</script>

<style scoped></style>
