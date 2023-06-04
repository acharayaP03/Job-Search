<template>
  <header-container>
    <template v-slot:title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template v-slot:subtitle>
      <h2 class="my-4 w-full text-base font-light">Its awesome working here. Why don't you come join us</h2>
    </template>
  </header-container>
</template>

<script>
import {HeaderContainer} from "../components/Shared";
export default {
  name: "TeamsView",
  components: {HeaderContainer}
}
</script>