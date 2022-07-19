<template>
  <v-container class="my-16">
    <v-row class="d-flex mr-md-auto">
      <v-col
        cols="12"
        sm="8"
        offset-sm="1"
        md="8"
        offset-md="0"
        lg="6"
        offset-lg="1"
        class="mb-sm-10"
      >
        <h2 class="overline font-weight-bold mb-2 orange--text text--darken-3">
          folyamat
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Napelem szolgáltatás bemutatása!
        </h3>
        <p class="body-2 text-lg-body-1">
          Szolgáltatásunk teljeskörű. A telepítési folyamatot úgy dolgoztuk ki,
          hogy Önnek csak választania kelljen megoldásaink közül.
        </p>
      </v-col>
    </v-row>

    <v-row justify="start" align="center">
      <v-col cols="11" sm="6" md="4" offset-lg="1">
        <v-timeline dense clipped align-top class="ml-n6">
          <v-timeline-item
            v-for="item in benefits"
            :key="item.id"
            small
            color="solar"
          >
            <v-row align="baseline" justify="start">
              <v-col cols="12" md="1" class="pt-md-1">
                <span
                  class="text-h5 text-lg-h4 orange--text text--darken-3 ml-md-n4"
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
      <v-col
        cols="6"
        offset="1"
        class="d-none d-md-flex relative"
        align-self="start"
      >
        <v-img
          alt="A house with solar panels on the roof"
          cover
          height="100%"
          width="100%"
          :src="require('../../assets/images/magan-solar-timeline.jpg')"
        />
      </v-col>
      <v-col
        cols="5"
        offset="1"
        class="d-none d-sm-flex d-md-none"
        align-self="start"
      >
        <v-img
          class=""
          alt="A house with solar panels on the roof"
          contain
          height="100%"
          width="100%"
          :src="require('../../assets/images/magan-solar-timeline.jpg')"
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
            'Felmérjük igényeit és otthonát. Ez alapján az EZ szoftverünk megoldásokat javasol, melyek közül segítségünkkel kiválaszthatja az Ön számára megfelelőket.',
        },
        {
          id: '2',
          title: 'Végleges ajánlat',
          text:
            'A felmérés során készült előzetes árajánlatot 48 órán belül véglegesítjük és megküldjük Önnek a kivitelezési szerződéssel együtt.',
        },
        {
          id: '3',
          title: 'Szerződés kötés',
          text:
            'A szerződést lehetősége van online aláírással hitelesíteni így gyorsítani tudjuk a kivitelezés megkezdését.',
        },
        {
          id: '4',
          title: 'Engedélyeztetés',
          text:
            'Ha visszaküldte a szerződést, megigényeljük a Műszaki Gazdasági Tájékoztatót (MGT)-t, amely megérkezése akár 30 napig is tarthat.',
        },
        {
          id: '5',
          title: 'Szállítás és felszerelés',
          text:
            'Kiszállítjuk rendszerét, amit lehetőség szerint már aznap be is szerelünk. Bizonyos esetekben erre nincsen lehetőség, ilyenkor külön napra esik a szállítás és a szerelés időpontja.',
        },
        {
          id: '6',
          title: 'Készre jelentés',
          text:
            'A készre jelentés után az áramszolgáltatója 30 napon belül lecseréli a villanyórát. Ezután rendszere azonnal megkezdi a termelést.',
        },
      ],
    };
  },
};
</script>

<style>
.v-timeline::before {
  top: 50px;
  height: calc(100% - 110px);
}

/* .theme--light.v-timeline:before {
    background: #313131 !important;
} */

/* .sticky {
  position: sticky;
  top: 20px;
} */
/* .v-timeline-item__dot, .v-timeline-item__dot--small {
  border-radius: 50%;
  width: 30px !important;
  height: 30px !important;
  border: 1px black solid !important;
}

.v-timeline-item__dot--small .v-timeline-item__inner-dot {
  height: 8px;
  width: 8px;
  
} */
</style>
