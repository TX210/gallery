//index.js
import Vue from "vue";
import Vuex from "vuex";
import { shuffle } from "@/utils";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: ""
  },

  getters: {
    imagesByCategory: state => {
      switch (state.category) {
        case "family":
          return {
            top_images: shuffle([
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg")
            ]),
            middle_images: shuffle([
              require("@/assets/d2.jpg"),
              require("@/assets/e2.jpg"),
              require("@/assets/f2.jpg")
            ]),
            bot_images: shuffle([
              require("@/assets/a2.jpg"),
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg"),
              require("@/assets/c2.jpg")
            ])
          };
        case "standart":
          return {
            top_images: shuffle([
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg")
            ]),
            middle_images: shuffle([
              require("@/assets/d2.jpg"),
              require("@/assets/e2.jpg"),
              require("@/assets/f2.jpg")
            ]),
            bot_images: shuffle([
              require("@/assets/a2.jpg"),
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg"),
              require("@/assets/c2.jpg")
            ])
          };

        case "object retouch":
          return {
            top_images: shuffle([
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg")
            ]),
            middle_images: shuffle([
              require("@/assets/d2.jpg"),
              require("@/assets/e2.jpg"),
              require("@/assets/f2.jpg")
            ]),
            bot_images: shuffle([
              require("@/assets/a2.jpg"),
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg"),
              require("@/assets/c2.jpg")
            ])
          };

        case "beauty":
          return {
            top_images: shuffle([
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg")
            ]),
            middle_images: shuffle([
              require("@/assets/d2.jpg"),
              require("@/assets/e2.jpg"),
              require("@/assets/f2.jpg")
            ]),
            bot_images: shuffle([
              require("@/assets/a2.jpg"),
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg"),
              require("@/assets/c2.jpg")
            ])
          };

        case "complex":
          return {
            top_images: shuffle([
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg")
            ]),
            middle_images: shuffle([
              require("@/assets/d2.jpg"),
              require("@/assets/e2.jpg"),
              require("@/assets/f2.jpg")
            ]),
            bot_images: shuffle([
              require("@/assets/a2.jpg"),
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg"),
              require("@/assets/c2.jpg")
            ])
          };

        default:
          return {
            top_images: shuffle([
              require("@/assets/a2.jpg"),
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg")
            ]),
            middle_images: shuffle([
              require("@/assets/d2.jpg"),
              require("@/assets/e2.jpg"),
              require("@/assets/f2.jpg")
            ]),
            bot_images: shuffle([
              require("@/assets/a2.jpg"),
              require("@/assets/b2.jpg"),
              require("@/assets/c2.jpg"),
              require("@/assets/c2.jpg")
            ])
          };
      }
    }
  },

  mutations: {
    SET_CATEGORY(state, category) {
      state.category = category;
    }
  },

  actions: {}
});
