<template>
  <v-row justify="center" align="center" class="home-hero mb-16">
    <v-col sm="10" md="8" lg="6" class="my-16 text-center">
      <h1
        class="text-h4 text-sm-h2 white--text mb-8 px-1 home-title font-weight-bold animate blur"
      >
        Szabadulj a rezsicsapdából!
      </h1>
      <v-btn
        title="Tovább az EZ Kalkulátorhoz"
        to="/kalkulator"
        color="primary"
        class="white--text mb-10 animate blur delay-1"
        >EZ Kalkulátor</v-btn
      >
      <p
        class="animate blur delay-2 caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        Megoldást, árat, megtérülést azonnal!
      </p>
      <!-- <p
        class="animate blur delay-3 caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        napelemre — hőszivattyúra — e-autóra
      </p>
      <p
        class="animate blur delay-4 caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        családi és társasházra
      </p>
      <p
        class="animate blur delay-5 caption text-sm-body-1 text-uppercase font-weight-bold white--text"
      >
        most — online
      </p> -->
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
  min-height: 85vh;
}

.home-title {
  line-height: 1.2 !important;
}
</style>
