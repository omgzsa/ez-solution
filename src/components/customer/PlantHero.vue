<template>
  <v-container fill-height fluid class="plant-hero">
    <v-row no-gutters justify="center" align="center">
      <v-col sm="10" md="8" lg="6" class="my-16 text-center">
        <h1 class="text-h4 text-sm-h2 white--text mb-8 font-weight-bold">
          Innovatív fűtő-hűtő megoldás — Szabaduljon ki végleg a Rezsicsapdából!
        </h1>
        <v-btn color="plant" class="white--text">Kérj ajánlatot!</v-btn>
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

  padding-top: clamp(8rem, 11vw, 12rem);
  padding-bottom: clamp(4rem, 11vw, 12rem);
}
</style>
