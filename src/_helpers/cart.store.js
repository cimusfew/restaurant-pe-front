import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: []
    }
  },
  getters: {
    totalPrice: (state) => state.cart.reduce((acc, item) => acc + item.price, 0)
  },

  actions: {
    addToCart(item) {
      item.isAdded = true
      this.cart.push(item)
      localStorage.setItem(item.id, item)
    },

    removeFromCart(item) {
      item.isAdded = false
      this.cart.splice(this.cart.indexOf(item), 1)
      localStorage.removeItem(item.id)
    }
  }
})
