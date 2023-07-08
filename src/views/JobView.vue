<template>

  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar/>
    <job-listings/>
  </div>
</template>

<script lang="ts" setup>
import {JobFiltersSidebar, JobListings} from "../components/JobResults";
</script>