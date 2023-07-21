<template>
  <v-container fluid class="firms-hero">
    <v-row justify="center">
      <v-col sm="10" md="8" lg="9" class="text-center">
        <h1
          class="text-h5 text-sm-h4 text-md-h3 black--text mb-8 mt-16 font-weight-bold animate blur"
        >
          Komplex rezsicsökkentési megoldások Ipari Ingatlanok, Hotelek és
          Irodaházak tulajdonosai részére napelemmel, hőszivattyúval,
          tetőárnyékolóval és egyedi gépészeti megoldásokkal.
        </h1>
        <v-btn
          title="Tovább az EZ Kalkulátorhoz"
          to="/kalkulator"
          color="plant"
          class="white--text animate blur delay-1"
          >EZ Kalkulátor</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.firms-hero {
  background: url(../../assets/images/ceg-hero.jpg) no-repeat bottom;
  background-size: cover;

  height: 90vh;
}
</style>
