<template>
  <div class="home">
    <gallery></gallery>
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "@/components/Gallery/Gallery.vue";
export default {
  name: "Home",
  components: { Gallery }
};
</script>
