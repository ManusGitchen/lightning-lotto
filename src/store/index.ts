import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    draws:[]
  },
  getters: {

    getDraws: (state) => {
      return state.draws
    }
  },
  mutations: {
    setGameData(state, draws) {
      state.draws = draws
    }
  },
  actions: {
    gameData({state, commit},selected): any {
      axios ({
        url:' http://localhost:8010/proxy/graphql',
        method:'post',
        data: {
          query:`
          {draw(type:"`+selected+`"){
            backendError
            draws {
              additionalNumbers
              date
              gameAmount
              jackpot
              megaPlier
              numbers
              odds {
                link
                numberOfWinners
                numbers
                odd
                winningClass
                withOptions
              }
              powerPlay
              seo {
                description
                texts {
                  content
                  headline
                }
                title
              }
              shares
              time
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
        console.log(res.data.data.draw)})
    }
  },
})