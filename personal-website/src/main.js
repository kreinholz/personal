import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router';
import HomePage from './assets/components/pages/HomePage.vue';
import AboutPage from './assets/components/pages/AboutPage.vue';
import NovelsPage from './assets/components/pages/NovelsPage.vue';
import AIMEE from './assets/components/pages/AIMEE.vue';
import ActivismPage from './assets/components/pages/ActivismPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/novels', component: NovelsPage, name: 'novels' },
  { path: '/activism', component: ActivismPage, name: 'activism' },
  { path: '/aimee', component: AIMEE, name: 'aimee' }
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')