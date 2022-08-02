<template>
  <Layout>
    <plant-hero />
    <product-navigation :links="links" />
    <plant-intro />
    <plant-intro-results />
    <plant-products />
  </Layout>
</template>

<script>
import PlantHero from '../../components/customer/PlantHero.vue';
import PlantIntro from '../../components/customer/PlantIntro.vue';
import PlantIntroResults from '../../components/customer/PlantIntroResults.vue';
import PlantProducts from '../../components/customer/PlantProducts.vue';

import ProductNavigation from '../../components/ProductNavigation.vue';

export default {
  components: {
    PlantHero,
    PlantIntro,
    PlantIntroResults,
    PlantProducts,
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
