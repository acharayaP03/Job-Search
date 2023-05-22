<template>
  <header :class="[headerHeightClass, 'w-full', 'text-sm']">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
                class="ml-9 h-full first:ml-0"
                v-for="menu in menuItems"
                :key="menu"
            >
              <a href="" class="flex h-full items-center py-2.5">{{ menu }}</a>
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
      isLoggedIn: false,
      company: "Trishten Tech",
      author: {
        firstName: 'Trishten',
        lastName: 'Ac',
      },
      url: 'https://careers.gooogle.com',
      menuItems: [
          "Teams",
          "Locations",
          "Life at Trishten Tech",
          "How we hire",
          "Students",
          "Jobs"
      ]
    }
  },
  computed:{
      headerHeightClass() {
        return {
          "h-16": !this.isLoggedin,
          "h-32": this.isLoggedin
        }
      }
  },
  methods:{
    loginUser() {
      this.isLoggedin = true
    }
  }
}
</script>
