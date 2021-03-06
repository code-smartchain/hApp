import Vue from 'vue'
import './plugins/vuetify'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import DataController from './DataController'

Vue.config.productionTip = false

var api = axios.create({ baseURL: "https://smartchain-backend.timonchristiansen.com/" })
Vue.prototype.$api = api
var con = new DataController(api)

var vm = new Vue({
  data:{
    agentId: "",
    accesses: []
  },
  router,
  render: h => h(App)
}).$mount('#app')

con.registerUser()
  .then(response => {
    vm.agentId = response
  })
  .catch(() => {
    vm.agentId = "err"
  })