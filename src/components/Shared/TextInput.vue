<template>
  <input
      type="text"
      :value="modelValue"
      class="w-full text-lg font-normal focus:outline-none"
      @input="handleInput"
  >
</template>

<script setup>

defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
const emit = defineEmits(["update:modelValue"])

const handleInput = ($event) => {
  emit('update:modelValue', $event.target.value)
}

</script>