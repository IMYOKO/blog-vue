import { getCookie } from '../assets/js/common'
console.log(getCookie('userId'))
console.log(document.cookie)
const state = {
  islogin: getCookie('userId') === null ?  false : true
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