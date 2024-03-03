<template>
  <header :class="[headerHeightClass, 'w-full', 'text-sm']">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <router-link :to="{name: 'Home'}" class="flex h-full items-center text-xl"
          >Devs Finder</router-link
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menu in menuItems" :key="menu.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menu.url" class="flex h-full items-center py-2.5">{{
                menu.text
              }}</router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="LOGIN_USER" />
          <action-button v-else text="Sign in" button-type="primary" @click="loginUser" />
        </div>
      </div>
      <the-sub-navigation v-if="LOGIN_USER" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import {useUserStore} from '@/stores/user'
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
import TheSubNavigation from './TheSubNavigation.vue'
import {ref, computed} from 'vue'

const url = ref('https://careers.gooogle.com')
const menuItems = ref([
  {text: 'Teams', url: '/teamview'},
  {text: 'Locations', url: '/'},
  {text: 'Life at Trishten Tech', url: '/'},
  {text: 'How we hire', url: '/'},
  {text: 'Students', url: '/'},
  {text: 'Jobs', url: '/jobs/results'}
])

const userStore = useUserStore()
console.log(userStore.isLoggedIn)
const loginUser = () => userStore.LOGIN_USER()

const LOGIN_USER = computed(() => userStore.isLoggedIn)
const headerHeightClass = computed(() => ({
  'h-16': !LOGIN_USER.value,
  'h-32': LOGIN_USER.value
}))
</script>
