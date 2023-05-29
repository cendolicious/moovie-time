<template>
  <NuxtLoadingIndicator />
  <div>
    <NuxtPage />
    <OrganismsFooter class="px-20" />
  </div>
  <div>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </div>
</template>

<style>
html {
  font-family: "Montserrat", sans-serif;
  background-color: #292e35;
}

.splitted-bg {
  background: linear-gradient(180deg, #292e35 25%, #1e232a 0%);
}
</style>

<script setup lang="ts">
const route = useRoute();

useHead({
  title: `Moovie Time`,
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
