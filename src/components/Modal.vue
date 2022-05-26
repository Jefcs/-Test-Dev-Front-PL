<template>
  <transition name="modal" v-if="showModal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <legend>Tem certeza que deseja excluir este contato?</legend>

          <p>Após excluir não será possível recuperar o contato</p>

          <button class="button__excluir" @click="deletarContato">
            Excluir contato
          </button>

          <button class="button__nExcluir" @click="naoDeletar">
            Não excluir
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      user: null,
    }
  },

  mounted() {
    this.emitter.on('open-modal', isOpen => {
      this.showModal = isOpen
    })
  },

  created() {
    this.emitter.on('delete-user', id => {
      this.user = id
    })
  },

  methods: {
    deletarContato() {
      this.$store.dispatch('deletarId', this.user)
      this.showModal = !this.showModal
    },

    naoDeletar() {
      this.showModal = !this.showModal
    },
  },
}
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: grid;
    place-items: center;
    height: 100%;

    .modal-container {
      display: grid;
      place-items: center;
      grid-template-columns: repeat(7, 1fr);

      padding: 3rem;
      width: 50%;
      height: 27rem;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;

      .button__excluir {
        height: 5.6rem;
        font-family: var(--font-monteserrat);
        color: #f1f1f1;
        background-color: #fc3333;
        letter-spacing: -0.02em;
        font-size: 1.6rem;
        font-weight: 500;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        place-self: center stretch;
        grid-column: 2 /4;
      }

      .button__nExcluir {
        height: 5.6rem;
        font-family: var(--font-monteserrat);
        color: #424242;
        background-color: #ffffff;
        letter-spacing: -0.02em;
        font-size: 1.6rem;
        font-weight: 500;
        border-radius: 8px;
        border: solid 1px #424242;
        cursor: pointer;
        place-self: center stretch;
        grid-column: 5 /7;
      }

      legend,
      p {
        display: grid;
        justify-content: center;
        width: 100%;
        grid-column: 1 / 9;
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
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
