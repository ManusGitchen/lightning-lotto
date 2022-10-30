import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    draws:[],
    error: ''
  },
  getters: {
    /**
     * Getter for fetched graphql draws
     * @param state 
     * @returns array of graphql draws
     */
    getDraws: (state) => {
      return state.draws
    },
    /**
     * Getter for fetched graphql backenderrors
     * @param state 
     * @returns backend error from graphql
     */
    getBackendError: (state) => {
      return state.error
    }
  },
  mutations: {
    /**
     * Set the fetched graphql data in local state
     * @param state 
     * @param draws array of graphql draws
     */
    setGameData(state, draws) {
      state.draws = draws
    },
    /**
     * Set the fetched backend error string in local state
     * @param state 
     * @param error error string
     */
    setBackendError(state, error) {
      state.error = error
    }
  },
  actions: {
    /**
     * Send an http request to lottohelden.de endpoint to fetch data for selected game.
     * fetched data are commited to mutations to store it in local storage.
     * @param selected selected game for graphql query
     */
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