<template>
  <img
:src="imageLink" alt="Profile image"
    class="h-10 w-10 rounded-3xl object-contain border-brand-blue-1 border-2"
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface Data {
  imageLink: string;
}
export default defineComponent({
  name: "ProfileImage",
  data() : Data{
    return {
      imageLink: "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png"
    }
  }
})
</script>