<template>
  <main>
    <section class="flex flex-col h-screen pt-40 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"/>
        <div class="col-span-5 col-start-2">
          <the-headline/>
          <job-search-form/>
        </div>
        <div class="col-span-5 col-start-7"/>
        <div class="col-span-1 col-start-12"/>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "./TheHeadline.vue";
import JobSearchForm from "./JobSearchForm.vue";
export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm
  }

}
</script>
