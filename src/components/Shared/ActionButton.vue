<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
import {computed, toRefs} from "vue";

export default {
  name: "ActionButton",
  props:{
    text: {
      type: String,
      required: true
    },
    primary:{
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    buttonType: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value)
      }
    }
  },
  setup(props){
    const { primary, secondary, buttonType } = toRefs(props)
    const buttonClass = computed(() => {
      return{
        primary: primary.value,
        secondary: secondary.value,
        [buttonType.value] : true
      }
    });

    return { buttonClass }
  }
}
</script>

<style scoped>
button {
  @apply  px-5 py-3 font-medium;
}

.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue
}

.secondary {
  @apply bg-transparent  text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
