<template>
  <v-row justify="center" align="center" class="home-hero mb-16">
    <v-col sm="10" md="8" lg="6" class="my-16 text-center">
      <h1
        class="text-h4 text-sm-h2 white--text mb-8 px-1 home-title font-weight-bold"
      >
        Szabadulj a Rezsicsapdából!
      </h1>
      <v-btn to="/kalkulator" color="primary" class="white--text mb-10"
        >EZ Kalkulátor</v-btn
      >
      <p
        class="caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        megoldást — árat — szerződést
      </p>
      <p
        class="caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        napelemre — hőszivattyúra — e-autóra
      </p>
      <p
        class="caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        családi és társasházra
      </p>
      <p
        class="caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        most — online
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style>
.home-hero {
  background: url(../../assets/images/home-hero-image.jpg) no-repeat bottom;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  min-height: 90vh;
}

.home-title {
  line-height: 1.2 !important;
}
</style>
