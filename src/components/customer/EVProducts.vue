<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1" md="8" lg="6" offset-lg="1">
        <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
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

    <v-row align="center" justify="center" class="my-4">
      <v-col cols="11" sm="10" md="10" lg="10">
        <h4 class="text-h5 text-md-h4 font-weight-bold mt-6 mb-16">
          EV töltők
        </h4>
        <product-carousel :chargers="chargers" />
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
          'A JoinOn I-CON wallboxok a magán- és kisebb vállalati környezetbe való telepítésre készültek. A termékek esztétikus kinézetükkel és sokoldalúságukkal minden környezetbe beleillenek!',
      },
      properties: [
        {
          id: 1,
          text: 'Egykezes használat',
        },
        {
          id: 2,
          text: 'Intelligens töltés menedzsment',
        },
        {
          id: 3,
          text: 'Háttérvilágítás',
        },
        {
          id: 4,
          text: 'Sokoldalú szerelhetőség',
        },
      ],
      chargers: [
        {
          id: 1,
          name: 'Gewiss Charger - JoinOn Icon',
          alt: 'Gewiss JoinOn falra szerelhető EV töltő',
          image: 'gewiss-charger-joinon-1.jpg',
          description:
            'Az I-CON fali dobozokat kis méret és kifinomult dizájn jellemzi, így tökéletes otthoni használatra. Biztosítják bármely jármű gyors, biztonságos és megbízható feltöltését, hiszen minden nemzetközi biztonsági előírásnak megfelelnek.',
          performance: '7,4 / 11 / 22 kW',
          extra: 'Autostart, App, DLM, RFID',
        },
        {
          id: 2,
          name: 'Gewiss Charger - JoinOn Icon Premium',
          alt: 'Gewiss JoinOn falra szerelhető érintőképernyős EV töltő',
          image: 'gewiss-charger-joinon-2.jpg',
          description:
            'Az I-CON fali dobozokat kis méret és kifinomult dizájn jellemzi, így tökéletes otthoni használatra. Biztosítják bármely jármű gyors, biztonságos és megbízható feltöltését, hiszen minden nemzetközi biztonsági előírásnak megfelelnek.',
          performance: '7,4 / 11 / 22 kW',
          extra: 'Autostart, App, DLM, RFID, Érintőképernyő',
        },
      ],
    };
  },
};
</script>

<style></style>
