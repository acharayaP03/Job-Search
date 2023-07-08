<template>
  <collapsible-accordion :heading="heading">
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
            >
            <label :for="itemType">{{ itemType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  uniqueItems: {
    type: Set,
    required: true
  },
  actions: {
    type: Function,
    required: true
  }
})

import {CollapsibleAccordion} from "./index";

const selectedItemType = ref([]);
const router = useRouter();

const selectItemValue = () => {
  props.actions(selectedItemType.value);
  router.push( { name: "JobResults"})
}
</script>
