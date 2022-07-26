<template>
  <Layout>
    <plant-hero />
    <product-navigation :links="links" />
  </Layout>
</template>

<script>
import PlantHero from '../../components/customer/PlantHero.vue';

import ProductNavigation from '../../components/ProductNavigation.vue';

export default {
  components: {
    PlantHero,
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
    title: 'Magánszemély | Gépészet',
  },
};
</script>
