<template>
  <v-container class="site-wrapper my-16">
    <v-row class="d-flex mr-md-auto">
      <v-col
        cols="12"
        sm="10"
        offset-sm="1"
        md="8"
        offset-md="1"
        lg="6"
        offset-lg="1"
        class="mb-sm-10"
      >
        <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
          folyamat
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Az Ön kényelmét szolgáljuk
        </h3>
        <p class="body-2 text-lg-body-1">
          Szolgáltatásunk teljeskörű. A telepítési folyamatot úgy dolgoztuk ki,
          hogy Önnek csak választania kelljen megoldásaink közül.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" align="start">
      <v-col cols="11" sm="6" md="5" offset-lg="1" class="pa-0">
        <v-timeline dense clipped align-top class="ml-n6">
          <v-timeline-item
            v-for="item in benefits"
            :key="item.id"
            small
            color="charger"
          >
            <v-row align="baseline" justify="start">
              <v-col cols="12" md="1" class="pt-md-1">
                <span
                  class="text-h5 text-lg-h4 green--text text--darken-2 ml-md-n4"
                >
                  0{{ item.id }}
                </span>
              </v-col>
              <v-col cols="12" md="9" class="pt-md-1 mt-md-1">
                <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
                  {{ item.title }}
                </h4>
                <p class="body-2 text-lg-body-1">{{ item.text }}</p>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="6" md="6" class="d-none d-md-flex relative pa-0">
        <v-img
          alt="EV charger plugged into a car"
          cover
          height="760"
          :src="require('../../assets/images/magan-charger-timeline.jpg')"
        />
      </v-col>
      <v-col
        cols="6"
        class="d-none d-sm-flex d-md-none pr-0"
        align-self="start"
      >
        <v-img
          class=""
          alt="EV charger plugged into a car"
          contain
          :src="require('../../assets/images/magan-charger-timeline.jpg')"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        {
          id: '1',
          title: 'EZ felmérés',
          text:
            'Igényei, otthona és elektromos autója paraméterei alapján EZ szoftverünk megkeresi az Ön számára tökéletes töltőt. A termék technikai adatait, valamint egy előzetes árajánlatot egyből át is adunk Önnek.',
        },
        {
          id: '2',
          title: 'Végleges ajánlat',
          text:
            'A felmérés során készült előzetes árajánlatot 24 órán belül véglegesítjük és megküldjük Önnek a kivitelezési szerződéssel együtt.',
        },
        {
          id: '3',
          title: 'Szerződés kötés',
          text:
            'A szerződést lehetősége van online aláírással hitelesíteni így gyorsítani tudjuk a kivitelezés megkezdését.',
        },
        {
          id: '4',
          title: 'Szállítás és felszerelés',
          text:
            'Kiszállítjuk rendszerét, amit lehetőség szerint már aznap be is szerelünk. Majd felprogramozunk, és megtanítjuk Önnek a használatát, hogy azonnal használni tudja a terméket.',
        },
      ],
    };
  },
};
</script>

<style></style>
