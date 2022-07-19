<template>
  <v-container fill-height fluid class="solar-hero">
    <v-row no-gutters justify="center" align="center">
      <v-col sm="10" md="8" lg="6" class="my-16 text-center">
        <h1 class="text-h3 text-sm-h2 white--text mb-8">
          Napelemes megújuló energia otthonába
        </h1>
        <v-btn color="solar" class="white--text">Kérj ajánlatot!</v-btn>
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

  padding-top: clamp(8rem, 11vw, 12rem);
  padding-bottom: clamp(4rem, 11vw, 12rem);
}
</style>
