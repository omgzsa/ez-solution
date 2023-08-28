<template>
  <v-container fill-height fluid class="plant-hero">
    <v-row no-gutters justify="center" align="center">
      <v-col sm="10" md="8" lg="6" class="my-16 text-center">
        <h1
          class="text-h4 text-sm-h3 white--text mb-8 font-weight-bold animate blur"
        >
        Innovatív hőszivattyús megoldások – Szabadulj ki végleg a rezsicsapdából!
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
.plant-hero {
  background: url(../../assets/images/magan-plant-hero.jpg) no-repeat top;
  background-position: 65%;
  background-size: cover;

  height: 70vh;
}
</style>
