<template>
  <div class="flex flex-col border-r border-solid border-brand-gray-1 bg-white p-4 w-96">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" button-type="secondary" />
        </div>
      </div>
      <collapsible-accordion heading="Degree"/>
      <filter-sidebar-checkbox-group heading="Job Types" :unique-items="UNIQUE_JOB_TYPES" :actions="userStore.ADD_SELECTED_JOB_TYPES"/>
      <filter-sidebar-checkbox-group heading="Organizations" :unique-items="UNIQUE_ORGANIZATIONS" :actions="userStore.ADD_SELECTED_ORGANIZATIONS"/>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useJobsStore } from "../../stores/jobs";
import { useUserStore } from "../../stores/user";
import { CollapsibleAccordion, ActionButton, FilterSidebarCheckboxGroup } from '@/components/Shared';

const jobsStore = useJobsStore()
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);

const userStore = useUserStore();
</script>