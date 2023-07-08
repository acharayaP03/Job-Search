<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br>
      for everyone</h1>
    <h2 class="text-3xl font-light">Find your next job at Trishten Tech</h2>
  </section>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import nextElementInList from "../../utils/nextElementInList";

const action = ref("Build");
const interval = ref<NodeJS.Timer>();


const actionClasses = computed(() => {
  return {
    [action.value.toLowerCase()]: true
  }
})

const changeTitle = () => {
  interval.value = setInterval(() =>{
    const actions = ["Build", "Create", "Design", "Code"];
    action.value = nextElementInList(actions, action.value)
  }, 3000)
};

onMounted(changeTitle);
onBeforeUnmount(() => clearInterval(interval.value))
</script>

<style scoped>
.build {
  color: #1a7338;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025
}
</style>