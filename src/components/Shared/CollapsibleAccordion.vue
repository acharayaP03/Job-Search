<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div class="flex cursor-pointer flex-wrap items-center justify-between" role="button" @click="open">
      <h3 class="text-base font-semibold">{{ heading }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot>
        <p>Whoops, someone forgot to populate me.</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup generic="T">
import { ref, computed } from 'vue'

defineOptions({
  name: 'CollapsibleAccordion',
  inheritAttrs: false
})
const props = defineProps<{
  heading: string
}>()

const isOpen = ref(false)

const caretIcon = computed(() => (isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']))
const open = () => (isOpen.value = !isOpen.value)
</script>
