import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts';
import DefaultLayout from '@/views/layout/DefaultLayout.vue'
import SideBar from '@/components/SideBar.vue'
import AppBar from '@/components/AppBar.vue';
Vue.config.productionTip = false
Vue.use(VueApexCharts)
Vue.component('apexchart',VueApexCharts)
Vue.component('defaultLayout',DefaultLayout),
Vue.component('side-bar',SideBar)
Vue.component('app-bar',AppBar)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
