import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    quantity: 0,
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },

    getQuantity: (state) => {
      return state.quantity;
    },
  },
  mutations: {
    ADD_TO_CART: (state, product) => {
      const isOnCartIndex = state.products.findIndex(
        (p) => p.id === product.id
      );

      if (isOnCartIndex !== -1) {
        state.products[isOnCartIndex].quantity += product.quantity;
        return;
      }

      state.products.push(product);
    },

    REMOVE_FROM_CART: (state, product) => {
      state.products = state.products.filter((p) => p.id !== product.id);
    },

    SET_CART_QUANTITY: (state) => {
      state.quantity = state.products.reduce(
        (acc, product) => acc + product.quantity,
        0
      );
    },
  },
});
