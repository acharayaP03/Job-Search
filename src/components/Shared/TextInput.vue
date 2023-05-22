<template>
  <input
      type="text"
      :value="modelValue"
      class="w-full text-lg font-normal focus:outline-none"
      @input="handleInput"
  >
</template>

<script>
export default {
  name: "TextInput",
  data() {
    return {
      modelValue: "",
    }
  },
  methods: {
    handleInput($event) {
      this.modelValue = $event.target.value;
      this.$emit('handleInput', this.modelValue)
    }
  }
}
</script>

<style scoped>

</style>