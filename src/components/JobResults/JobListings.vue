<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing-item v-for="job in displaySlicedJobs" :key="job.id" :job="job"/>
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link v-if="previousPage" role="link" :to="{ name: 'JobResults', query: { page: previousPage} }" class="mx-3 text-sm font-semibold text-brand-blue-1">Previous</router-link>
        </div>
        <div class="flex items-center justify-center">
          <router-link v-if="nextPage" role="link" :to="{ name: 'JobResults', query: { page: nextPage} }" class="mx-3 text-sm font-semibold text-brand-blue-1">Next</router-link>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useJobsStore } from "../../stores/jobs";
import JobListingItem from "./JobListingItem.vue";

const jobStore = useJobsStore();
const route = useRoute();

onMounted(jobStore.FETCH_JOBS);


const currentPage = computed(() => +(route.query.page || "1"))
const previousPage = computed(() => {
  const previousPage = currentPage.value - 1;
  const firstPage = 1;
  return previousPage >= firstPage ? previousPage : undefined
});

const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);
const nextPage = computed(() =>{
  const nextPage = currentPage.value + 1;
  const lastPage = Math.ceil(FILTERED_JOBS.value.length / 10);
  return nextPage <= lastPage ? nextPage : undefined;
})

const displaySlicedJobs = computed(() =>{
  const pageNumber = currentPage.value;
  const firstJobIndex = (pageNumber - 1 ) * 10;
  const lastJobIndex = pageNumber * 10;

  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex)
})

</script>
