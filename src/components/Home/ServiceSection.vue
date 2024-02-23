<template>
    <section class="flex flex-col items-center py-20 gap-10 relative">
        <div class="absolute left-0 top-0 w-full h-full bg-center bg-cover bg-no-repeat z-0" style="background-image: url('/images/services.png');"></div>
        <h2 class="text-4xl text-ibc_blue-500 z-10 text-center">Estos son nuestros <span class="font-bold">servicios</span> cada
            semana
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
            <ServiceCard v-for="service in services" :image="service.image" :schedule="service.schedule"
                :name="service.name" />
        </div>
    </section>
</template>

<script setup>
import ServiceCard from '@/components/Home/ServiceCard.vue';

const services = [
    {
        name: "Servicios Dominicales",
        image: null,
        schedule: "7:00 AM / 9:00 AM / 11:00 AM"
    },
    {
        name: "Lunes de Oración",
        image: null,
        schedule: "7:00 PM"
    },
    {
        name: "Devocionales",
        image: null,
        schedule: "Martes, jueves y sábados 5:00 AM"
    },
    {
        name: "Ayunos",
        image: null,
        schedule: "Miércoles y viernes 9:30 AM               "
    },
    {
        name: "Viernes de Fe para Milagros",
        image: null,
        schedule: "7:00 PM"
    },
    {
        name: "Sábados Misión Josué",
        image: null,
        schedule: "5:00 PM"
    },
]
</script>