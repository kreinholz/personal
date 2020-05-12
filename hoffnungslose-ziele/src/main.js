import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router';
import HomePage from './assets/components/pages/HomePage.vue';
import HZ1Page from './assets/components/pages/HZ1Page.vue';
import HZ2Page from './assets/components/pages/HZ2Page.vue';
import HZ3Page from './assets/components/pages/HZ3Page.vue';
import AboutPage from './assets/components/pages/AboutPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/hoffnungslose-ziele', component: HZ1Page, name: 'hoffnungslose ziele' },
  { path: '/hoffnungslose-ziele-ii', component: HZ2Page, name: 'hoffnungslose ziele II' },
  { path: '/hoffnungslose-ziele-iii', component: HZ3Page, name: 'hoffnungslose ziele III' },
  { path: '/about', component: AboutPage, name: 'about' }
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')