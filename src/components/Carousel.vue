<template>
    <carousel :items-to-show="1" class="max-h-[500px] relative">
        <slide v-for="(image, index) in images " :key="index" class="max-h-[500px]">
            <img :src="image" alt="" class="w-full object-cover">
        </slide>

        <template #addons>
            <div class="absolute w-full bottom-3">
                <pagination />
            </div>
        </template>
    </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
const images = [
    "https://picsum.photos/id/221/1024/800",
    "https://picsum.photos/id/240/1024/800",
    "https://picsum.photos/id/239/1024/800"
]
</script>

<style>
.carousel__pagination-button::after{
    height: 8px;
    width: 8px;
    border: 1px solid rgba(94, 94, 94, 1);
    border-radius: 50%;
    background-color: transparent;
}
.carousel__pagination-button--active::after,  .carousel__pagination-button:hover::after{
    background-color: rgba(94, 94, 94, 1);
}

</style>