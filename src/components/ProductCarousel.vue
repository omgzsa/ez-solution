<template>
  <v-carousel
    hide-delimiter-background
    show-arrows-on-hover
    height="100%"
    light
    class="pb-16 mt-10"
  >
    <!-- EV TÖLTŐK -->

    <v-carousel-item
      v-for="item in chargers"
      :key="item.id"
      transition="fade-transition"
      class="my-auto"
    >
      <v-row
        justify="center"
        align="start"
        class="d-flex flex-column flex-sm-row align-md-center px-3"
      >
        <v-col cols="12" sm="4">
          <v-img
            height="360"
            :alt="item.alt"
            contain
            aspect-ratio="1"
            :src="require('../assets/images/products/' + item.image)"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
            {{ item.name }}
          </h4>
          <p class="body-2 text-lg-body-1 mb-8">{{ item.description }}</p>
          <v-col
            class="d-flex flex-column text-center flex-sm-row align-center justify-space-around"
          >
            <div class="results-numbers px-2">
              <span class="text-h6 green--text text--darken-2">{{
                item.performance
              }}</span>
              <p class="caption text-uppercase font-weight-bold">
                max. teljesítmény
              </p>
            </div>
            <v-divider vertical />
            <div class="results-numbers px-2">
              <span class="text-h6 green--text text--darken-2">{{
                item.extra
              }}</span>
              <p class="caption text-uppercase font-weight-bold">
                extrák
              </p>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-carousel-item>

    <!-- SOLAR PANELEK -->

    <v-carousel-item
      v-for="item in solarPanels"
      :key="item.id"
      transition="fade-transition"
      class="my-auto"
    >
      <v-row
        justify="center"
        align="start"
        class="d-flex flex-column flex-sm-row align-md-center px-3"
      >
        <v-col cols="12" sm="4">
          <v-img
            max-height="320"
            :alt="item.alt"
            contain
            aspect-ratio="1"
            :src="require('../assets/images/products/' + item.image)"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
            {{ item.name }}
          </h4>
          <div class="d-flex flex-column align-start">
            <v-img
              class="pb-10"
              width="180"
              contain
              :src="require('../assets/images/logos/' + item.logo)"
            />
          </div>
          <p class="body-2 text-lg-body-1 mb-8">{{ item.description }}</p>
          <v-col
            class="d-flex flex-column text-center flex-sm-row align-center justify-space-around"
          >
            <div class="results-numbers px-2">
              <span class="text-h6 orange--text text--darken-2">{{
                item.performance
              }}</span>
              <p class="caption text-uppercase font-weight-bold">
                termékgarancia
              </p>
            </div>
            <v-divider vertical />
            <div class="results-numbers px-2">
              <span class="text-h6 orange--text text--darken-2">{{
                item.extra
              }}</span>
              <p class="caption text-uppercase font-weight-bold">
                teljesítménygarancia
              </p>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-carousel-item>

    <!-- INVERTEREK -->

    <v-carousel-item
      v-for="item in inverters"
      :key="item.id"
      transition="fade-transition"
      class="my-auto"
    >
      <v-row
        justify="center"
        align="start"
        class="d-flex flex-column flex-sm-row align-md-center px-3"
      >
        <v-col cols="12" sm="4">
          <v-img
            max-height="320"
            :alt="item.alt"
            contain
            aspect-ratio="1"
            :src="require('../assets/images/products/' + item.image)"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
            {{ item.name }}
          </h4>
          <div class="d-flex flex-column align-start">
            <v-img
              width="180"
              contain
              :src="require('../assets/images/logos/' + item.logo)"
            />
          </div>
          <p class="body-2 text-lg-body-1 mb-8">{{ item.description }}</p>
          <v-col
            class="d-flex flex-column text-center flex-sm-row align-center justify-space-around"
          >
            <div class="results-numbers px-2">
              <span class="text-h6 orange--text text--darken-2">{{
                item.performance
              }}</span>
              <p class="caption text-uppercase font-weight-bold">
                termékgarancia
              </p>
            </div>
            <v-divider vertical />
            <div class="results-numbers px-2">
              <span class="text-h6 orange--text text--darken-2">{{
                item.extra
              }}</span>
              <p class="caption text-uppercase font-weight-bold">
                védelem
              </p>
            </div>
          </v-col>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['chargers', 'solarPanels', 'inverters'],
  data() {
    return {};
  },
};
</script>

<style></style>
