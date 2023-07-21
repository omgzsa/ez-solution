<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row justify="center">
      <v-col cols="12" sm="11" md="5" lg="6" offset-lg="1">
        <h2 class="overline font-weight-bold mb-2 orange--text text--darken-3">
          bevezetés
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          {{ introduction.title }}
        </h3>
        <p class="body-2 text-lg-body-1">{{ introduction.text }}</p>
      </v-col>

      <v-col cols="12" sm="11" md="5" align-self="end">
        <v-list class="pa-0" dense v-for="item in benefits" :key="item.text">
          <v-list-item>
            <v-list-item-icon class="ml-0 mr-3"
              ><v-icon color="solar">mdi-check-bold</v-icon></v-list-item-icon
            >
            <span class="body-2 text-lg-body-1">
              {{ item.text }}
            </span>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      introduction: {
        title: 'Otthoni napelemes rendszerek előnyei',
        text:
          'Egy napelemes rendszer telepítésével lenullázhatja villanyszámláját. Azonban olyan további lehetőségek nyílnak meg otthona fejlesztésére, melyekkel maximalizálhatja megtakarítását, tovább függetlenedhet az energiaáraktól és teljes egészében kihasználhatja a nap erejét.',
      },
      benefits: [
        {
          text: 'Lenullázhatja villanyszámláját',
        },
        {
          text: 'Ingyen töltheti elektromos autóját',
        },
        {
          text: 'Teljesen megszabadulhat rezsiköltségeitől',
        },
        {
          text: 'Növelheti ingatlana értékét',
        },
        {
          text: 'Biztonságban tudhatja családját',
        },
      ],
    };
  },
};
</script>

<style></style>
