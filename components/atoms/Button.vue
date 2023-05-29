<template>
  <button
    :class="{
      [`theme-${theme}`]: theme,
      'text-white py-1 px-3 rounded-full opacity-100': true
    }"
    @click="onClick()"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.theme-primary {
    background-color: #FF0000;
    color: white;
}
.theme-secondary {
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
}
</style>

<script>
export default {
  props: ["label", "theme"],
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
