<template>
    <carousel :items-to-show="1" :autoplay="5000" :wrap-around="true" class="max-h-[500px] relative">
        <slide v-for="(slide, index) in slides " :key="index" class="h-[500px]">
            <div class="absolute left-0 top-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
                :style="{ 'background-image': `url(${slide.image})` }"></div>
            <div class="absolute left-0 top-0 w-full h-full" :class="[slide.container_class]" v-if="slide.items">
                <SlideContent v-for="item in slide.items" :type="item.type" :content="item.content" :classes="item.classes"
                    :items="item.items" />
            </div>
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
import SlideContent from '@/components/SlideContent.vue';
const slides = [
    {
        image: "/images/slides/slide1.webp",
        container_class: "flex justify-center items-center h-full",
        items: [
            {
                type: "content",
                content: "",
                items: [
                    {
                        type: "image",
                        content: "/images/slides/slide1-text1.webp",
                        items: [],
                        classes: "lg:max-h-[500px]"
                    },
                    {
                        type: "image",
                        content: "/images/slides/slide1-text2.webp",
                        items: [],
                        classes: "absolute w-96 lg:w-[450px] left-[calc(50%-175px)] top-[calc(50%+150px)]"
                    }
                ],
                classes: "relative"
            }
        ]
    },
    {
        image: "/images/slides/slide2.webp",
        container_class: "flex justify-center items-center",
        items: [
            {
                type: "image",
                content: "/images/slides/slide2-1.webp",
                items: [],
                classes: "h-full"
            }

        ]
    },
    {
        image: "/images/slides/slide3.webp",
        container_class: "flex flex-col justify-center items-center gap-4 md:gap-10",
        items: [
            {
                type: "content",
                content: "",
                items: [
                    {
                        type: "image",
                        content: "/images/slides/slide3-1.webp",
                        items: [],
                        classes: "h-40 sm:h-54 md:h-64"
                    },
                    {
                        type: "image",
                        content: "/images/slides/slide3-2.webp",
                        items: [],
                        classes: "h-40 sm:h-54 md:h-64"
                    }
                ],
                classes: "flex flex-row flex-wrap justify-center gap-10"
            },
            {
                type: "title",
                content: "@soymisionjosue",
                items: [],
                classes: "text-3xl text-white font-bold"
            },
        ]
    }
]
</script>

<style>
.carousel__pagination-button::after {
    height: 8px;
    width: 8px;
    border: 1px solid rgba(94, 94, 94, 1);
    border-radius: 50%;
    background-color: transparent;
}

.carousel__pagination-button--active::after,
.carousel__pagination-button:hover::after {
    background-color: rgba(94, 94, 94, 1);
}
</style>
