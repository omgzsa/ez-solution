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
          Teljeskörű szolgáltatás!<br />
          Az EZ szoftver segít kiválasztani az autót, meghatározza az elérhető megtakarítást és ehhez választ töltőt, illetve méretezi a napelemes rendszert.
        </h3>
        <p class="body-2 text-lg-body-1">
          Saját fejlesztésű szoftverünk segítségével a rendszered a jelen szokásaidra és jövőbeli terveidre méretezzük. Így az hosszú évekig ki tudja szolgálni családod igényeit. Ha megvan a tökéletes rendszer és ezt leszerződjük neked már semmi dolgod, az engedélyeztetést és a telepítést teljes egészében csapatunk intézi!
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
          alt="EV töltő egy autóba csatlakoztatva"
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
          alt="EV töltő egy autóba csatlakoztatva"
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
            'Igényeid, otthonod és elektromos autód paraméterei alapján EZ szoftverünk megkeresi a számodra tökéletes töltőt.',
        },
        {
          id: '2',
          title: 'Végleges ajánlat',
          text:
            'A felmérés során készült előzetes árajánlatot véglegesítjük és megküldjük számodra a kivitelezési szerződéssel együtt.',
        },
        {
          id: '3',
          title: 'Szerződés kötés',
          text:
            'A szerződést lehetőséged van online aláírással hitelesíteni így gyorsítani tudjuk a kivitelezés megkezdését.',
        },
        {
          id: '4',
          title: 'Szállítás és felszerelés',
          text:
            'Kiszállítjuk rendszeredet, amit lehetőség szerint már aznap be is szerelünk. Majd felprogramozunk, és természetesen megtanítjuk neked a használatát is!',
        },
      ],
    };
  },
};
</script>

<style></style>
