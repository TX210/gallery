<template>
  <v-app>
    <v-main>
      <h1 @click="setCategory('')" class="mt-10 main_head main_text">
        Mariya Savitskaya
      </h1>

      <h1
        @click="setCategory('')"
        class="font-weight-thin text-center main_text"
      >
        retoucher
      </h1>
      <v-row class="mt-10 row justify-center text-center">
        <v-col
          sm="2"
          v-for="(link, index) in top_links"
          :key="index"
          @click="setCategory(link)"
          class="main_text font-weight-light"
        >
          {{ link }}
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div>
        <router-view></router-view>
      </div>

      <v-footer color="#abf2ff" fixed class="justify-space-around">
        <div class="main_text bottom_text font-weight-light">
          <a
            target="_blank"
            href="https://www.instagram.com/invites/contact/?i=wtd1bi2dje1p&utm_content=k9oylq4"
            ><v-icon class="mr-10">{{ icons.instagram }}</v-icon></a
          >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mriaretoucher@gmail.com"
            ><v-icon>mail</v-icon></a
          >
        </div>
      </v-footer>
      <v-btn
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        color="#abf2ff"
        class="mb-2 "
        dark
        fixed
        bottom
        right
        fab
      >
        <v-icon color="black">{{
          $vuetify.theme.dark ? "brightness_5" : "brightness_3"
        }}</v-icon>
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import { mdiInstagram } from "@mdi/js";

export default {
  name: "App",

  components: {},

  data: () => ({
    icons: {
      instagram: mdiInstagram
    },
    footer_links: [
      "about me",
      "price",
      "<v-icon>brightness_3</v-icon>",
      "ORDER"
    ],
    top_links: ["family", "standart", "object retouch", "beauty", "complex"]
  }),
  methods: {
    ...mapMutations(["SET_CATEGORY"]),
    setCategory(category) {
      this.SET_CATEGORY(category);
    }
  }
};
</script>
<style scoped>
.bottom_text {
  color: black !important;
}
.main_text {
  letter-spacing: 0.2em;
  cursor: pointer;
}
.main_head {
  font-size: 42px;
  text-align: center;
  color: #abf2ff;
  font-weight: bold;
  text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
