<template>
  <button
    @click="$emit('click', $event)"
    :disabled="disabled"
    :class="classList"
  >
    <slot>Кнопка!</slot>
  </button>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        classList: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>

<style>

</style>