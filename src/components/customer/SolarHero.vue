<template>
  <v-container fill-height fluid class="solar-hero">
    <v-row justify="center" align="center">
      <v-col sm="10" md="8" lg="6" class="my-16 text-center">
        <h1
          class="text-h4 text-sm-h2 white--text mb-8 font-weight-bold animate blur"
        >
        Napelemmel a magas rezsi ellen
        </h1>
        <v-btn
          title="Tovább az EZ Kalkulátorhoz"
          to="/kalkulator"
          color="solar"
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
.solar-hero {
  background: url(../../assets/images/magan-solar-hero.jpg) no-repeat top;
  background-position: 65%;
  background-size: cover;

  height: 70vh;
}
</style>
