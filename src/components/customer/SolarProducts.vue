<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1" md="8" lg="6" offset-lg="1">
        <h2 class="overline font-weight-bold mb-2 orange--text text--darken-2">
          termékek
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          {{ products.title }}
        </h3>
        <p class="body-2 text-lg-body-1">
          {{ products.text }}
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col offset="1">
        <v-list class="pa-0" dense v-for="item in properties" :key="item.id">
          <v-list-item>
            <v-list-item-icon class="ml-0 mr-3"
              ><v-icon color="charger">mdi-check-bold</v-icon></v-list-item-icon
            >
            <span class="body-2 text-lg-body-1">
              {{ item.text }}
            </span>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <product-carousel :items="items" />
    </v-row>
  </v-container>
</template>

<script>
import ProductCarousel from '../../components/ProductCarousel.vue';

export default {
  components: { ProductCarousel },
  data() {
    return {
      products: {
        title: 'Elérhető termékeink',
      },
      items: [
        {
          id: 1,
          name: 'Kensol Solar Panel 1',
          image: 'kensol-solar-panel-1.png',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt proin arcu, tellus libero fusce. Sit tortor in nec amet odio vitae sed. Urna sed bibendum amet arcu quis diam at vitae. Dignissim ornare pretium augue molestie quisque.',
          performance: '2600 kWp',
          extra: '300 WP',
        },
        {
          id: 2,
          name: 'Phono Solar Panel 1',
          image: 'phono-solar-panel-1.png',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt proin arcu, tellus libero fusce. Sit tortor in nec amet odio vitae sed. Urna sed bibendum amet arcu quis diam at vitae. Dignissim ornare pretium augue molestie quisque.',
          performance: '2600 kWp',
          extra: '300 WP',
        },
      ],
    };
  },
};
</script>

<style></style>
