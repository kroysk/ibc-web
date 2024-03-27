<template>
    <article class="col-span-1 bg-white shadow-ibc p-4 rounded-xl flex flex-col justify-center items-start gap-4">
        <h3 class="text-lg text-ibc_blue-500 text-start ">{{name}}</h3>
        <p class="text-xs text-ibc_lila-500 text-start bg-ibc_lila-100 rounded-sm px-2 w-fit">{{ schedule }}</p>
    </article>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps(['image', 'name', 'schedule'])
const {image, name, schedule} = toRefs(props)

</script>