<template>
  <v-dialog width="500" v-model="open">
    <div>
      <VueCompareImage
        :sliderPositionPercentage="1"
        :leftImage="require(`@/assets/${this.image_src.split('/')[2][0]}1.jpg`)"
        :rightImage="image_src"
      ></VueCompareImage>
    </div>
  </v-dialog>
</template>
<script>
import VueCompareImage from "vue-compare-image";

export default {
  components: { VueCompareImage },

  props: ["open", "image_src"]

  // open: Boolean || undefined,
  // image_src: String || undefined
  //   computed: {
  //     visible: () => {
  //       return this.visible || false;
  //     },
  //     src: () => {
  //       return this.image_src || "";
  //     },
  //     leftImage: () => {
  //       return require(`@/assets/${this.image_src.split("/")[2][0]}1.jpg`) || "";
  //     }
  //   },
};
</script>
<style scoped>
.responsive {
  width: 30%;
  height: 80%;
}
</style>
