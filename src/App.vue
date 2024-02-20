<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="w-full min-h-screen grid place-content-center">
    <h1 class="bg-red-500 justify-center align-middle rounded-3xl h-48 w-96">hola mundo </h1>
    <button type="submit">
    <span class="fa-solid fa-envelope" aria-hidden="true"></span> Email Us!
    <!-- <fa icon="=coffee" />
    <FontAwesomeIcon icon={faEnvelope} /> -->
    <!-- <FontAwesomeIcon :icon="byPrefixAndName.fas['house']" /> -->
    <div class="flex flex-row justify-between">

      <font-awesome-icon icon="fa-solid fa-house" />
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
      <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
    </div>
  </button>
  </div>

  <!-- <RouterView /> -->
</template>

