import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import config from './config'

Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.debug = true

var store = new Vuex.Store({
  state: {
    items: {
    },
    title: config.pageTitle
  },
  getters: {
    items: state => state.items,
    title: state => state.title
  },
  mutations: {
    items: (state, payload) => state.items = payload
  },
  actions: {
    items: ({commit}, payload) => {
      commit('items', payload)
    },
    INITIALIZE: ({commit}, payload) => {
      if (payload === 'items') {
        Vue.http.get('http://localhost:3000/api/items')
          .then(response => {
            let items = response.body
            commit('items', items)
          }, response => {
            // error callback
          })
      }
    }
  }
})

export const items = {
  computed: Vuex.mapState(['items']),
}
export default store
