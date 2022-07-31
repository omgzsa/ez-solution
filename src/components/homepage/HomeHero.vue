<template>
  <v-row justify="center" align="center" class="home-hero mb-16">
    <v-col sm="10" md="8" lg="6" class="my-16 text-center">
      <h1
        class="text-h4 text-sm-h2 white--text mb-8 mt-16 home-title font-weight-bold"
      >
        Úton együtt, egy fenntartható jövőbe!
      </h1>
      <v-btn to="#footer" color="primary" class="white--text"
        >Kérj ajánlatot!</v-btn
      >
    </v-col>
  </v-row>
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
  min-height: 70vh;
}

.home-title {
  line-height: 1.2 !important;
}
</style>
