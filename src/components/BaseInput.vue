<template>
  <label :for="id">{{ label }}</label>
  <input
    v-bind="$attrs"
    :id="id"
    :value="modelValue"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    maxlength: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
label {
  margin-bottom: 0.3rem;
  color: var(--primary-color);
  font-weight: bold;
  font-family: var(--font-monteserrat);
  font-size: 1.6rem;
}

input {
  background-color: var(--secondary-color);
  border: none;
  padding: 1.6rem;
  height: 5.6rem;
  border-radius: 8px;
}

input::-webkit-input-placeholder {
  color: var(--light-dark);
  font-size: 1.6rem;
  opacity: 0.64;
  font-weight: 500;
  letter-spacing: -0.02em;
  font-family: var(--font-monteserrat);
}
</style>
