<template>
  <collapsible-accordion heading="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2" v-for="jobType in UNIQUE_JOB_TYPES" :key="jobType">
            <input
                type="checkbox"
                v-model="selectedJobType"
                :value="jobType"
                :id="jobType"
                class="mr-3"
                @change="selectJobType"
            >
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useJobsStore, UNIQUE_JOB_TYPES } from "../../stores/jobs";
import { CollapsibleAccordion } from '@/components/Shared';
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "../../stores/user";

export default {
  name: "JobFiltersSidebarJobTypes",
  components:{
    CollapsibleAccordion
  },
  data() {
    return {
      selectedJobType: []
    }
  },
  computed:{
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES])
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobType)
    }
  }
}
</script>
