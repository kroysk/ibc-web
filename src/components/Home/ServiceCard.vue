<template>
    <article class="w-44 flex flex-col items-center">
        <img :src="image" alt="" class="" v-if="image">
        <div v-else class="aspect-square h-44 w-44 bg-ibc_gray-100 rounded-xl"></div>
        <h3 class="text-lg text-ibc_blue-500 text-center">{{name}}</h3>
        <p class="text-xs text-ibc_kobalt-500 text-center">{{ schedule }}</p>
    </article>
</template>

<script setup>
import { ref, toRefs } from 'vue';

const props = defineProps(['image', 'name', 'schedule'])
const {image, name, schedule} = toRefs(props)

</script>