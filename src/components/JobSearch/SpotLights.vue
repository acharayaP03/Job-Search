<template>
  <ul>
    <li v-for="(spotlight, index) in spotLights" :key="spotlight.id">
      <slot
        :image="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
        :index="index"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import axios from 'axios'

interface Spotlight {
  id: number
  title: string
  img: string
  description: string
}
const spotLights = ref<Spotlight[]>([])

const getSpotLights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const url = `${baseUrl}/spotlights`
  const response = await axios.get<Spotlight[]>(url)
  spotLights.value = response.data
}

onMounted(getSpotLights)
</script>
