<template>
  <v-container class="site-wrapper my-16">
    <v-row justify="start" class="mb-10 mb-lg-16">
      <v-col cols="10" offset-md="1">
        <h2 class="overline font-weight-bold mb-2 blue--text text--darken-4">
          fűtés-hűtés
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold">
          Hőszivattyús rendszereink céges ingatlanokhoz
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" lg="6">
        <ul class="custom-marker">
          <li v-for="item in firms" :key="item.id" class="py-2">
            <h5 class="text-h6 font-weight-bold mb-2">
              {{ item.title }}
            </h5>
            <p class="body-2 text-sm-body-1">{{ item.text }}</p>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['firms'],
};
</script>

<style></style>
