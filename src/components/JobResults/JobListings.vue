<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing-item v-for="job in displaySlicedJobs" :key="job.id" :job="job"/>
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link role="link" v-if="previousPage" :to="{ name: 'JobResults', query: { page: previousPage} }" class="mx-3 text-sm font-semibold text-brand-blue-1">Previous</router-link>
        </div>
        <div class="flex items-center justify-center">
          <router-link role="link" v-if="nextPage" :to="{ name: 'JobResults', query: { page: nextPage} }" class="mx-3 text-sm font-semibold text-brand-blue-1">Next</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import JobListingItem from "./JobListingItem.vue";
export default {
  name: "JobListings",
  components:{
    JobListingItem
  },
  data() {
    return {
      jobs: []
    }
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
    nextPage() {
      const nextPage = this.currentPage + 1;
      const lastPage = Math.ceil(this.jobs.length / 10);
      return nextPage <= lastPage ? nextPage : undefined;
    },
    displaySlicedJobs(){
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1 ) * 10;
      const lastJobIndex = pageNumber * 10;

      return this.jobs.slice(firstJobIndex, lastJobIndex)
    }
  },
  async mounted() {
    try{
      const results = await axios.get('http://localhost:3000/jobs');
      this.jobs = results.data
    }catch (e){
      console.error(e.message)
    }
  }
}
</script>
