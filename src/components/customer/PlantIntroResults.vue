<template>
  <v-container class="my-2 my-md-10 site-wrapper">
    <v-row justify="center" align="center" class="d-flex relative" no-gutters>
      <svg
        width="2440"
        height="497"
        viewBox="0 0 2440 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="grey-background mb-10 d-none d-lg-flex "
      >
        <path d="M0 0H4096V557H0V0Z" fill="#F3F3F3" />
      </svg>
      <v-col cols="12" sm="10" offset-md="1" md="5" lg="5" offset-lg="1">
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          {{ results.title }}
        </h3>
        <p class="body-2 text-lg-body-1 mb-8">
          {{ results.text }}
        </p>
        <v-col
          cols="12"
          align-self="center"
          class="d-none d-md-flex justify-space-between"
        >
          <div class="results-numbers">
            <span class="text-h5 text-sm-h5 blue--text text--darken-4"
              >5x effektívebb</span
            >
            <p class="caption text-uppercase font-weight-bold">
              mint a modern kondenzációs kazánok
            </p>
          </div>
          <div class="results-numbers">
            <span class="text-h5 text-sm-h5 blue--text text--darken-4"
              >Hűtésre is képes,</span
            >
            <p class="caption text-uppercase font-weight-bold">
              a gázzal működő rendszerekkel szemben
            </p>
          </div>
        </v-col>
      </v-col>

      <v-col
        cols="3"
        sm="3"
        offset-sm="1"
        order-md="2"
        offset-md="1"
        class="d-flex flex-column d-md-none justify-space-between"
      >
        <div class="pa-2 mb-4 mb-sm-16">
          <span class="text-h6 text-sm-h5 blue--text text--darken-4">5x effektívebb</span>
          <p class="caption text-uppercase font-weight-bold">
            mint a modern kondenzációs kazánok
          </p>
        </div>
        <!-- <v-divider></v-divider> -->
        <div class="pa-2">
          <span class="text-h6 text-sm-h5 blue--text text--darken-4">Hűtésre is képes,</span>
          <p class="caption text-uppercase font-weight-bold">
            a gázzal működő rendszerekkel szemben
          </p>
        </div>
      </v-col>

      <v-col
        cols="7"
        md="4"
        order-md="1"
        offset="1"
        class="ml-auto pa-0 relative"
        align-self="start"
      >
        <v-img
          alt="Fém hőszivattyú szerelési doboz egy erkélyen."
          max-height="700"
          cover
          :src="require('../../assets/images/magan-plant-intro.jpg')"
          class="elevation-3"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      results: {
        title: 'Hasznosítsd a levegő ingyenes hőjét fűtésre, hűtésre!',
        text:
          'A hőszivattyú 1 egységnyi villamos energiából átlagosan 4,5 egységnyi fűtési/hűtési energiát állít elő, míg a hagyományos gázkazán csupán 0,8-at, a kondenzációs kazán 0,9-et. A különbség abból adódik, hogy a hőszivattyú a levegőben található hőenergiát használja fel a magasabb hatásfok eléréséhez.',
      },
    };
  },
};
</script>

<style></style>
