<template>
  <v-container class="site-wrapper my-16">
    <v-row justify="center" class="mb-10 mb-lg-16 mx-auto">
      <v-col cols="12" md="8">
        <h2 class="overline font-weight-bold mb-2 blue--text text--darken-4">
          fűtés-hűtés
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-6">
          Hőszivattyús rendszereink céges ingatlanokhoz
        </h3>
        <p class="body-2 text-sm-body-1 mb-n2 " style="max-width: 860px;">
          Irodaházak, hotelek, ipari csarnokok részére csapatunk minden esetben egyedi tervezéssel és ajánlattal készül. Komplett hőszivattyús, árnyékolási és egyéb gépészeti megoldásokkal együtt telepített napelemes rendszerek kivitelezését is vállaljuk akár kiegészítő energia tárólóval. Minden cég különböző működési paramétereiből fakadóan más megoldással tudja a legtöbb értéket teremteni és ezáltal spórolni egy energetikai fejlesztésen keresztül. Mi minden ügyfelünk esetében ezeket a paramétereket elemezzük, hogy a tökéletes megoldást tudjuk biztosítani ügyfeleinknek! Természetesen a tervezésben saját fejlesztésű EZ szoftverünk van segítségünkre!
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <ul class="custom-marker">
          <li v-for="item in firms" :key="item.id" class="py-2">
            <h5 class="text-h6 font-weight-bold mb-2">
              {{ item.title }}
            </h5>
            <p class="body-2 text-sm-body-1">{{ item.text }}</p>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['firms'],
};
</script>

<style></style>
