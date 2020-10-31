<template>
  <v-container class="mb-14 mt-6">
    <masonry :cols="{ default: 3, 700: 2, 400: 1 }" :gutter="50">
      <div
        v-for="(image, i) in top_images"
        :key="i"
        style="transition: transform 300ms"
        @click.stop="
          dialog.visible = true;
          dialog.image_src = image;
        "
      >
        <v-img class="rounded elevation-5 " :src="image" />
      </div>
    </masonry>
    <masonry :cols="{ default: 3, 700: 2, 400: 1 }" :gutter="20">
      <div
        v-for="(image, i) in middle_images"
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
        v-for="(image, i) in bot_images"
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
    <compare-dialog
      :open="dialog.visible"
      :image_src="dialog.image_src"
    ></compare-dialog>
  </v-container>
</template>
<script>
import CompareDialog from "@/components/CompareDialog/CompareDialog.vue";
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
export default {
  components: { CompareDialog },
  data: () => ({
    dialog: { visible: false, image_src: "/img/c2.8d23ab50.jpg" },

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
  })
};
</script>
<style scoped></style>
