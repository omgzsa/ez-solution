<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row justify="center">
      <v-col cols="12" sm="11" md="10">
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

    <v-row align="center" justify="center" class="my-4">
      <v-col cols="11" md="10" lg="10">
        <h4 class="text-h5 text-md-h4 font-weight-bold mb-16">
          Napelemek
        </h4>
        <product-carousel :solarPanels="solarPanels" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="my-10">
      <v-col cols="11" md="10" lg="10">
        <h4 class="text-h5 text-md-h4 font-weight-bold mb-16">
          Inverterek
        </h4>
        <product-carousel :inverters="inverters" />
      </v-col>
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
        text:
          'Megoldásaink részeként csak prémium napelemeket ajánlunk ügyfeleinknek, hogy rendszerük minősége megkérdőjelezhetetlen legyen! Invertereink kiválasztásakor pedig elengedhetetlen szempont volt, hogy ár-érték arányban a legjobbak legyenek kategóriájukban.',
      },
      solarPanels: [
        {
          id: 1,
          name: 'Kensol Solar Panel',
          alt: 'Kensol Solar Panel',
          logo: 'kensol-logo.jpg',
          image: 'kensol-solar-panel-1.jpg',
          description:
            '- 400 Wp Teljesítmény - Monokristály szerkezet - Zsindely technológia - Európai garanciával',
          performance: '12 év',
          extra: '25 év',
        },
        {
          id: 2,
          name: 'Phono Solar Panel',
          alt: 'Phono Solar Panel',
          logo: 'phonosolar-logo.jpg',
          image: 'phono-solar-panel-1.jpg',
          description:
            '- 405 Wp Teljesítmény - Monokristály szerkezet - PERC technológia - Tier1-es gyártó',
          performance: '12 év',
          extra: '25 év',
        },
        {
          id: 3,
          name: 'WattPower Solar Panel',
          alt: 'WattPower Solar Panel',
          logo: 'wattpower-logo.jpg',
          image: 'wattpower-solar-panel-1.jpg',
          description:
            '- 405 Wp teljesítmény - Monokristály szerkezet - PERC technológia - Német tervezés',
          performance: '12 év',
          extra: '25 év',
        },
      ],
      inverters: [
        {
          id: 1,
          name: 'FoxEss Inverter',
          alt: 'FoxEss Inverter',
          logo: 'foxess-logo.jpg',
          image: 'foxess-inverter-2.jpg',
          description:
            '- Hálózati csatlakozás 230/400V - Optimalizálási lehetőség - Európai garancia',
          performance: '12 év',
          extra: 'AC/DC',
        },
        {
          id: 2,
          name: 'GoodWe Inverter 1.0',
          alt: 'GoodWe Inverter',
          logo: 'goodwe-logo.jpg',
          image: 'goodwe-inverter-1.jpg',
          description:
            '- Hálózati csatlakozás 230/400V - Optimalizálási lehetőség - Kiemelkedő ár-érték arány',
          performance: '12 év',
          extra: 'AC/DC',
        },
        {
          id: 3,
          name: 'Huawei Inverter 1.0',
          alt: 'Huawei Inverter',
          logo: 'huawei-logo.jpg',
          image: 'huawei-inverter-2.jpg',
          description:
            '- Hálózati csatlakozás 230/400V - Optimalizálási lehetőség - Nemzetközileg elismert gyártó',
          performance: '12 év',
          extra: 'AC/DC',
        },
      ],
    };
  },
};
</script>

<style></style>
