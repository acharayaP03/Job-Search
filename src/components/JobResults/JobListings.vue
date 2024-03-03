<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing-item v-for="job in displaySlicedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{name: 'JobResults', query: {page: previousPage}}"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
        </div>
        <div class="flex items-center justify-center">
          <router-link
            v-if="nextPage"
            role="link"
            :to="{name: 'JobResults', query: {page: nextPage}}"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {computed, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useJobsStore} from '../../stores/jobs'
import {useDegreesStore} from '@/stores/degrees'
import JobListingItem from './JobListingItem.vue'
import usePreviousAndNextPages from '../../composables/usePreviousAndNextPages'

const jobStore = useJobsStore()
const degreeStore = useDegreesStore()
onMounted(degreeStore.FETCH_DEGREES)
const route = useRoute()

onMounted(jobStore.FETCH_JOBS)

const currentPage = computed((): number => Number.parseInt((route.query.page as string) || '1'))
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS)
const maxPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10))

const {previousPage, nextPage} = usePreviousAndNextPages(currentPage, maxPage)

const displaySlicedJobs = computed(() => {
  const pageNumber = currentPage.value
  const firstJobIndex = (pageNumber - 1) * 10
  const lastJobIndex = pageNumber * 10

  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex)
})
</script>
