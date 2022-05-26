<template>
  <div class="container">
    <img src="@/assets/loging.svg" alt="Man at the computer working" />
    <form @submit.prevent="sendForm">
      <fieldset class="form">
        <legend>Bem-vindo!</legend>
        <p>Faça login para acessar nossa plataforma</p>

        <BaseInput
          id="email"
          v-model="event.email"
          label="Email"
          placeholder="Digite seu email"
          type="text"
        />
        <div v-if="validName">
          {{ event.emailMessage }}
        </div>

        <span class="input_email"></span>

        <BaseInput
          id="senha"
          v-model="event.password"
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
        />
        <div v-if="validPassword">
          {{ event.passwordMessage }}
        </div>

        <span class="input_password"></span>

        <BaseButton type="submit">Fazer Login</BaseButton>
      </fieldset>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'Home',
  components: { BaseInput, BaseButton },

  // Credentials
  // devfrontpl@diwe.com.br and frontPl@2021

  data() {
    return {
      event: {
        email: null,
        password: null,
        emailMessage: 'Preencha o campo Email',
        passwordMessage: 'Preencha o campo Senha',
      },
    }
  },
  computed: {
    validName() {
      if (this.event.email === null || this.event.email.length > 200) {
        this.$store.commit('EMAIL_MESSAGE', this.event.emailMessage)
      }
      return this.event.email === null || this.event.email.length > 200
    },
    validPassword() {
      if (this.event.password === null || this.event.password.length > 200) {
        this.$store.commit('PASSWORD_MESSAGE', this.event.passwordMessage)
      }
      return this.event.password === null || this.event.password.length > 200
    },
  },
  methods: {
    sendForm() {
      const formIsValid = !this.validName && !this.validPassword

      if (formIsValid) {
        this.$store
          .dispatch('login', {
            user: this.event.email,
            pwd: this.event.password,
          })
          .then(() => this.$router.push({ name: 'listagem' }))
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: repeat(2, 1fr);

  align-items: center;
  justify-items: center;

  .form {
    display: grid;
    grid-template-columns: minmax(40vw, max-content);

    legend,
    p {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    legend {
      margin-bottom: 2rem;
      color: var(--primary-color);
      font-family: var(--font-poppins);
      font-weight: normal;
      letter-spacing: -0.03em;
      font-size: 3.6rem;
    }
    p {
      margin-bottom: 3rem;
      color: var(--light-dark);
      font-family: var(--font-monteserrat);
      font-weight: 500;
      font-size: 1.8rem;
      letter-spacing: -0.02em;
    }

    .input_email {
      margin-bottom: 2rem;
    }

    .input_password {
      margin-bottom: 7rem;
    }
  }
}
</style>
