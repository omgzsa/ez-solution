<template>
  <v-container fluid class="firms-hero">
    <v-row justify="center">
      <v-col sm="10" md="8" lg="6" class="text-center">
        <h1
          class="text-h4 text-sm-h3 black--text mb-8 mt-16 font-weight-bold animate blur"
        >
          Cégek esetében 50 kW-os vagy többször 50kW-os, komplett rendszerek
          telepítését vállaljuk.
        </h1>
        <v-btn
          title="Tovább az EZ KITT Kalkulátorhoz"
          to="/kalkulator"
          color="plant"
          class="white--text animate blur delay-1"
          >EZ KITT Kalkulátor</v-btn
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
