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
          'A wallbox márka Pulsar Plus és Commander2 töltőit szereljük. Ezek kifejezetten magán- és kisebb vállalati környezetbe való telepítésre készültek. A termékek esztétikus kinézetükkel és sokoldalúságukkal minden környezetbe beleillenek!',
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
          text: 'Applikáció',
        },
        {
          id: 4,
          text: 'Sokoldalú szerelhetőség',
        },
      ],
      chargers: [
        {
          id: 1,
          name: 'WALLBOX - PULSAR PLUS',
          alt: 'WALLBOX - PULSAR PLUS falra szerelhető EV töltő',
          image: 'wallbox-pulsar-plus.jpg',
          description:
            'A Pulsar Plus a tökéletes otthoni töltő! Kis méretéhez, akár 22kW maximális teljesítmény társul. Könnyű használata pedig igazán megkönnyíti a töltési folyamatot. Mindezek mellet a töltő internethez csatlakoztatható, így egy applikáción keresztül a töltés minden részletét ellenőrizheted akár okos órádon is.',
          performance: '7,4 / 11 / 22 kW',
          extra: 'Autostart, App, IP54, Dinamikus terheléselosztás, 3év garancia, Állapotvilágítás, 5m kábel',
        },
        {
          id: 2,
          name: 'WALLBOX- Commander2/2S',
          alt: 'WALLBOX- Commander2/2S falra szerelhető érintőképernyős EV töltő',
          image: 'wallbox-commander-2s.png',
          description:
            'A Wallbox Commander sorozata kifejezetten ipari vagy közösségi/osztott használatra lett kifejlesztve. A Commander 2 érintőképernyős kezelőfelülettel van felszerelve, míg a 2S a legolcsóbb elérhető osztott töltési megoldást kínálja. Mindkét berendezés ECO-Smart, Power Boost és Dinamikus Teljesítménymegosztás funkciókkal érhető el a kínálatunkban.',
          performance: '7,4 / 11 / 22 kW',
          extra: 'Power Boost, ECO-Smart, Dinamikus terhelés megosztás, Applikáció, IP54, 5m kábel, Érintőképernyő',
        },
      ],
    };
  },
};
</script>

<style></style>
