import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      { name: 'laptop', price: 35000 },
      { name: 'mobile', price: 20000 }
    ]
  },

  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map( product => {
        return {
          name: product.name,
          price: product.price/2
        }
      })
      return saleProducts
    }
  },

  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload
      })
    }
  },
  
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
  // plugins: [createPersistedState()]
})
