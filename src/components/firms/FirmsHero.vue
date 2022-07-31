<template>
  <v-container fill-height fluid class="firms-hero">
    <v-row no-gutters justify="center" align="center">
      <v-col sm="10" md="8" lg="6" class="my-16 text-center">
        <h1 class="text-h4 text-sm-h3 black--text mb-8 font-weight-bold">
          Cégek esetében 50 kW-os vagy többször 50kW-os, komplett rendszerek
          telepítését vállaljuk.
        </h1>
        <v-btn to="#footer" color="plant" class="white--text"
          >Kérj ajánlatot!</v-btn
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
  background: url(../../assets/images/cegek-hero.jpg) no-repeat top;
  background-position: 65%;
  background-size: cover;

  padding-top: clamp(8rem, 11vw, 10rem);
  padding-bottom: clamp(4rem, 11vw, 14rem);
}
</style>
