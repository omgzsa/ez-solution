<template>
  <Layout>
    <v-container fill-height fluid pa-0>
      <solar-hero />
      <product-navigation :links="links" />
      <solar-intro />
      <!-- <solar-intro-results /> -->
      <solar-process />
    </v-container>
  </Layout>
</template>

<script>
import SolarHero from '../../components/customer/SolarHero.vue';
import SolarIntro from '../../components/customer/SolarIntro.vue';
import SolarIntroResults from '../../components/customer/SolarIntroResults.vue';
import SolarProcess from '../../components/customer/SolarProcess.vue';

import ProductNavigation from '../../components/ProductNavigation.vue';

export default {
  components: {
    SolarHero,
    SolarIntro,
    SolarIntroResults,
    SolarProcess,
    ProductNavigation,
  },
  data() {
    return {
      links: [
        {
          name: 'Napelem',
          to: '/maganszemely/solar',
          icon: 'mdi-solar-power',
        },
        {
          name: 'EV töltő',
          to: '/maganszemely/ev-tolto',
          icon: 'mdi-battery-charging',
        },
      ],
    };
  },
  metaInfo: {
    title: 'Magánszemély | Solar Panel',
  },
};
</script>
