<template>
  <v-app>
    <v-main>
      <h1 class="main_head">
        Alice Azorova
      </h1>
      <h1 class="font-weight-thin text-center" style="letter-spacing: 0.2em;">
        retoucher
      </h1>
      <HelloWorld />
      <v-footer padless absolute></v-footer>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
.main_head {
  font-size: 42px;
  text-align: center;
  color: #84ffff;
  font-weight: bold;
  text-shadow: 3px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.2em;
}
</style>
