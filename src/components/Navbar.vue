<template>
  <div class="navbar">
    <span @click="this.$router.go(-1)" class="link">
      <img src="@/assets/arrow-left.svg" />
      <h3>Voltar</h3>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped lang="scss">
.navbar {
  height: 8.8rem;
  background-color: var(--light-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  padding-left: 3rem;

  .link {
    height: 8.8rem;

    display: flex;
    align-items: center;
    width: 12rem;
    cursor: pointer;
  }

  h3 {
    font-size: 2.6rem;
    font-family: var(--font-monteserrat);
    font-weight: 500;
    letter-spacing: -0.02em;
    color: var(--light-dark);
  }
}
</style>
