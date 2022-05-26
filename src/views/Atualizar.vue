<template>
  <Navbar />
  <div class="container">
    <div class="cadastro">
      <form @submit.prevent="sendForm">
        <fieldset class="form">
          <legend>Atualizar contato</legend>
          <p>Faça as alterações necessárias e ao terminar salve seu contato</p>

          <BaseInput
            id="name"
            v-model="user.name"
            label="Nome Completo"
            placeholder="Digite o nome do contato"
            type="text"
          />

          <span class="input_email"></span>

          <div class="sub-container">
            <div class="left">
              <BaseInput
                id="email"
                v-model="user.email"
                label="Email"
                placeholder="Digite seu email"
                type="text"
              />
            </div>

            <div class="right">
              <BaseInput
                id="fone"
                v-model="user.mobile"
                label="Celular"
                placeholder="Digite o celular"
                type="text"
              />
            </div>
          </div>

          <span class="input_password"></span>

          <BaseButton type="submit">Salvar alterações</BaseButton>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
export default {
  name: 'Atualizar',
  components: { Navbar, BaseInput, BaseButton },

  data() {
    return {
      user: {
        name: null,
        email: null,
        mobile: null,
        id: null,
      },
    }
  },

  created() {
    this.user = this.$store.state.userInfo
  },

  methods: {
    sendForm() {
      this.$store
        .dispatch('atualizarUser', {
          name: this.user.name,
          email: this.user.email,
          mobile: this.user.mobile,
          id: this.user.id,
        })
        .then(() => this.$router.push({ name: 'listagem' }))
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 8.8rem);
  width: 100vw;
  background-color: var(--dark-white);
  display: flex;
  align-items: center;
  justify-content: center;

  .cadastro {
    background-color: var(--light-white);
    height: 54.3rem;
    width: 65vw;
    padding: 3rem;
    display: grid;
    align-content: center;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.04);
    border-radius: 8px;

    .form {
      display: grid;

      .sub-container {
        display: flex;

        .left {
          display: grid;
          width: 100%;
          padding-right: 1rem;
        }

        .right {
          display: grid;
          width: 100%;
          padding-left: 1rem;
        }
      }

      legend,
      p {
        display: grid;
        justify-content: center;
        width: 100%;
      }

      legend {
        margin-bottom: 2rem;
        color: var(--primary-color);
        font-family: var(--font-poppins);
        font-weight: normal;
        letter-spacing: -0.03em;
        font-size: 2.4rem;
      }

      p {
        margin-bottom: 8rem;
        color: var(--light-dark);
        font-family: var(--font-monteserrat);
        font-weight: 500;
        font-size: 1.6rem;
        letter-spacing: -0.02em;
      }

      .input_email {
        margin-bottom: 2.4rem;
      }

      .input_password {
        margin-bottom: 8rem;
      }
    }
  }
}
</style>
