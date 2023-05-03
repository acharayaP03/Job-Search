<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="mt-6 text-6xl text-center">{{ msg }}</h1>
</template>