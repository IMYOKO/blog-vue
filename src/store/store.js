// import { getCookie } from '../assets/js/common'
const state = {
  islogin: localStorage.getItem('userId') === null ?  false : true
}

const getters = {

}

const mutations = {
  setLogin (state, payload) {
    state.islogin = payload
  }
}

const actions = {
  
}

export default {
  state,
  getters,
  mutations,
  actions
}