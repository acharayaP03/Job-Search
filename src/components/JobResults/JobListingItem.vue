<template>
  <li class="mb-7">
      <router-link
        :to="getJobUrl"
        class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
      >
        <div class="mx-8 border-b border-solid border-brand-gray-2 pb-2 pt-5">
          <h2 class="mb-2 text-2xl">{{ title }}</h2>
          <div class="flex flex-row align-middle">
            <div class="mr-5">{{ organization }}</div>
            <div>
              <ul>
                <li v-for="location in job.locations" :key="location" class="mr-5 inline-block"
                  ><span>{{ location }}</span></li
                >
              </ul>
            </div>
          </div>
        </div>
        <div class="px-8 py-4">
          <div>
            <h3 class="mb-2 mt-1">Qualification:</h3>
            <div>
              <ul class="list-disc pl-8">
                <li v-for="qualification in job.preferredQualifications" :key="qualification">{{
                  qualification
                }}</li>
              </ul>
            </div>
          </div>
          <div class="mt-2 text-center">
            <router-link :to="getJobUrl" class="text-brand-blue-1"> Expand </router-link>
          </div>
        </div>
      </router-link>
    </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  job: {
    type: Object,
    required: true
  }
})

const getJobUrl = computed(() => `/jobs/results/${props.job.id}`)
const title = computed(() => props.job.title)
const organization = computed(() => props.job.organization)
</script>
