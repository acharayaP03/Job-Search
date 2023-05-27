<template>

  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar/>
    <job-listings/>
  </div>
</template>

<script>
import {JobFiltersSidebar, JobListings} from "../components/JobResults";
export default {
  name: "JobView",
  components:{
    JobListings,
    JobFiltersSidebar
  },
  computed:{
    getJobId() {
      return this.$route.params.id
    }
  }
}
</script>