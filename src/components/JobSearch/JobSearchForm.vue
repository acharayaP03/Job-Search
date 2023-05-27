<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-2 border-brand-gray-3" @submit.prevent="searchJobs">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3"></font-awesome-icon>
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <!--
          when child TextInput component emits handleInput with event, the pay load will be passed to
          parent component, where we can capture directly on $event rather than declaring methods and assigning it to
          reactive data in the methods.
          we can directly assign like below. this is called inline expression
        -->
        <text-input placeholder="Software engineer" v-model="role"/>
      </div>
      <span class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">in</span>
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <text-input v-model="location" placeholder="Sydney" />
      </div>
    </div>

    <action-button text="Search" button-type="secondary" class="rounded-r-3xl"/>
  </form>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {FontAwesomeIcon, ActionButton, TextInput},
  data() {
    return {
      role: '',
      location: ''
    }
  },
  methods: {
    searchJobs(){
      this.$router.push({
        name: 'JobResults',
        query: {
          role: this.role,
          location: this.location
        }
      })
    }
  }
}
</script>
