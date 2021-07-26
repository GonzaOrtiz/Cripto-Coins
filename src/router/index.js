import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Autor from '../views/Autor.vue';
import Operar from '../views/Operar.vue';
import Historial from '../views/Historial.vue';
import AnalisisDeEstado from '../views/AnalisisDeEstado.vue';
import Inversiones from '../views/Inversiones.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  // },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/operar',
    name: 'Operar',
    component: Operar,
  },
  {
    path: '/autor',
    name: 'Autor',
    component: Autor,
  },
  {
    path: '/historial',
    name: 'Historial',
    component: Historial,
  },
  {
    path: '/analisisdeestado',
    name: 'AnalisisDeEstado',
    component: AnalisisDeEstado,
  },
  {
    path: '/inversiones',
    name: 'Inversiones',
    component: Inversiones,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
