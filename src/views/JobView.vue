<template>
  <div class="flex w-full flex-row flex-nowrap">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script lang="ts" setup>
import {JobFiltersSidebar, JobListings} from '../components/JobResults'
</script>
