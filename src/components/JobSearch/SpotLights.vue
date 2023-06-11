<template>
  <ul>
    <li v-for="(spotlight, index) in spotLights" :key="spotlight.id">
      <slot :image="spotlight.img" :title="spotlight.title" :description="spotlight.description" :index="index"/>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "SpotLights",
  data() {
    return {
      spotLights: []
    }
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/spotlights`;
    const response = await axios.get(url);
    this.spotLights = response.data
  }
}
</script>