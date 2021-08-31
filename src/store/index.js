import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate"
export default new Vuex.Store({
  state: {
    token:"",
    name:""
  },
  mutations: {
    token(state,arg){
    state.token=arg
    },
    name(state,obj){
     state.name=obj
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
