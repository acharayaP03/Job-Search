<template>
  <collapsible-accordion heading="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="h-8 w-1/2">
            <input
                :id="organization"
                v-model="selectedOrganizations"
                type="checkbox"
                :value="organization"
                class="mr-3"
                @change="selectOrganization"
            >
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useJobsStore, UNIQUE_ORGANIZATIONS } from "../../stores/jobs";
import { CollapsibleAccordion } from '@/components/Shared';
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from "../../stores/user";

export default {
  name: "JobFiltersSidebarOrganization",
  components:{
    CollapsibleAccordion
  },
  data() {
    return {
      selectedOrganizations: []
    }
  },
  computed:{
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS])
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      this.$router.push({ name: "JobResults"})
    }
  }
}
</script>
