<template>
  <main>
    <section class="flex flex-col h-screen bg-yellow-400 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-700">
          Column 1
        </div>
        <div class="col-span-5 col-start-2 border border-blue-700">
          <the-headline/>
        </div>
        <div class="col-span-5 col-start-7 border border-blue-700">
          Column 2
        </div>
        <div class="col-span-1 col-start-12 border border-blue-700">
          Column 1
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "./TheHeadline.vue";
export default {
  name: "TheHero",
  components: {
    TheHeadline
  }

}
</script>
