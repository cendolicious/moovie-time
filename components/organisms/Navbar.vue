<template>
  <div class="flex gap-10 justify-between items-center py-4 text-xs z-50 bg-gunmetal w-full">
    <AtomsIconsLogo class="flex-none cursor-pointer" @click="onClickLogo" />
    <MoleculesSearchBar />
    <div class="flex-none">
      <ul
        class="flex flex-row uppercase font-normal gap-8 text-white items-center"
      >
        <li
          class="flex relative items-center gap-1"
          @click.stop="dropdown = !dropdown"
        >
          <AtomsIconsCategories /> Categories
          <div
            v-if="dropdown"
            class="absolute top-7 z-50 bg-white p-3 rounded-md text-black font-semibold"
          >
            <ul class="flex flex-col gap-2 w-max">
              <li v-for="category in CATEGORIES">
                <NuxtLink :to="`/movies?category=${category}`">{{
                  category
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
        <li><NuxtLink :to="`/movies`">Movies</NuxtLink></li>
        <li onclick="alert('Under Construction.')">TV Shows</li>
        <li onclick="alert('Under Construction.')">Login</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { CATEGORIES } from "@/constants";

const dropdown = ref(false);
onClickOutside(dropdown as any, () => {
  dropdown.value = false;
});

const onClickLogo = async () => {
  await navigateTo(`/`);
};
</script>
