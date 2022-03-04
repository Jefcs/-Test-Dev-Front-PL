<template>
  <Navbar />
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
              <th>#</th>
              <th>Nome</th>
              <th>Celular</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in clients" v-bind:key="client.id">
              <td>{{ client.id }}</td>
              <td>{{ client.name }}</td>
              <td>{{ client.mobile }}</td>
              <td>{{ client.email }}</td>
              <td>
                <div>
                  <div class="pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V12"
                        stroke="#5C7CFA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.5 1.62132C18.8978 1.2235 19.4374 1 20 1C20.5626 1 21.1022 1.2235 21.5 1.62132C21.8978 2.01915 22.1213 2.55871 22.1213 3.12132C22.1213 3.68393 21.8978 4.2235 21.5 4.62132L12 14.1213L8 15.1213L9 11.1213L18.5 1.62132Z"
                        stroke="#5C7CFA"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <h4 class="editar">Editar</h4>
                  </div>
                  <div class="pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6H5H21"
                        stroke="#DB3030"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                        stroke="#DB3030"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
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
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Listagem',
  components: { Navbar },

  created() {
    this.$store.dispatch('listagem')
  },
  computed: {
    clients() {
      return this.$store.state.clients
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
      }

      .lixeira {
        padding-left: 0.5rem;
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
