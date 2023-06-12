<template>
  <collapsible-accordion heading="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2" v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization">
            <input type="checkbox" :id="organization" class="mr-3">
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState } from "pinia";
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "../../stores/jobs";
import { CollapsibleAccordion } from '@/components/Shared'
export default {
  name: "JobFiltersSidebarOrganization",
  components:{
    CollapsibleAccordion
  },
  computed:{
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS])
  }
}
</script>
