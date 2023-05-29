<template>
  <div class="relative w-full">
    <div
      class="flex items-center justify-between gap-4 bg-gray-800 rounded-md px-2 py-1"
    >
      <div class="flex gap-2 w-full">
        <span><AtomsIconsMovieFinder /></span>
        <AtomsInputText
          class="bg-transparent outline-none font-medium text-white w-full"
          placeholder="Find movie..."
          @input="(event) => onChangeSearch(event.target.value)"
        />
      </div>
      <span><AtomsIconsSearch /></span>
    </div>
    <div
      v-if="filtered && filtered.length > 0"
      class="absolute bg-gray-800 w-full text-white p-3 rounded-md rounded-t-none z-50"
    >
      <ul>
        <li
          v-for="{ Title, imdbID } in filtered"
          class="cursor-pointer hover:bg-gray-500 p-1 rounded-md"
          @click="onClickSuggestion(imdbID)"
        >
          {{ Title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const filtered = ref<any[]>([]);
const onChangeSearch = async (keyword: string) => {
  if (!keyword.length) {
    filtered.value = [];
  } else if (keyword.length > 2) {
    try {
      const { data: { value } } = await useFetch(`https://www.omdbapi.com/?s=${keyword}&apikey=6c468bca`);
      filtered.value = (value as any)['Search'];
    } catch (error) {
      console.error(error);
    }
  }
};

onClickOutside(filtered as any, () => {
  filtered.value = [];
});

const onClickSuggestion = async (id: number) => {
  await navigateTo(`/movies/${id}`);
};
</script>
