import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    draws:[],
    error: ''
  },
  getters: {
    getDraws: (state) => {
      return state.draws
    },
    getBackendError: (state) => {
      return state.error
    }
  },
  mutations: {
    setGameData(state, draws) {
      state.draws = draws
    },
    setBackendError(state, error) {

    }
  },
  actions: {
    gameData({commit},selected): any {
      axios ({
        url:'https://www.lottohelden.de/graphql',
        method:'post',
        data: {
          query:`
          {draw(type:"`+selected+`"){
            backendError
            draws {
              additionalNumbers
              date
              numbers
              seo {
                description
                title
              }
            }
            success
            visibleErrors {
              idents
              messages
            }
          }
          }
          `
        }
      }).then(res =>{
        let draws = res.data.data.draw
        commit('setGameData',draws)
        commit('setBackendError',draws.backendError)
      })
    },
  },
})