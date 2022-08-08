<template>
  <v-container fill-height fluid class="ev-hero">
    <v-row no-gutters justify="center" align="center">
      <v-col sm="10" md="8" lg="6" class="my-16 text-center">
        <h1 class="text-h4 text-sm-h3 white--text mb-8 font-weight-bold">
          Otthoni E-autó töltő megoldás — Egy lépés, hogy ingyen „tankolhasson”!
        </h1>
        <v-btn
          title="Tovább az EZ KITT Kalkulátorhoz"
          to="/kalkulator"
          color="charger"
          class="white--text"
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
.ev-hero {
  background: url(../../assets/images/magan-charger-hero.jpg) no-repeat top;
  background-position: 65%;
  background-size: cover;

  padding-top: clamp(8rem, 11vw, 12rem);
  padding-bottom: clamp(4rem, 11vw, 12rem);
}
</style>
