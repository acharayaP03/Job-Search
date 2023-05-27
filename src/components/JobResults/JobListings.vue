<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing-item/>
      <job-listing-item/>
      <job-listing-item/>
    </ol>
  </main>
</template>

<script>
import { JobListingItem } from '@/components/JobResults'
export default {
  name: "JobListings",
  components:{
    JobListingItem
  }
}
</script>
