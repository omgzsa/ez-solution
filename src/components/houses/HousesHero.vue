<template>
  <v-container fluid fill-height class="houses-hero">
    <v-row justify="center">
      <v-col sm="10" md="8" lg="6" class="text-center">
        <h1 class="text-h4 text-sm-h3 white--text mb-8 mt-16 font-weight-bold">
          Az első pontos rezsiköltség és megtakarítás kalkulátor társasházaknak!
        </h1>
        <v-btn to="/kalkulator" color="plant" class="white--text mb-10"
          >EZ KITT Kalkulátor</v-btn
        >
        <p class="body-2 text-sm-body-1 white--text font-weight-bold">
          Komplex napelemes és gépészeti megoldást adunk társasházaknak,
          társasházi lakásoknak gázkonvektoros, egyedi és központi fűtéses
          társasházaknak is.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.houses-hero {
  background: url(../../assets/images/tarsashaz-hero.jpg) no-repeat bottom;
  background-size: cover;

  height: 90vh;
}
</style>
