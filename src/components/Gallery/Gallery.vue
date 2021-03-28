<template>
  <v-container class="mb-10 ">
    <div class="caption">
      Tip: Click on any image to compare before and after
    </div>
    <masonry :cols="{ default: 3, 700: 2, 400: 1 }" :gutter="50">
      <div
        v-for="(image, i) in imagesByCategory.top_images"
        :key="i"
        style="transition: transform 300ms"
        @click.stop="
          dialog.visible = true;
          dialog.image_src = image.after;
          dialog.left_image = image.before;
          dialogWidth = 600;
        "
      >
        <v-img class="rounded elevation-5 " :src="image.after" />
      </div>
    </masonry>
    <masonry :cols="{ default: 3, 700: 2, 400: 1 }" :gutter="20">
      <div
        v-for="(image, i) in imagesByCategory.middle_images"
        :key="i"
        style="transition: transform 300ms"
        @click.stop="
          dialog.visible = true;
          dialog.image_src = image.after;
          dialog.left_image = image.before;
          dialogWidth = 1000;
        "
      >
        <v-img class="rounded elevation-5 mt-8" :src="image.after" />
      </div>
    </masonry>
    <masonry :cols="{ default: 4, 700: 2, 400: 1 }" :gutter="50">
      <div
        v-for="(image, i) in imagesByCategory.bot_images"
        :key="i"
        style="transition: transform 300ms"
        @click.stop="
          dialog.visible = true;
          dialog.image_src = image.after;
          dialog.left_image = image.before;
          dialogWidth = 600;
        "
      >
        <v-img class="rounded elevation-5 mt-8" :src="image.after">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="red"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </div>
    </masonry>
    <v-dialog :max-width="dialogWidth" v-model="dialog.visible">
      <CompareDialog
        :sliderPositionPercentage="0.5"
        :OriginalImageWidth="dialogWidth"
        :leftImage="dialog.left_image"
        :rightImage="dialog.image_src"
      ></CompareDialog>
    </v-dialog>
  </v-container>
</template>
<script>
import CompareDialog from "@/components/shit/shit.vue";
// import VueCompareImage from "vue-compare-image";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  components: { CompareDialog },
  data: () => ({
    dialog: { visible: false, image_src: "", left_image: "" },
    dialogWidth: 600
  }),
  computed: {
    ...mapState(["category"]),
    ...mapGetters(["imagesByCategory"])
  }
};
</script>
<style scoped></style>
