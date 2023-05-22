<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-2 border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3"></font-awesome-icon>
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <input type="text" placeholder="Software engineer" class="w-full text-lg font-normal focus:outline-none" v-model="role">
      </div>
      <span class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">in</span>
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <input type="text" placeholder="Sydney" class="w-full text-lg font-normal focus:outline-none" v-model="location">
      </div>
    </div>

    <action-button text="Search" button-type="secondary" class="rounded-r-3xl"/>
  </form>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {FontAwesomeIcon, ActionButton},
  data() {
    return {
      role: '',
      location: ''
    }
  }
}
</script>
