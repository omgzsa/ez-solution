<template>
  <Layout>
    <solar-hero />
    <product-navigation :links="links" />
    <solar-intro />
    <solar-process />
  </Layout>
</template>

<script>
import SolarHero from '../../components/customer/SolarHero.vue';
import SolarIntro from '../../components/customer/SolarIntro.vue';
import SolarProcess from '../../components/customer/SolarProcess.vue';

import ProductNavigation from '../../components/ProductNavigation.vue';

export default {
  components: {
    SolarHero,
    SolarIntro,
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
          name: 'Hűtés-fűtés',
          to: '/maganszemely/gepeszet',
          icon: 'mdi-fan',
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
