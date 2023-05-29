<template>
  <input :placeholder="placeholder" type="text" />
</template>

<script setup>
  const { placeholder } = defineProps(["placeholder"]);
</script>
