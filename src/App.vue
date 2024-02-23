<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Whatsapp from './components/Whatsapp.vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <Header/>
  <RouterView/>
  <Whatsapp/>
  <Footer/>
</template>

