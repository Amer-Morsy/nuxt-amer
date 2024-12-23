<template>
  <div>
    <h1>{{ title }}</h1>
    <h4>function:{{ hello() }}</h4>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Options Api",
  }),
  methods: {
    hello() {
      return "hello from Options Api";
    },
  },
  mounted() {
    setTimeout(() => {
      this.title = "Options Api Updated";
    }, 1000);
  }
};
</script>

<style scoped></style>
