<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Carousel from '../components/Carousel.vue';
import ServiceCard from '../components/Home/ServiceCard.vue';
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

<template>
   <Carousel/>
   <section class="flex flex-col items-center mb-20">
      <h2 class="text-4xl text-ibc_blue-500 my-16">Estos son nuestros <span class="font-bold">servicios</span> en la semana</h2>
      <div class="flex flex-wrap gap-4 justify-center">
         <ServiceCard v-for="service in services" :image="service.image" :schedule="service.schedule" :name="service.name"/>
      </div>
   </section>
   <section class="h-80 bg-ibc_kobalt-100 flex flex-col justify-center items-center text-center gap-7">
      <h3 class="text-3xl text-ibc_blue-500">Visítanos</h3>
      <div class="w-10 border-b-2 border-ibc_blue-500"></div>
      <h2 class="text-4xl text-ibc_kobalt-500 font-bold">Vive la experiencia de visitar tu casa IBC</h2>
      <p class="text-2xl text-ibc_kobalt-500"><font-awesome-icon icon="fa-solid fa-location-dot" />Calle 73 #40-47 - Barranquilla, Colombia</p>
   </section>
</template>
