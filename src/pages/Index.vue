<template>
  <Layout>
    <v-container fluid pa-0>
      <home-hero />
      <home-about />
      <home-services />
      <home-features />
      <page-contact />
    </v-container>
  </Layout>
</template>

<script>
import HomeHero from '../components/homepage/HomeHero.vue';
import HomeAbout from '../components/homepage/HomeAbout.vue';
import HomeServices from '../components/homepage/HomeServices.vue';
import HomeFeatures from '../components/homepage/HomeFeatures.vue';

import PageContact from '../components/PageContact.vue';

export default {
  components: {
    HomeHero,
    HomeAbout,
    HomeServices,
    HomeFeatures,
    PageContact,
  },
  metaInfo: {
    title: 'Kezdőoldal',
  },
};
</script>

<style></style>
