<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing-item v-for="job in displaySlicedJobs" :key="job.id" :job="job"/>
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
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
