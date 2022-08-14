<template>
  <v-container class="my-16 site-wrapper">
    <v-row class="d-flex mr-md-auto">
      <v-col
        cols="12"
        sm="10"
        offset-sm="1"
        md="8"
        lg="6"
        offset-lg="1"
        class="mb-sm-10"
      >
        <h2 class="overline font-weight-bold mb-2 indigo--text text--darken-3">
          termékek
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Hőszivattyús rendszereink
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="justify-space-around">
      <v-col sm="10" md="5">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          height="100%"
          light
        >
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              EZ 12+ burgundi
            </h4>
            <v-img
              alt="EZ 12 burgundi klíma"
              max-height="400"
              contain
              :src="require('../../assets/images/products/ez12-burgundi.jpg')"
            />
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              EZ 12+ fekete
            </h4>
            <v-img
              alt="EZ 12 fekete klíma"
              max-height="400"
              contain
              :src="require('../../assets/images/products/ez12-fekete.jpg')"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text text--darken-3"
        >
          Monoblokk hőszivattyú
        </h4>
        <p class="body-2 text-lg-body-1">
          Monoblokk hőszivattyú az egyedüli, tökéletes és költséghatékony
          fűtési-hűtési megoldás, ami -20°C foktól + 50°C fokig teljes fűtést és
          hűtést biztosít. Beszereléséhez nem kell klímaszerelő, nem kell
          rombolni és festeni, nincs kültéri egysége. Ára beszereléssel
          megegyezik egy téliesített inverteres klíma árával és esztétikus
          beszerelésével. Az EZ monoblokk hőszivattyú megjelenésével, egy
          radiátor méretével azonos nagyságú dizájneleme a lakásnak. Elhelyezése
          lehetséges ablak alá, fölé vagy más helyre, minden olyan falra, aminek
          külső kapcsolata van. A hőszivattyú 1 egység áramból, több, mint 4
          egység hőt/hideget állít elő a külső levegőből. A berendezések
          helyiségenként, távirányítóval szabályozható és programozható.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="justify-space-around">
      <v-col sm="10" md="5">
        <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
          EZ 428
        </h4>
        <v-img
          alt="Fintek UES klíma"
          max-height="400"
          contain
          :src="require('../../assets/images/products/fintek-ues-1.jpg')"
        />
      </v-col>
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text text--darken-3"
        >
          Központi hőszivattyú
        </h4>
        <p class="body-2 text-lg-body-1">
          Az EZ szabadalmaztatott technológiájának köszönhetően egyedülálló
          kisteljesítményű központi hőszivattyúkat kínálunk. Egy központi
          egységhez akár 4 beltéri egység is csatlakoztatható. Az UES
          rendszernek nincs kültéri egysége, mert a központi egység is az
          ingatlanon belül helyezkedik el. A rendszer olyan kiegészítő
          funkciókat tartalmaz, melyek garantálják, hogy -25°C fokban is
          megfelelő hatásfokkal fűtsön. A berendezés minden, már kiépített
          fűtési rendszerre rászabható. Az Ön számára tökéletes megoldást
          tanácsadói felmérésünk során találjuk meg.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //
};
</script>

<style></style>
