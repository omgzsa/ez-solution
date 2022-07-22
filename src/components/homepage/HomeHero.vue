<template>
  <v-container
    pa-0
    fluid
    fill-height
    min-height="800"
    class="home-hero py-16 mb-16"
  >
    <v-row justify="center" align="center">
      <v-col sm="10" md="8" lg="6" class="my-16 text-center">
        <h1 class="text-h3 text-sm-h2 white--text mb-8 mt-16 home-title">
          Úton, együtt, egy fenntartható jövőbe!
        </h1>
        <v-btn color="primary">Kérj ajánlatot!</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // overlay: true
    };
  },
};
</script>

<style>
.home-hero {
  background: url(../../assets/images/home-hero-image.jpg) no-repeat bottom;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
}

.home-title {
  line-height: 1.2 !important;
}
</style>
