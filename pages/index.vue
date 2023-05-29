<template>
  <OrganismsNavbar class="px-20 relative" />
  <OrganismsCarousel :movies="recommendedMovies" />
  <div class="splitted-bg mx-auto my-0 px-20 p-20">
    <div class="relative flex justify-between mb-[43px]">
      <h1 class="font-bold text-xl text-white">Discover Movies</h1>
      <div class="flex gap-5">
        <AtomsButton
          @click="onClickSort('Popularity')"
          class="text-sm"
          :theme="sort === 'Popularity' ? 'primary' : 'secondary'"
          label="Popularity"
        />
        <AtomsButton
          @click="onClickSort('ReleaseDate')"
          class="text-sm"
          :theme="sort === 'ReleaseDate' ? 'primary' : 'secondary'"
          label="Release Date"
        />
      </div>
      <hr
        class="absolute w-[112px] top-[-12px] border-solid border-2 border-red-600"
      />
    </div>
    <div class="grid grid-cols-5 gap-7">
      <div
        v-for="(
          { imdbID, Title, Year, Poster, Rating, Genre }, index
        ) in movies"
        :key="index"
        class="flex flex-col gap-3 relative"
        @mouseover="hoverCard(index)"
        @mouseleave="hoverCard(-1)"
      >
        <div
          class="absolute right-0 backdrop-opacity-5 backdrop-invert bg-red-700/80 font-semibold text-white px-3 py-1 z-10"
        >
          {{ Rating }}
        </div>
        <div class="relative mb-1 min-h-[364px] max-h-[364px]">
          <img class="h-full w-full object-cover" :src="Poster" />
          <div
            v-if="selectedCard === index"
            class="absolute top-0 w-full h-full bg-eerie-black text-white flex flex-col gap-14 items-center justify-center z-20"
          >
            <div class="flex items-center gap-1">
              <AtomsIconsStar size="32" />
              <span class="font-bold text-2xl">{{ Rating }}</span>
            </div>
            <div class="capitalize">{{ Genre }}</div>
            <AtomsButton
              class="text-sm"
              theme="primary"
              label="VIEW"
              @onClick="onClickViewButton(imdbID)"
            />
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-md font-semibold text-white">{{ Title }}</span>
          <span class="text-sm font-extralight text-white">{{ Year }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MovieItemInterface } from "~/interfaces";
import { CATEGORIES } from "~/constants";

const sort = ref<keyof MovieItemInterface>();
const movies = ref<MovieItemInterface[]>([]);
const recommendedMovies = ref<MovieItemInterface[]>([]);
try {
  const {
    data: { value },
  } = await useFetch(
    `https://www.omdbapi.com/?s=marvel&page=1&apikey=6c468bca`
  );
  if (value !== null) {
    const formattedMovies = (value as any)["Search"].map((item: any) => {
      return {
        ...item,
        Genre: CATEGORIES[getRandomNumber(CATEGORIES.length)],
        Rating: getRandomNumber(10),
        Popularity: getRandomNumber(10),
        ReleaseDate: getRandomNumber(10),
        Plot: "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
      };
    });
    movies.value = formattedMovies;
    recommendedMovies.value = formattedMovies.slice(0, 3);
  }
} catch (error) {
  console.error(error);
}

const onClickSort = (type: keyof MovieItemInterface) => {
  sort.value = type;
  movies.value = sortArrayOfObject(movies.value, type, 'Ascending');
};

const selectedCard = ref(-1);
const hoverCard = (selectedIndex: number) => {
  selectedCard.value = selectedIndex;
};
const onClickViewButton = async (id: string) => {
  await navigateTo(`/movies/${id}`);
};
</script>
