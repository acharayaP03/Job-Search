<template>
  <ul>
    <li v-for="(spotlight, index) in spotLights" :key="spotlight.id">
      <slot :image="spotlight.img" :title="spotlight.title" :description="spotlight.description" :index="index"/>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const spotLights = ref([])

const getSpotLights = async () => {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/spotlights`;
    const response = await axios.get(url);
    spotLights.value = response.data
}

onMounted(getSpotLights)
</script>