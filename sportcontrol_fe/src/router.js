import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import conectar from './components/conectar.vue'
import desconectar from './components/desconectar.vue'
import inicio from './components/inicio.vue'
import registro from './components/registro.vue'
import servicios from './components/servicios.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
},
{
  path: '/user/login',
  name: "conectar",
  component: conectar
},
{
  path: '/user/desconectar',
  name: "desconectar",
  component: desconectar
},
{
  path: '/user/inicio',
  name: "inicio",
  component: inicio
},
{
  path: '/servicios',
  name: "servicios",
  component: servicios
},
{
  path: '/deportistas',
  name: "registro",
  component: registro
}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router