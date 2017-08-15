// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'Vuex'

Vue.use(VueAxios, axios)

Vue.use(Router)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: 1,
    caseData: {}
  },
  mutations: {
    selectType (state, type) {
      state.type = type
    },
    changeCaseData (state, data) {
      state.caseData = data
    }
  }
})

const router = new Router({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
