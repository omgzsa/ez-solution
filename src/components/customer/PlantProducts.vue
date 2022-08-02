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
      <!-- <plant-products-item /> -->
      <v-col sm="10" md="5">
        <v-img
          alt="Fintek Oslo air conditioner"
          max-height="400"
          contain
          :src="require('../../assets/images/products/fintek-oslo-2.jpg')"
        />
      </v-col>
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text darken-4"
        >
          Hagyományos klíma, inverterrel
        </h4>
        <p class="body-2 text-lg-body-1">
          A hagyományos klíma berendezések, inverteres változatai átmeneti
          időjárásban fűteni is képesek otthonát. A tél nagyrészén azonban
          jelenleg meglévő fűtését kell használnia. Ezek a gépek a legolcsóbbak
          kínálatunkban, viszont a beszerelésük körülményes és drága, mert
          komoly belső munkálatokat igényel. Szabályozásuk kényelmes, mert a
          megfelelő hőmérsékletet helységeken belül tudjuk beállítani.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="justify-space-around">
      <!-- <plant-products-item /> -->
      <v-col sm="10" md="5">
        <v-img
          alt="Fintek Oslo air conditioner"
          max-height="400"
          contain
          :src="require('../../assets/images/products/fintek-oslo-1.jpg')"
        />
      </v-col>
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text darken-4"
        >
          Központi hőszivattyú
        </h4>
        <p class="body-2 text-lg-body-1">
          Lakóházakba csak akkor javasoljuk a központi hőszivattyút, ha
          mennyezetfűtés van, amivel a hűtés is megoldható. Tapasztalataink
          alapján csak ebben az esetben költséghatékony a hőszivattyú.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="justify-space-around">
      <!-- <plant-products-item /> -->
      <v-col sm="10" md="5">
        <v-img
          alt="Fintek Oslo air conditioner"
          max-height="400"
          contain
          :src="require('../../assets/images/products/foxess-inverter-1.jpg')"
        />
      </v-col>
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text darken-4"
        >
          Monoblokk hőszivattyús klíma
        </h4>
        <p class="body-2 text-lg-body-1">
          Az Innova 2.0 nem csak kiegészítő fűtésként alkalmazható, mint a
          hagyományos klímák, hanem egymaga gondoskodik az épület teljeskörű
          fűtéséről, hűtéséről. Beszereléséhez nem kell klímás, nem kell
          rombolni és festeni. A radiátor csővezetékeire, radiátor helyett is
          beépíthető, így az igazán hideg napokon radiátorként is működik a
          jelenlegi kazánjával.<br />
          ELEC modellje elektromos kiegészítő fűtéssel érkezik és 5,7 COP-re
          képes, így gázfűtés nélkül, teljeskörűen el tudja látni a fűtését
          egész évben. Helyiségenként kerül beszerelésre és úgy is
          szabályozható. Van berendezés kúti fűtésre és hűtésre is, 6.5 feletti
          COP-vel.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import PlantProductsItem from './PlantProductsItem.vue';

export default {
  // components: { PlantProductsItem },
};
</script>

<style></style>
