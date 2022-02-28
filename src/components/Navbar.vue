<template>
  <div class="navbar">
    <router-link @click="back" class="link" to="">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M31.6666 20H8.33331"
          stroke="#495057"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 31.6667L8.33331 20L20 8.33337"
          stroke="#495057"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h3>Voltar</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  methods: {
    back() {
      this.$router.go(-1)
    },
  },
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
    text-decoration: none;

    display: flex;
    align-items: center;
    width: 12rem;
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
