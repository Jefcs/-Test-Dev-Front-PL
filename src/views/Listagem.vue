<template>
  <Navbar />
  <Modal />
  <div class="container">
    <div class="main-content">
      <div class="listagem">Listagem de contatos</div>

      <div class="alignbutton">
        <router-link :to="{ name: 'cadastro' }">
          <button class="button">Adicionar novo contato</button>
        </router-link>
      </div>

      <div class="cont-table">
        <table class="table">
          <thead>
            <tr>
              <th>
                <img src="@/assets/hash.svg" />
                <img
                  src="@/assets/triangle-down.svg"
                  class="triangle"
                  @click="sort('id')"
                />
              </th>
              <th>
                Nome<img
                  src="@/assets/triangle-down.svg"
                  class="triangle"
                  @click="sort('name')"
                />
              </th>
              <th>
                Celular<img
                  src="@/assets/triangle-down.svg"
                  class="triangle"
                  @click="sort('mobile')"
                />
              </th>
              <th>
                Email<img
                  src="@/assets/triangle-down.svg"
                  class="triangle"
                  @click="sort('email')"
                />
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in sorted" v-bind:key="client.id">
              <td>{{ client.id }}</td>
              <td>{{ client.name }}</td>
              <td>{{ client.mobile }}</td>
              <td>{{ client.email }}</td>
              <td>
                <div>
                  <router-link
                    class="pointer link"
                    @click="this.editUserInfo(client)"
                    :to="{ name: 'atualizar' }"
                  >
                    <img src="@/assets/edit.svg" />
                    <h4 class="editar">Editar</h4>
                  </router-link>
                  <div class="pointer" @click="openModal(client.id)">
                    <img src="@/assets/trash.svg" />
                    <h4 class="lixeira">Excluir</h4>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'Listagem',
  components: { Navbar, Modal },

  data() {
    return {
      clients: [],
      showModal: false,
      currentSort: 'id',
      currentSortDir: 'asc',
    }
  },

  created() {
    this.$store.dispatch('listagem')
  },

  watch: {
    client() {
      this.clients = this.$store.state.clients
    },
  },

  computed: {
    client() {
      return this.$store.state.clients
    },

    sorted() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.clients.sort((a, b) => {
        let modifier = 1
        if (this.currentSortDir === 'desc') modifier = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier
        return 0
      })
    },
  },

  methods: {
    editUserInfo(userInfo) {
      this.$store.dispatch('editUser', userInfo)
    },

    openModal(id) {
      this.emitter.emit('open-modal', !this.showModal)
      this.emitter.emit('delete-user', id)
    },

    sort(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--dark-white);
  height: calc(100vh - 8.8rem);
  display: grid;
  justify-content: center;
  align-content: center;

  .main-content {
    display: grid;
    justify-content: center;
    height: 50rem;
    width: 90vw;
    padding: 3rem;
    background-color: var(--light-white);
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.04);
    border-radius: 8px;

    grid-template-rows: 7rem calc(100% - 7rem);
    grid-template-columns: repeat(2, 1fr);

    .listagem {
      align-self: center;
      font-size: 2.4rem;
      color: var(--primary-color);
      font-weight: bold;
      font-family: var(--font-poppins);
      margin-left: 2rem;
    }

    .alignbutton {
      justify-self: end;
      align-self: center;
    }

    .button {
      width: 23.1rem;
      height: 5.6rem;
      border-radius: 8px;
      border: none;
      background-color: #4263eb;
      color: var(--light-white);
      font-weight: 500;
      cursor: pointer;
      font-family: var(--font-monteserrat);
      letter-spacing: -0.02em;
      margin-right: 2rem;
    }

    .cont-table {
      grid-column: 1 / 3;
      background-color: white;
      margin-top: 2rem;
      overflow: auto;
    }

    .table {
      width: 100%;
      border-collapse: collapse;
      font-size: 2rem;
      text-align: left;
    }

    .table thead tr {
      color: var(--primary-color);
      font-family: var(--font-poppins);
      height: 6.4rem;
      border-bottom: 2px solid #adb5bd;
      background-color: var(--light-white);
    }

    .table th,
    .table td {
      padding: 2rem;
    }

    .triangle {
      cursor: pointer;
      margin: 0.5rem 1rem;
    }

    .table tbody tr td:first-child {
      color: var(--primary-color);
      font-weight: bold;
    }
    .table tbody tr td div:first-child {
      display: flex;
      width: 10rem;

      h4 {
        font-size: 1.4rem;
        letter-spacing: -0.01em;
        font-family: var(--font-monteserrat);
        font-weight: normal;
      }

      .editar {
        padding-left: 0.5rem;
        padding-right: 2rem;
        color: var(--light-dark);
      }

      .lixeira {
        padding-left: 0.5rem;
      }

      .link {
        display: flex;
        align-items: center;
        text-decoration: none;
      }

      .pointer {
        cursor: pointer;
      }
    }

    .table tbody tr td div:first-child div {
      display: flex;
      align-items: center;
    }

    .table tbody td {
      font-family: var(--font-monteserrat);
      font-weight: 500;
      font-size: 1.6rem;
      color: var(--light-dark);
      letter-spacing: -0.02em;
      height: 6.4rem;
      text-align: left;
      width: 50px;
    }

    .table tbody tr:nth-child(odd) td {
      background-color: var(--secondary-color);
    }
  }
}
</style>
