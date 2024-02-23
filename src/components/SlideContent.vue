<template>
        <img v-if="type === 'image'" :src="content" alt="" :class="[classes]">
        <h2 v-else-if="type === 'title'" :class="[classes]">{{ content }}</h2>
        <p v-else-if="type === 'text'" :class="[classes]">{{ content }}</p>
        <div v-else-if="exist_items" :class="[classes]">
            <SlideContent v-for="item in items" :type="item.type" :content="item.content" :classes="item.classes"/>
        </div>
</template>

<script setup>
import SlideContent from '@/components/SlideContent.vue';
import { toRefs } from 'vue';
const props = defineProps(['type', 'content', 'classes', 'items'])
const { type, content, classes, items  } = toRefs(props)
const exist_items = items.value
</script>
