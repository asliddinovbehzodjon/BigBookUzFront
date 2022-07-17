import { createStore } from 'vuex'

export default createStore({
  state: {
    token:'',
    isAuthenticated:false,
    siteURL:"https://bigbookuz.pythonanywhere.com",
    isLoading:false,
  },
  getters: {
  },
  mutations: {
    setLoading(state,status){
      state.isLoading = status
    }
    
  },
  actions: {
  },
  modules: {
  }
})
