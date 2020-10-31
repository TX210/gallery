<template>
  <v-app>
    <v-main>
      <h1 class="mt-10 main_head">
        Alice Azorova
      </h1>
      <h1 class="font-weight-thin text-center main_text">
        retoucher
      </h1>
      <v-row class="mt-10 row justify-center text-center">
        <v-col
          sm="2"
          v-for="(link, index) in top_links"
          :key="index"
          class="main_text font-weight-light"
        >
          {{ link }}
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div><router-view></router-view></div>

      <v-footer fixed class="cyan accent-1 justify-space-around">
        <div
          v-for="(link, index) in footer_links"
          :key="index"
          class="main_text font-weight-light"
        >
          {{ link }}
        </div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    footer_links: ["about me", "price", "social", "ORDER"],
    top_links: ["family", "standart", "object retouch", "beauty", "complex"]
  })
};
</script>
<style scoped>
.main_text {
  letter-spacing: 0.2em;
}
.main_head {
  font-size: 42px;
  text-align: center;
  color: #84ffff;
  font-weight: bold;
  text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
