// /store.js
import { createStore } from 'vuex'

export const store = createStore ({
  state: {
    message:'초기메시지'
  },
  getters: {
    // 메시지를 사용하는 getter
    message(state) {return state.message}
  },
  mutations: {
    //메시지를 변경하는 mutations
    setMessage(state, payload){ // 상태, 전송된데이터
      state.message = payload.message
    }
  },
  actions: {
    // 메시지 변경 처리
    doUpdate({commit}, message) {
      commit('setMessage',{message})
    }
  },
})