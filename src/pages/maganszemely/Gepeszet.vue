<template>
  <Layout>
    <plant-hero />
    <product-navigation :links="links" />
    <plant-intro />
    <plant-intro-results />
    <plant-products />
    <page-contact />
  </Layout>
</template>

<script>
import PlantHero from '../../components/customer/PlantHero.vue';
import PlantIntro from '../../components/customer/PlantIntro.vue';
import PlantIntroResults from '../../components/customer/PlantIntroResults.vue';
import PlantProducts from '../../components/customer/PlantProducts.vue';

import PageContact from '../../components/PageContact.vue';

import ProductNavigation from '../../components/ProductNavigation.vue';

export default {
  name: 'Gepeszet',
  metaInfo: {
    title: 'Magánszemély | Hűtés-fűtés',
    meta: [
      {
        name: 'EZ Solutions',
        content:
          'Hőszivattyúk családi házakba és lakásokba magánszemélyek számára.',
      },
    ],
  },
  components: {
    PlantHero,
    PlantIntro,
    PlantIntroResults,
    PlantProducts,
    ProductNavigation,
    PageContact,
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
          name: 'Autó töltő',
          to: '/maganszemely/ev-tolto',
          icon: 'mdi-battery-charging',
        },
      ],
    };
  },
};
</script>
