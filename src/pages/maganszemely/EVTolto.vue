<template>
  <Layout>
    <e-v-hero />
    <product-navigation :links="links" />
    <e-v-intro />
    <!-- <e-v-intro-results /> -->
    <e-v-process />
  </Layout>
</template>

<script>
import EVHero from '../../components/customer/EVHero.vue';
import EVIntro from '../../components/customer/EVIntro.vue';
// import EVIntroResults from '../../components/customer/EVIntroResults.vue';
import EVProcess from '../../components/customer/EVProcess.vue';

import ProductNavigation from '../../components/ProductNavigation.vue';

export default {
  components: {
    EVHero,
    EVIntro,
    // EVIntroResults,
    EVProcess,
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
    title: 'Magánszemély | EV Töltő',
  },
};
</script>
