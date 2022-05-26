import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () =>
      import(/* webpackChunkName: "cadastro */ '../views/Cadastro.vue'),
  },
  {
    path: '/listagem',
    name: 'listagem',
    component: () =>
      import(/* webpackChunkName: "listagem */ '../views/Listagem.vue'),
  },
  {
    path: '/atualizar',
    name: 'atualizar',
    component: () =>
      import(/* webpackChunkName: "atualizar */ '../views/Atualizar.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
