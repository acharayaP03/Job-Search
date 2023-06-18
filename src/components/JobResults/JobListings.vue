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

<script>

import { mapState, mapActions } from "pinia";
import { useJobsStore, FETCH_JOBS, FILTERED_JOBS } from "../../stores/jobs";
import JobListingItem from "./JobListingItem.vue";
export default {
  name: "JobListings",
  components:{
    JobListingItem
  },
  computed:{

    currentPage() {
        return +(this.$route.query.page || "1");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined
    },
    ...mapState(useJobsStore, {
      FILTERED_JOBS,
      nextPage() {
        const nextPage = this.currentPage + 1;
        const lastPage = Math.ceil(this.FILTERED_JOBS.length / 10);
        return nextPage <= lastPage ? nextPage : undefined;
      },
      displaySlicedJobs(){
        const pageNumber = this.currentPage;
        const firstJobIndex = (pageNumber - 1 ) * 10;
        const lastJobIndex = pageNumber * 10;

        return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex)
      }
    }),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods:{
    ...mapActions(useJobsStore, [FETCH_JOBS])
  }
}
</script>
