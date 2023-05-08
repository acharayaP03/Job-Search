<template>
  <section>
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br>
      for everyone</h1>
    <h2 class="text-3xl font-light">Find your next job at Trishten Tech</h2>
  </section>
</template>

<script>
import nextElementInList from "../utils/nextElementInList";
export default {
  name: "TheHeadline",
  data(){
    return {
      action: 'Build',
      interval: null
    }
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  computed:{
      actionClasses(){
        return {
          build: this.action === 'Build',
          create: this.action === 'Create',
          design: this.action === 'Design',
          code: this.action === 'Code'
        }
      }
  },
  methods:{
    changeTitle() {
      this.interval = setInterval(() =>{
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a7338;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025
}
</style>