//index.js
import Vue from "vue";
import Vuex from "vuex";
import { shuffle } from "@/utils";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: "main"
  },

  getters: {
    imagesByCategory: state => {
      const imageId = [1, 2, 3];
      return {
        top_images: shuffle(
          imageId.map(id => ({
            after: require(`@/assets/${state.category}/after/first/${id}.jpg`),
            before: require(`@/assets/${state.category}/before/first/${id}.jpg`)
          }))
        ),
        middle_images: shuffle(
          imageId.map(id => ({
            after: require(`@/assets/${state.category}/after/second/${id}.jpg`),
            before: require(`@/assets/${state.category}/before/second/${id}.jpg`)
          }))
        ),
        bot_images: shuffle(
          [...imageId, 4].map(id => ({
            after: require(`@/assets/${state.category}/after/third/${id}.jpg`),
            before: require(`@/assets/${state.category}/before/third/${id}.jpg`)
          }))
        )
      };
    }
  },

  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category;
    }
  },

  actions: {}
});
