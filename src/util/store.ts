import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    customImage: null
  },
  mutations: {
    changeCustomImage(state, customImage) {
      state.customImage = customImage;
    }
  },
  getters: {
    customImage: state => state.customImage
  }
});
