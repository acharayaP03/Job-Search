<template>
  <main>
    <section class="flex flex-col h-screen pt-40 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"/>
        <div class="col-span-5 col-start-2">
          <the-headline/>
          <job-search-form/>
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
              class="h-[400px] w-full object-contain"
              style="clip-path : polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
              src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg" alt="hero image">
        </div>
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
