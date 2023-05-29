<template>
  <OrganismsNavbar class="px-20 fixed opacity-80" />
  <div class="bg-white">
    <div class="h-[541px] relative bg-eerie-black">
      <img class="h-full w-full object-cover opacity-40" :src="movie?.Poster" />
      <div
        class="absolute bottom-0 text-white flex flex-col w-full justify-center"
      >
        <div class="h-[330px] w-[220px] absolute left-36 top-[-25px]">
          <img class="object-cover" :src="movie?.Poster" />
        </div>
        <div>
          <div class="flex flex-col gap-2 pl-96 mb-9">
            <span>{{ movie?.Year }}</span>
            <h1 class="text-4xl font-semibold">{{ movie?.Title }}</h1>
            <span>{{ movie?.Genre }}</span>
          </div>
          <div class="flex flex-row bg-gray-950 py-5 pl-96 gap-16">
            <div class="flex flex-row justify-center items-center gap-2">
              <AtomsIconsStar size="42" />
              <span class="text-4xl font-semibold">{{
                movie?.imdbRating
              }}</span>
              <div class="flex flex-col gap-1">
                <span class="font-extralight uppercase text-xs"
                  >User Score</span
                >
                <span class="text-sm uppercase">3621 VOTES</span>
              </div>
            </div>
            <div class="border-r-2 border-gray-700"></div>
            <div class="flex flex-row justify-center items-center gap-2">
              <div class="flex flex-col gap-1">
                <span class="font-extralight uppercase text-xs">Status</span>
                <span class="text-sm uppercase">RELEASED</span>
              </div>
            </div>
            <div class="border-r-2 border-gray-700"></div>
            <div class="flex flex-row justify-center items-center gap-2">
              <div class="flex flex-col gap-1">
                <span class="font-extralight uppercase text-xs">Language</span>
                <span class="text-sm uppercase">English</span>
              </div>
            </div>
            <div class="border-r-2 border-gray-700"></div>
            <div class="flex flex-row justify-center items-center gap-2">
              <div class="flex flex-col gap-1">
                <span class="font-extralight uppercase text-xs">Budget</span>
                <span class="text-sm uppercase">$200,000,000.00</span>
              </div>
            </div>
            <div class="border-r-2 border-gray-700"></div>
            <div class="flex flex-row justify-center items-center gap-2">
              <div class="flex flex-col gap-1">
                <span class="font-extralight uppercase text-xs"
                  >Production</span
                >
                <span class="text-sm uppercase">DC Entertainment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute pl-96 mt-4 text-white">
        <h2 class="text-red-600 mb-3 font-semibold">OVERVIEW</h2>
        <p class="text-black font-medium">{{ movie?.Plot }}</p>
      </div>
    </div>
    <div class="px-36 pt-36 pb-14">
      <h2 class="text-red-600 mb-3 font-semibold">REVIEWS</h2>
      <div class="grid grid-cols-2 gap-10">
        <div class="bg-slate-100 rounded-md p-5 shadow-lg">
          <div class="flex justify-between mb-5">
            <div class="flex gap-3 justify-center items-center">
              <div class="h-14 w-14">
                <img
                  class="h-full w-full object-cover rounded-full"
                  :src="movie?.Poster"
                />
              </div>
              <div class="flex flex-col">
                <span class="font-bold">SWITCH.</span>
                <span>December 18, 2020</span>
              </div>
            </div>
            <div class="flex bg-slate-200 p-2 rounded-md">
              <AtomsIconsStar size="42" />
              <span class="text-4xl font-semibold">{{
                movie?.imdbRating
              }}</span>
            </div>
          </div>
          <p class="italic">
            It isn't as easy as saying 'Wonder Woman 1984' is a good or bad
            movie. The pieces are there, and there are moments I adore, but it
            does come across as a bit of a mess, even though the action
            sequences are breathtaking. If you're a fan of the original film,
            you'll be more willing to take the ride, but for those more
            indifferent, it may be a bit of a blander sit. If you can and are
            planning to watch it, the theatrical experience is the way to go -
            there is nothing like seeing these stunning sets, fun action scenes
            and hearing Zimmer's jaw-dropping score like on the big screen. -
            Chris dos Santos.
          </p>
        </div>
        <div class="bg-slate-100 rounded-md p-5 shadow-lg">
          <div class="flex justify-between mb-5">
            <div class="flex gap-3 justify-center items-center">
              <div class="h-14 w-14">
                <img
                  class="h-full w-full object-cover rounded-full"
                  :src="movie?.Poster"
                />
              </div>
              <div class="flex flex-col">
                <span class="font-bold">msbreviews</span>
                <span>December 18, 2020</span>
              </div>
            </div>
            <div class="flex bg-slate-200 p-2 rounded-md">
              <AtomsIconsStar size="42" />
              <span class="text-4xl font-semibold">{{
                movie?.imdbRating
              }}</span>
            </div>
          </div>
          <p class="italic">
            If you enjoy reading my Spoiler-Free reviews, please follow my blog
            @ https://www.msbreviews.com The superhero genre has been growing
            exponentially during the last decade, so it's bizarre to go through
            an entire year with only Birds of Prey and The New Mutants instead
            of literally dozens of films from both Marvel and DC. Thankfully,
            Warner Bros. decided to release Wonder Woman 1984 before the year's
            end, but not without a catch. Most people will only have the
            possibility of watching one of the few blockbusters of 2020 through
            HBO Max, a streaming service only
          </p>
        </div>
      </div>
    </div>
    <div class="bg-dark-gunmetal px-36 py-14">
      <h2 class="mb-9 text-white font-semibold">RECOMMENDATION MOVIES</h2>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CATEGORIES } from "~/constants";
import { MovieItemInterface } from "~/interfaces";

const route = useRoute();
const movieId = route.params.id;

const movie = ref<MovieItemInterface>();
try {
  const {
    data: { value },
  } = await useFetch(`https://www.omdbapi.com/?i=${movieId}&apikey=6c468bca`);
  if (value !== null) {
    movie.value = value as MovieItemInterface;
  }
} catch (error) {
  console.error(error);
}

useHead({
  title: `Moovie Time - ${movie.value?.Title}`,
});

const movies = ref<MovieItemInterface[]>([]);
try {
  const {
    data: { value },
  } = await useFetch(
    `https://www.omdbapi.com/?s=marvel&page=1&apikey=6c468bca`
  );
  if (value !== null) {
    movies.value = (value as any)["Search"].slice(0, 5).map((item: any) => {
      return {
        ...item,
        Genre: CATEGORIES[getRandomNumber(CATEGORIES.length)],
        Rating: getRandomNumber(10),
        Popularity: getRandomNumber(10),
        ReleaseDate: getRandomNumber(10),
        Plot: "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
      };
    });
  }
} catch (error) {
  console.error(error);
}

const selectedCard = ref(-1);
const hoverCard = (selectedIndex: number) => {
  selectedCard.value = selectedIndex;
};
const onClickViewButton = async (id: string) => {
  await navigateTo(`/movies/${id}`);
};
</script>
