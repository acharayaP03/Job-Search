<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li v-for="itemType in uniqueItems" :key="itemType" class="h-8 w-1/2">
          <input
            :id="itemType"
            v-model="selectedItemType"
            type="checkbox"
            :value="itemType"
            class="mr-3"
            @change="selectItemValue"
          />
          <label :for="itemType">{{ itemType }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup lang="ts" generic="T">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useUserStore, CLEAR_USER_JOB_SELECTIONS} from '@/stores/user'

const props = defineProps<{
  uniqueItems: Set<string> | string[]
  actions: Function
}>()

const selectedItemType = ref<string[]>([])
const router = useRouter()
const userStore = useUserStore()

const selectItemValue = () => {
  props.actions(selectedItemType.value)
  router.push({name: 'JobResults'})
}

userStore.$onAction(({after, name}) => {
  after(() => {
    if (name === CLEAR_USER_JOB_SELECTIONS) {
      selectedItemType.value = []
    }
  })
})
</script>
