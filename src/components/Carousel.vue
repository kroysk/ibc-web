<template>
    <carousel :items-to-show="1" :autoplay="5000" :wrap-around="true" class="max-h-[500px] relative">
        <slide v-for="(image, index) in images " :key="index" class="max-h-[500px]">
            <img :src="image" alt="" class="h-full">
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
    "/images/slides/slide1.webp",
    "/images/slides/slide2.webp",
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