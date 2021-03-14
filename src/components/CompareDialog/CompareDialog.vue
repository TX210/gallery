<template>
  <v-dialog @input="dialogWidth = 651" :width="dialogWidth" v-model="open">
    <VueCompareImage
      :sliderPositionPercentage="1"
      :leftImage="`@/assets/${image_src.split('/')[2][0]}1.jpg`"
      :rightImage="image_src"
    ></VueCompareImage>
  </v-dialog>
</template>
<script>
import VueCompareImage from "vue-compare-image";

export default {
  components: { VueCompareImage },
  data: () => ({
    dialogWidth: 650
  }),
  props: ["open", "image_src"],
  updated() {
    console.log("open?");
    this.dialogWidth = 651;
  }
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
