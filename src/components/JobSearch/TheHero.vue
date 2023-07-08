<template>
  <main class="flex flex-col h-screen ">
    <section class="pt-40 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"/>
        <div class="col-span-5 col-start-2">
          <the-headline/>
          <job-search-form/>
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
              class="h-[400px] w-full object-contain"
              style="clip-path : polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
              src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg" alt="hero image">
        </div>
        <div class="col-span-1 col-start-12"/>
      </div>
    </section>
    <spot-lights class="flex flex-row justify-center pb-16">
      <template #default="{ image, title, description, index }">
        <router-link v-if="index !==1 " to="/jobs/results" class="mx-5 flex flex h-[268px] w-[380px] flex-col rounded-lg border bg-brand-gray-2 overflow-hidden">
          <img :src="image" :alt="title" class="h-2/4 w-full object-cover">
          <div class="mt-3 px-6 py-2">
            <h3>{{ title }}</h3>
            <p class="mt-3 text-sm truncate">{{ description }}</p>
          </div>

          <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1">See jobs</router-link>
        </router-link>

        <router-link v-if="index === 1" to="/jobs/results" class="mx-5 flex h-[268px] w-[530px] flex-col rounded-lg border bg-brand-gray-2 overflow-hidden">
          <div
              :style="{ backgroundImage: 'url(' + image + ')', backgroundSize: '100%'}"
              class="flex h-full flex-col justify-end bg-cover"
          >
            <div class="text-white">
              <div class="px-6 py-4">
                <h3 class="text-xl">{{ title }}</h3>
                <p class="pt-4">{{ description }}</p>
              </div>
            </div>
            <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-white">See jobs</router-link>
          </div>
        </router-link>
      </template>
    </spot-lights>
  </main>
</template>

<script setup lang="ts">
import TheHeadline from "./TheHeadline.vue";
import JobSearchForm from "./JobSearchForm.vue";
import SpotLights from "./SpotLights.vue";
</script>
