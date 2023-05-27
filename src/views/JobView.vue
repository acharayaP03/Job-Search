<template>
<h1>Job view - {{ getJobId }}</h1>
</template>

<script>
export default {
  name: "JobView",
  computed:{
    getJobId() {
      return this.$route.params.id
    }
  }
}
</script>