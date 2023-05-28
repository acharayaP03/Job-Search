<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing-item v-for="job in jobs" :key="job.id" :job="job"/>
    </ol>
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
