<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Pallete from '@/components/Pallete.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <Header/>
  <RouterView/>
  <!-- <Pallete/> -->
  <Footer/>
</template>

