import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import SubmitConfig from './SubmitConfig.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: App },
  { path: '/configs/submit', component: SubmitConfig },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app-wrapper',
  router
})
