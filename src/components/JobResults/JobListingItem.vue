<template>
  <li class="mb-7">
    <router-link :to="getJobUrl" class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray">
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl">{{ title }}</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">{{ organization }}</div>
          <div>
            <ul>
              <li v-for="location in job.locations" :key="location" class="mr-5 inline-block"><span>{{ location }}</span></li>
            </ul>

          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualification:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li v-for="qualification in job.preferredQualifications" :key="qualification">{{ qualification }}</li>
            </ul>
          </div>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="getJobUrl" class="text-brand-blue-1">
            Expand
          </router-link>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListingItem",
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed:{
    getJobUrl() {
      return `/jobs/results/${this.job.id}`
    },
    title() {
      return this.job.title
    },
    organization() {
      return this.job.organization
    },
  }
}
</script>