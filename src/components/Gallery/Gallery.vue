<template>
  <v-container class="mb-14 mt-6">
    <masonry :cols="{ default: 3, 700: 2, 400: 1 }" :gutter="50">
      <v-card v-if="category.length" height="100%">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          libero lacus, fringilla nec placerat eget, blandit id turpis. Maecenas
          at elit ultricies, gravida odio eget, dignissim libero. Ut blandit
          eget nisl nec sollicitudin. Mauris suscipit lorem vitae auctor
          sollicitudin. Pellentesque at sapien ac ligula condimentum placerat ut
          quis libero. Quisque sed turpis est. Morbi euismod massa nulla, sit
          amet tempor elit pretium sed. Sed imperdiet elit scelerisque molestie
          semper. Sed tincidunt urna id feugiat semper. Ut hendrerit ac quam vel
          fermentum. Nam vel posuere lacus, sed egestas odio. Duis vitae velit
          feugiat, lacinia lectus sit amet, pellentesque turpis. Fusce consequat
          finibus nisi vel mollis. Ut lacinia justo erat, eu condimentum justo
          eleifend suscipit. Suspendisse nunc velit, tincidunt a metus sit amet,
          rutrum vehicula eros. Nunc eget eros tortor.
        </v-card-text>
      </v-card>
      <div
        v-for="(image, i) in imagesByCategory.top_images"
        :key="i"
        style="transition: transform 300ms"
        @click.stop="
          dialog.visible = true;
          dialog.image_src = image;
          dialogWidth = 650;
        "
      >
        <v-img class="rounded elevation-5 " :src="image" />
      </div>
    </masonry>
    <masonry :cols="{ default: 3, 700: 2, 400: 1 }" :gutter="20">
      <div
        v-for="(image, i) in imagesByCategory.middle_images"
        :key="i"
        style="transition: transform 300ms"
        @click.stop="
          dialog.visible = true;
          dialog.image_src = image;
        "
      >
        <v-img class="rounded elevation-5 mt-8" :src="image" />
      </div>
    </masonry>
    <masonry :cols="{ default: 4, 700: 2, 400: 1 }" :gutter="50">
      <div
        v-for="(image, i) in imagesByCategory.bot_images"
        :key="i"
        style="transition: transform 300ms"
        @click.stop="
          dialog.visible = true;
          dialog.image_src = image;
        "
      >
        <v-img class="rounded elevation-5 mt-8" :src="image" />
      </div>
    </masonry>
    <v-dialog :width="dialogWidth" v-model="dialog.visible">
      <CompareDialog
        :sliderPositionPercentage="0.5"
        :OriginalImageWidth="dialogWidth"
        :leftImage="
          require(`@/assets/${dialog.image_src.split('/')[2][0]}1.jpg`)
        "
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
    dialog: { visible: false, image_src: "/img/c2.8d23ab50.jpg" },
    dialogWidth: 650
  }),
  computed: {
    ...mapState(["category"]),
    ...mapGetters(["imagesByCategory"])
  }
};
</script>
<style scoped></style>
