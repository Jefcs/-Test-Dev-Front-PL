<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
  height: 5.6rem;
  font-family: var(--font-monteserrat);
  color: var(--light-white);
  background-color: var(--primary-color-light);
  letter-spacing: -0.02em;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
