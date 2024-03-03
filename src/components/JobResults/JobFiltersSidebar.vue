<template>
  <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" button-type="secondary" @click="userStore.CLEAR_USER_JOB_SELECTIONS" />
        </div>
      </div>
      <CollapsibleAccordion heading="Degree">
        <FilterSidebarCheckboxGroup :unique-items="UNIQUE_DEGREES" :actions="userStore.ADD_SELECTED_DEGREE_TYPE" />
      </CollapsibleAccordion>

      <CollapsibleAccordion heading="Job Types">
        <FilterSidebarCheckboxGroup :unique-items="UNIQUE_JOB_TYPES" :actions="userStore.ADD_SELECTED_JOB_TYPES" />
      </CollapsibleAccordion>

      <CollapsibleAccordion heading="Organizations">
        <FilterSidebarCheckboxGroup :unique-items="UNIQUE_ORGANIZATIONS"
          :actions="userStore.ADD_SELECTED_ORGANIZATIONS" />
      </CollapsibleAccordion>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useJobsStore } from "../../stores/jobs";
import { useUserStore } from "../../stores/user";
import { useDegreesStore } from "@/stores/degrees";
import { CollapsibleAccordion, ActionButton, FilterSidebarCheckboxGroup } from '@/components/Shared';

const jobsStore = useJobsStore()
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);

const degreeStore = useDegreesStore();
const UNIQUE_DEGREES = computed(() => degreeStore.UNIQUE_DEGREES)

const userStore = useUserStore();
</script>