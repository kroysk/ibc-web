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
   <Carousel />
   <section class="flex flex-col items-center mb-20">
      <h2 class="text-4xl text-ibc_blue-500 my-16">Estos son nuestros <span class="font-bold">servicios</span> en la semana
      </h2>
      <div class="flex flex-wrap gap-4 justify-center">
         <ServiceCard v-for="service in services" :image="service.image" :schedule="service.schedule"
            :name="service.name" />
      </div>
   </section>
   <section class="h-80 bg-ibc_kobalt-100 flex flex-col justify-center items-center text-center gap-5">
      <h3 class="text-3xl text-ibc_blue-500">Visítanos</h3>
      <div class="w-10 border-b-2 border-ibc_blue-500"></div>
      <h2 class="text-4xl text-ibc_kobalt-500 font-bold">Vive la experiencia de visitar tu casa IBC</h2>
      <p class="text-2xl text-ibc_kobalt-500"><font-awesome-icon icon="fa-solid fa-location-dot" />Calle 73 #40-47 -
         Barranquilla, Colombia</p>
   </section>
   <section class="h-80 flex flex-col items-center justify-around">
      <h2 class="text-3xl text-ibc_blue-500"> Escuelas de formación <span class="font-bold">ministerial</span></h2>
      <div class="flex">
         <article class="flex gap-4 items-center">
            <div class="w-20 h-20 rounded-full bg-ibc_yellow-500"></div>
            <div class="max-w-96">
               <h3 class="text-3xl text-ibc_blue-500 font-bold">ELiD</h3>
               <p class="text-sm">Centro de Entrenamiento de Liderazgo de Discípulos, formamos al nuevo convertido en la
                  doctrina de Cristo, entregándole herramientas para cumplir con la gran comisión, ganar más almas.</p>
            </div>
         </article>
         <article class="flex gap-4 items-center">
            <div class="w-20 h-20 rounded-full bg-ibc_red-500"></div>
            <div class="max-w-96">
               <h3 class="text-3xl text-ibc_blue-500 font-bold">CELM</h3>
               <p class="text-sm">Centro de entrenamiento de liderazgo ministerial “La Cosecha”...</p>
            </div>
         </article>
      </div>
   </section>
   <section class="flex flex-col items-center gap-10 mb-28">
      <h2 class="text-3xl text-ibc_blue-500 font-bold">Próximos eventos</h2>
      <div class="flex gap-8 bg-ibc_gray-100 p-8 rounded-3xl">
         <article class="h-64 w-64 bg-white rounded-2xl shadow-ibc"></article>
         <article class="h-64 w-64 bg-white rounded-2xl shadow-ibc"></article>
         <article class="h-64 w-64 bg-white rounded-2xl shadow-ibc"></article>
      </div>
   </section>
   <section class="flex justify-center gap-10 h-80 bg-ibc_gray-100 pb-20">
      <div class="relative w-64 h-80">
         <div class="bg-ibc_gray-200 w-64 h-96 absolute bottom-0">

         </div>
      </div>
      <div class="max-w-md flex flex-col justify-center gap-4">
         <h2 class="text-3xl text-ibc_blue-500">Nuestros <span class="font-bold">pastores</span></h2>
         <div class="flex flex-col gap-4">
            <p class="text-xs text-ibc_gray-500">Los Pastores <strong>David y Lizzette Reyes</strong>, ordenados en el año
               2008, han servido al Señor en el ministerio desde muy jóvenes, llevando la Palabra de Dios y el mensaje de
               salvación a muchos a través de su amor por la obra del Señor y la defensa de la familia.</p>
            <p class="text-xs text-ibc_gray-500">Desde el año 2013 pastorean la Iglesia Boston Central, fundada por los
               Pastores <strong>Carlos y Dilia Reyes</strong>, los pastores <strong>David y Lizzette</strong>, con una
               visión generacional, apuntan a la expansión del mensaje de Fe en Cristo, el derramamiento del Espíritu Santo
               y el crecimiento integral de cada vida y familia que llega a esta casa.</p>
         </div>
      </div>
   </section>
   <section class="grid grid-cols-4 my-20">
      <div></div>
      <div class="grid grid-cols-subgrid gap-y-10 gap-x-5 col-span-2 items-center">
         <article class="flex flex-col gap-4">
            <h2 class="text-xl text-ibc_blue-500 font-bold">¡Escucha nuestras predicas!</h2>
            <p class="text-sm text-ibc_gray-300">Disponibles en nuestro canal de Youtube.</p>
            <button class="bg-ibc_red-500 rounded-full text-white text-sm h-12 w-48">Escuchar ahora</button>
         </article>
         <article>
            <div class="w-80 h-52 shadow-ibc border border-ibc_kobalt-300 rounded-xl">

            </div>
         </article>
         <article>

         </article>
         <article>
            <p class="text-sm text-ibc_gray-300">Sintoniza la radio de la familia,</p>
            <h2 class="text-xl text-ibc_blue-500 font-bold">escucha en vivo La Nueva 870 AM</h2>
         </article>
         <article>
            <h2 class="text-xl text-ibc_blue-500 font-bold">Ayúdanos a ponernos en contacto contigo</h2>
         </article>
         <article class="px-auto">
            <div class="shadow-ibc p-2 flex flex-col items-center rounded-xl">

               <form class="w-full">
                  <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-2">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="name">Nombre Completo</label>
                     <input id="name" type="text" placeholder="David Reyes"
                        class="placeholder:text-md placeholder:text-ibc_blue-500">
                  </div>
                  <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-2">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">Email</label>
                     <input id="email" type="email" placeholder="davidr@ibc.org"
                        class="placeholder:text-md placeholder:text-ibc_blue-500">
                  </div>
                  <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-2">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">Celular</label>
                     <input id="email" type="number" placeholder="000 0000 0000"
                        class="placeholder:text-md placeholder:text-ibc_blue-500">
                  </div>
                  <div class="border border-ibc_kobalt-300 rounded-xl p-2 my-2">
                     <label class="block text-sm text-ibc_kobalt-500 font-bold" for="email">¿Necesitas consejería?</label>
                     <select id="consejo">
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                     </select>
                  </div>

               </form>
               <button class="bg-ibc_red-500 rounded-full text-white text-sm h-12 w-48 my-3">Enviar</button>
            </div>
         </article>
      </div>
      <div></div>
   </section>
</template>
