<template>
    <section class="flex flex-col items-center gap-10 mb-28 w-full">
        <h2 class="text-3xl text-ibc_blue-500 font-bold">Próximos eventos</h2>
        <div class="flex flex-wrap justify-center gap-8 bg-ibc_gray-100 p-8 rounded-3xl w-fit">
                <article v-for="event in events" class="h-64 w-64 bg-white rounded-2xl shadow-ibc overflow-hidden">
                    <img loading="lazy" class="h-full w-full" :src="event.image" alt="">
                </article>
            </div>
    </section>
</template>

<script setup>
const events = [
    {
        image: "/images/events/event1.jpg"
    },
    {
        image: "/images/events/event2.webp"
    }
]
</script>