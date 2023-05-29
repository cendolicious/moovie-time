<template>
  <OrganismsNavbar class="px-20 relative" />
  <div class="splitted-bg mx-auto my-0 px-20 py-20">
    <div class="relative flex justify-between mb-[43px]">
      <h1 class="font-bold text-3xl text-white">Movies</h1>
      <hr
        class="absolute w-[112px] top-[-12px] border-solid border-2 border-red-600"
      />
    </div>
    <div class="flex gap-10">
      <div
        class="rounded-md bg-eerie-black text-white font-medium h-fit flex flex-col flex-none"
      >
        <div class="mb-3 p-5 font-bold border-b-[1px] border-b-neutral-600">
          Sort Result By
        </div>
        <div class="p-5 pt-1 border-b-[1px] border-b-slate-500">
          <select
            class="bg-black text-white p-3 rounded-md"
            @change="onChangeSort($event)"
          >
            <option value="Popularity-Ascending" selected>
              Popularity Ascending
            </option>
            <option value="Popularity-Descending">Popularity Descending</option>
            <option value="ReleaseDate-Ascending">
              Release Date Ascending
            </option>
            <option value="ReleaseDate-Descending">
              Release Date Descending
            </option>
            <option value="Rating-Ascending">Rating Ascending</option>
            <option value="Rating-Descending">Rating Descending</option>
          </select>
        </div>
        <div class="p-5 font-bold border-b-[1px] border-b-neutral-600">
          Genres
        </div>
        <div class="p-5">
          <ul class="flex flex-col gap-3">
            <li
              class="flex justify-between capitalize"
              v-for="category in CATEGORIES"
            >
              {{ category }}
              <input
                type="checkbox"
                :id="category"
                :name="category"
                :value="category"
                @change="onChangeGenre($event)"
              />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-5 gap-7 pb-14">
          <div
            v-for="(
              { imdbID, Title, Year, Poster, Rating, Genre }, index
            ) in filteredMovies"
            :key="index"
            class="flex flex-col gap-3 relative"
            @mouseover="hoverCard(index)"
            @mouseleave="hoverCard(-1)"
          >
            <div
              class="absolute right-0 backdrop-opacity-10 backdrop-invert bg-white/30 font-semibold text-white px-3 py-1 z-10"
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
        <div class="flex justify-center">
          <AtomsButton
            theme="primary"
            label="Load More"
            @onClick="onClickLoadMore()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MovieItemInterface } from "~/interfaces";
import { CATEGORIES } from "~/constants";

useHead({
  title: 'Moovie Time - Movies',
});

const filters = ref<string[]>([]);
const page = ref<number>(1);
const fetchMovies = async () => {
  try {
    const {
      data: { value },
    } = await useFetch(
      `https://www.omdbapi.com/?s=marvel&page=${page.value}&apikey=6c468bca`
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
      return formattedMovies;
    }
  } catch (error) {
    console.error(error);
  }
};
const moviesBaseData = await fetchMovies();
const movies = ref<MovieItemInterface[]>(moviesBaseData);
const filteredMovies = ref<MovieItemInterface[]>(moviesBaseData);

const selectedCard = ref(-1);
const hoverCard = (selectedIndex: number) => {
  selectedCard.value = selectedIndex;
};
const onClickViewButton = async (id: string) => {
  await navigateTo(`/movies/${id}`);
};

const onChangeSort = (event: any) => {
  const [sortKey, sortType] = event.target.value.split("-");
  movies.value = sortArrayOfObject(movies.value, sortKey, sortType);
};

const onChangeGenre = (event: any) => {
  const filterValue = event.target.value;
  const isChecked = event.target.checked;
  if (isChecked) {
    filters.value.push(filterValue as string);
  } else {
    const index = filters.value.indexOf(filterValue);
    filters.value.splice(index, 1);
  }

  if (filters.value.length > 0) {
    filteredMovies.value = movies.value.filter(({ Genre }) =>
      filters.value.includes(Genre)
    );
  }
};

const onClickLoadMore = async () => {
  page.value = page.value + 1;
  const moviesAddonData = await fetchMovies();
  movies.value = movies.value.concat(moviesAddonData);
  filteredMovies.value = movies.value;
};
</script>
