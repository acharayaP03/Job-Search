<template>
  <img
    :src="imageLink"
    alt="Profile image"
    class="h-10 w-10 rounded-3xl border-2 border-brand-blue-1 object-contain"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
interface Data {
  imageLink: string
}
export default defineComponent({
  name: 'ProfileImage',
  data(): Data {
    return {
      imageLink:
        'https://media.istockphoto.com/id/183363838/photo/table-setting.webp?b=1&s=170667a&w=0&k=20&c=DeEdYPS3BRiIAz5GKqEF5Z0Vxj91-ylraGEGxySSWZg='
    }
  }
})
</script>
