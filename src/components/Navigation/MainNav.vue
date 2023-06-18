<template>
  <header :class="[headerHeightClass, 'w-full', 'text-sm']">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-xl">Devs Finder</router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
                v-for="menu in menuItems"
                :key="menu.text"
                class="ml-9 h-full first:ml-0"
            >
              <router-link :to="menu.url" class="flex h-full items-center py-2.5">{{ menu.text }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" button-type="primary" @click="loginUser"/>
        </div>
      </div>
      <the-sub-navigation v-if="isLoggedIn"/>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from "@/stores/user";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import TheSubNavigation from "./TheSubNavigation.vue";
export default {
  name: "MainNav",
  components: {
    TheSubNavigation,
    ActionButton,
    ProfileImage
  },
  data() {
    return {
      author: {
        firstName: 'Trishten',
        lastName: 'Ac',
      },
      url: 'https://careers.gooogle.com',
      menuItems: [
        {text: "Teams", url: '/teamview' },
        {text: "Locations", url: '/'},
        {text: "Life at Trishten Tech", url: '/'},
        {text: "How we hire", url: '/'},
        {text:  "Students", url: '/'},
        {text:"Jobs", url: '/jobs/results'}
      ]
    }
  },
  computed:{
    ...mapState(useUserStore, ["isLoggedIn"]),
      headerHeightClass() {
        return {
          "h-16": !this.isLoggedIn,
          "h-32": this.isLoggedIn
        }
      }
  },
  methods:{
    ...mapActions(useUserStore, ["loginUser"])
  }
}
</script>
