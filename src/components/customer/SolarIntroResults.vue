<template>
  <v-container class="solar-intro-results my-2 my-md-10">
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
      <v-col cols="12" sm="10" offset-sm="" md="6" lg="6 " offset-lg="1">
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          {{ results.title }}
        </h3>
        <p class="body-2 text-lg-body-1 mb-8">
          {{ results.text }}
        </p>

        <v-col cols="12" align-self="center" class="d-none d-md-flex">
          <div class="results-numbers">
            <span class="text-h5 text-sm-h4 orange--text text--darken-3"
              >80%</span
            >
            <p class="caption text-uppercase font-weight-bold">
              -kal kevesebb áramfogyasztás
            </p>
          </div>
          <div class="results-numbers">
            <span class="text-h5 text-sm-h4 orange--text text--darken-3"
              >76 000</span
            >
            <p class="caption text-uppercase font-weight-bold">
              megspórolt károsanyag kibocsájtás
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
        class="d-flex flex-column d-md-none justify-space-around"
      >
        <div class="pa-2 mb-4 mb-sm-16">
          <span class="text-h6 text-sm-h4 red--text text--darken-4">80%</span>
          <p class="caption text-uppercase font-weight-bold">
            -kal kevesebb fogyasztás
          </p>
        </div>
        <!-- <v-divider></v-divider> -->
        <div class="pa-2">
          <span class="text-h6 text-sm-h4 red--text text--darken-4">76000</span>
          <p class="caption text-uppercase font-weight-bold">
            megspórolt károsanyag kibocsátás
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
          alt="A house with solar panels on the roof"
          max-height="700"
          cover
          :src="require('../../assets/images/magan-solar-intro.jpg')"
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
        title: 'Eredmények napelemes háztartásoknál',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt proin arcu, tellus libero fusce. Sit tortor in nec amet odio vitae sed. Urna sed bibendum amet arcu quis diam at vitae. Dignissim ornare pretium augue molestie quisque.',
      },
    };
  },
};
</script>

<style>
.results-numbers {
  max-width: 200px;
}

.grey-background {
  position: absolute;

  overflow: hidden;
  z-index: -1;
}
</style>
