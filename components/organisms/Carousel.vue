<template>
  <div class="h-[531px] bg-dark-gunmetal">
    <swiper
      :slidesPerView="'auto'"
      :pagination="{
        clickable: true,
      }"
      :centeredSlides="true"
      :spaceBetween="350"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(
          { Title, Poster, Rating, Year, Plot, Genre, imdbID }, index
        ) in movies"
        :key="index"
      >
        <NuxtLink :to="`/movies/${imdbID}`">
          <div class="flex relative">
            <img class="absolute left-[-245px] top-[-20px] object-cover" :src="Poster" />
            <div
              class="text-white bg-eerie-black text-left p-7 max-w-xs flex flex-col gap-1 h-[324px]"
            >
              <div class="flex items-center gap-1">
                <AtomsIconsStar />
                <span class="font-bold">{{ Rating }}</span>
              </div>
              <h2 class="text-3xl">{{ Title }}</h2>
              <span class="flex items-center gap-2 text-md capitalize"
                >{{ Year }}
                <hr class="border-2 rounded-lg" />
                {{ Genre }}</span
              >
              <p class="text-xs text-justify font-extralight">
                {{ Plot }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
  padding: 77px 0 100px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  width: fit-content;
}

.swiper-slide img {
  display: block;
  height: 364px;
}

.swiper-wrapper {
  height: 80%;
}

span.swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 1;
  height: 8px;
  width: 8px;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 50px;
  height: 8px;
  border-radius: 8px;
  background-color: #e74c3c;
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default {
  props: ['movies'],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
