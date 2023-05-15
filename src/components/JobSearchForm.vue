<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3"></font-awesome-icon>
  </form>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name: "JobSearchForm",
  components: {FontAwesomeIcon}
}
</script>
