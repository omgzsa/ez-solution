<template>
  <Layout>
    <solar-hero />
    <product-navigation :links="links" />
    <solar-intro />
    <solar-process />
    <solar-products />
  </Layout>
</template>

<script>
import SolarHero from '../../components/customer/SolarHero.vue';
import SolarIntro from '../../components/customer/SolarIntro.vue';
import SolarProcess from '../../components/customer/SolarProcess.vue';
import SolarProducts from '../../components/customer/SolarProducts.vue';

import ProductNavigation from '../../components/ProductNavigation.vue';

export default {
  name: 'solar',
  metaInfo: {
    title: 'Magánszemély | Napelem',
    meta: [
      {
        name: 'EZ Solutions',
        content:
          'Napelemek családi házakba és lakásokba magánszemélyek számára.',
      },
    ],
  },
  components: {
    SolarHero,
    SolarIntro,
    SolarProcess,
    SolarProducts,
    ProductNavigation,
  },
  data() {
    return {
      links: [
        {
          name: 'Napelem',
          to: '/maganszemely/solar',
          icon: 'mdi-solar-power',
          color: 'solar',
        },
        {
          name: 'Hűtés-fűtés',
          to: '/maganszemely/gepeszet',
          icon: 'mdi-fan',
          color: 'plant',
        },
        {
          name: 'EV töltő',
          to: '/maganszemely/ev-tolto',
          icon: 'mdi-battery-charging',
          color: 'charger',
        },
      ],
    };
  },
};
</script>
